from math import log, exp
import pandas as pd
from random import seed, uniform
from Meal import Meal
from WeightedGraph import WeightedGraph
from konlpy.tag import Okt
from sklearn.feature_extraction.text import TfidfVectorizer
from gensim import models


KEYWORD_CNT = 5
TAG_WEIGHT = 10
ING_WEIGHT = 5
PRO_WEIGHT = 1
SIM_STANDARD = 0.25


def removeStopWords(given: list):
    f = open('stopwords.txt', 'r', encoding='utf-8')
    stopwords = f.read().split(', ')
    new_list = []
    for word in given:
        if word not in stopwords:
            new_list.append(word)
    return new_list


df = pd.read_csv('Starting Recipes CSV - Sheet1.csv', encoding='utf-8')

all_meals = dict()  # {meal_id: Meal()}

for row in df.iterrows():
    df_data = row[1]
    arguments = (
        str(row[0]),
        df_data['Title'],
        [int(idx) for idx in df_data['MealIndex'].split(',')],
        df_data['Calories'],
        df_data['Tags'].split(','),
        [item.strip()[1:-1].split(',')[0] for item in df_data['Ingredient'].split(';')],
        [step.strip()[1:-1].strip() for step in df_data['Procedure'].split(';')]
    )
    meal_item = Meal(*arguments)
    all_meals[meal_item.meal_id] = meal_item

# extract keywords
okt = Okt()

for meal_id in all_meals:
    mealItem = all_meals[meal_id]

    # tags lemmatization
    mealItem.keywords['tags'] = removeStopWords(okt.nouns(" ".join(all_meals[meal_id].tags)))

    # ingredients lemmatization
    mealItem.keywords['ingredients'] = removeStopWords(okt.nouns(" ".join(all_meals[meal_id].ingredients)))

    # procedure keywords extraction
    doc = []
    for p in all_meals[meal_id].procedure:
        val = okt.nouns(p)
        doc.append(' '.join(val))

    tf_idf_vector = TfidfVectorizer(token_pattern=r'\b\w+\b', min_df=1)
    matrix = tf_idf_vector.fit_transform([' '.join(doc)])
    feature_names = tf_idf_vector.get_feature_names_out()

    tf_idf_list = [(feature_names[i], tfidf) for i, tfidf in enumerate(matrix.toarray()[0])]
    tf_idf_list.sort(key=lambda x: x[1], reverse=True)
    for i in range(KEYWORD_CNT):
        mealItem.keywords['procedure'].append(tf_idf_list[i][0])

# vector space model

ko_model = models.fasttext.load_facebook_model('cc.ko.300.bin')

# create graph
mealGraph = WeightedGraph()  # contains meal_id and similarity values
meal_id_list = list(all_meals.keys())

# adding nodes
for i in range(len(meal_id_list) - 1):
    for j in range(i + 1, len(meal_id_list)):
        node1 = meal_id_list[i]
        node2 = meal_id_list[j]
        mealGraph.addNode(node1)
        mealGraph.addNode(node2)
        mealGraph.addWeight(node1, node2, -1)

# TAG_WEIGHT = 10
# ING_WEIGHT = 5
# PRO_WEIGHT = 1

all_weights = []

# computing & adding edge weights
for node1 in meal_id_list:
    for node2 in meal_id_list:
        if node1 == node2:
            continue
        # compute edge weight
        weights = {'tags': 0, 'ingredients': 0, 'procedure': 0}

        for kw_type in weights:
            node1_keywords = all_meals[node1].keywords[kw_type]
            node2_keywords = all_meals[node2].keywords[kw_type]
            temp_weights = []

            for kw1 in node1_keywords:
                for kw2 in node2_keywords:
                    # compute sim value
                    temp_weights.append(ko_model.wv.similarity(kw1, kw2))
            for i in range(len(temp_weights)):
                temp_weights[i] = (temp_weights[i] / SIM_STANDARD) ** 2
            weights[kw_type] = sum(temp_weights)

        # combine all weights
        final_weight = \
            weights['tags'] * TAG_WEIGHT \
            + weights['ingredients'] * ING_WEIGHT \
            + weights['procedure'] * PRO_WEIGHT

        # add edge weights to graph
        mealGraph.addWeight(node1, node2, final_weight)

        all_weights.append((final_weight, node1, node2))

all_weights.sort()
print(all_weights)
G = mealGraph.getTopWeights()
for node in G:
    print(f'{all_meals[node].name}: ',end=' ')
    for id in G[node]:
        print(f'({all_meals[id[1]].name, id[0]})')

##############################
