from numpy.random import choice
from initialize import all_meals, mealGraph


MEAL_CNT = 2
DAY_CNT = 7

SIG_PROB = 0.5
MIN_PROB = 0.000001


def computeMealPlan(budget: int, totalCal: int, diet: str) -> list:
    # list form to feed into numpy.random.choices
    meal_id_list = list(mealGraph.getNodes())       # list of all meal_id in MealGraph
    meal_probability = [0.0 for i in meal_id_list]  # list of all selection probabilities

    # find appropriate subset based on user reqs
    for meal_id in findMealSubset(budget, totalCal, diet):
        meal_probability[meal_id_list.index(meal_id)] = 1.0

    meals = [['' for i in range(MEAL_CNT)] for j in range(DAY_CNT)]     # selected meals

    for meal_index in range(MEAL_CNT):      # selecting each meal type first
        meal_id_subset_index = []                   # stores indices of all subset items, to edit meal_id_list later
        meal_id_list_subset = []                    # stores subset of meal_id_list based on mealIdx
        meal_probability_subset = []                # stores probabilities of meal_id in meal_id_list_subset

        # only add meals with proper meal index into pool
        for i in range(len(meal_id_list)):
            if meal_index in all_meals[meal_id_list[i]].mealIdx:
                meal_id_subset_index.append(i)
                meal_id_list_subset.append(meal_id_list[i])
                meal_probability_subset.append(meal_probability[i])

        print(f"\nsubset_index: {meal_id_subset_index}")

        for day in range(DAY_CNT):
            print(f"total_prob: {meal_probability}")
            # select meal
            chosen_id = str(choice(meal_id_list_subset, 1, p=convertProbList(meal_probability_subset))[0])
            print(f"chosen: {chosen_id}")
            meals[day][meal_index] = chosen_id

            # update self weight in meal_probability & meal_probability_subset (guaranteed to exist)
            idx = meal_id_list_subset.index(chosen_id)
            meal_probability_subset[idx] = MIN_PROB
            meal_probability[meal_id_subset_index[idx]] = MIN_PROB

            # identify neighbors to update weights
            neighbors = mealGraph.getNeighbors(chosen_id)   # dict.keys

            # update weights of neighbors for both meal_probability, and meal_probability_subset (if it exists)
            for neighbor_id in neighbors:
                edge_weight = mealGraph.getWeight(chosen_id, neighbor_id)
                prob_mult = weightToProb(edge_weight)

                # update value in meal_probability
                idx_1 = meal_id_list.index(neighbor_id)
                new_prob = max(MIN_PROB, meal_probability[idx_1] * (1 - prob_mult))     # compute new probability value
                meal_probability[idx_1] = new_prob

                # update value in meal_probability_subset if it exists
                if neighbor_id not in meal_id_list_subset:
                    continue
                idx_2 = meal_id_list_subset.index(neighbor_id)
                meal_probability_subset[idx_2] = new_prob

    return meals


# have to add tags for vegan, vegetarian, etc
def findMealSubset(budget: int, totalCal: int, diet: str) -> list:
    return list(all_meals.keys())  # list of meal_id that suffices condition


def weightToProb(weight: float) -> float:
    # minWeight: 0, maxWeight: 1, anything below 0.5 weight is set to 0
    numer = weight - mealGraph.getMinWeight()
    denom = mealGraph.getMaxWeight() - mealGraph.getMinWeight()
    prob = numer / denom
    return prob if prob > SIG_PROB else 0


def convertProbList(prob_list):
    total = sum(prob_list)
    new_list = [prob_list[i] / total for i in range(len(prob_list))]
    print(f"newlist: {new_list}")
    return new_list


if __name__ == "__main__":
    meals = computeMealPlan(0, 0, '')
    print('Computed Meals:')
    for day in meals:
        print(f'({all_meals[day[0]].name}, {all_meals[day[1]].name})')
