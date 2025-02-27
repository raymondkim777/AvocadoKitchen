# Avocado Kitchen - A Smart Meal Plan App

This application allows the user to manage their weekly meal plan, and algorithmically formulates plans based on nutrition, user diet restrictions, and adjustable budget. Users can create and upload their own recipes to a community, where other users can like, comment, and download/modify the recipe for themselves. The application also automatically tracks recipe ingredients and, with the user's permission, auto-orders them from South Korea's Coupang and MarketKurly online stores. 

## Periods of Development  
- April 23, 2022 - Present

## Development Environment  
- 'NodeJS, React Native, TailwindCSS, Python' 
- 'Database: Google Firebase'

## Figma Pre-Design

A majority of the current progress was spent on developing the front-end application for usability, navigability, and aesthetics. The initial designs of each major page were drafted on Figma, where aspects like the color palette, page layout, and general navigation was experimented. More pages were added throughout the process as the app expanded in functionality and pages. 

<div align="center" style="display: flex">
   <img src="readmeimages/figma1.png" height=400 width=600>
   <img src="readmeimages/figma2.png" height=400 width=200>
</div>

Note that a large portion of the general navigation and widgets were edited during front-end development. The [Figma link](https://www.figma.com/design/Eqfgi0TAOecSLGTEpJMXLM/Meal-Plan-App?node-id=0-1&p=f&t=kHnIiwVHbvht7x5v-0) is provided if more in-depth exploration is desired. 


## Front-End Development

Since the application is mainly intended for Korean consumers, both English and Korean had to be considered for application content. The application itself was made to automatically display Korean if the system language was set to Korean, and English otherwise. 

### Login/SignUp Page

The first page created on the application was the login and signup page. The user is identified via their email and verified with a password, both of which are stored in an online database. The user also has the option to sign up, or sign in via Google, which utilizes the Google OAuth 2.0 url verification. Once ready, the user can click the login button to proceed to the homepage. 

<div align="center" style="display: flex">
   <img src="readmeimages/login1-small.png" height=600>
   <img src="readmeimages/login1-large.png" height=600>
</div>

### HomePage

The application homepage serves as an overview of the user's meal plan for the day/week. The first widget outlines the three meals for each day of the week and their calories. A scrollable list of suggested meals are displayed as cards underneath. Finally, the weekly meal plan's nutrition information, such as its total calories, protein, and carbs, is outlined at the bottom. Icons indicate whether the nutrition values are sufficient, or need to be supplemented/reduced. 

<div align="center" style="display: flex">
   <img src="readmeimages/homepage-small.png" height=600>
   <img src="readmeimages/homepage-large.png" height=600>
</div>

### Sidebar Navigation

Different pages of the application can be navigated by the sidebar. On a regular phone screen, the sidebar is accessed via the sidebar button at the top left of every page. For screens with wider aspect ratios, the sidebar is permanently present on the left-hand side of the screen. 

<div align="center" style="display: flex">
   <img src="readmeimages/sidebar-small.gif" height=600>
   <img src="readmeimages/sidebar-large.gif" height=600>
</div>

### Profile/Settings Page

The profile/settings page is where the user can adjust their dietary restrictions, such as specific diets or allergies. The user can also adjust their per meal, daily, or weekly budget. All the above is taken into account when automatically computing the user's weekly meal plan. The user can also link their Coupang/MarketKurly accounts if they wish to allow auto-ordering ingredients from those online stores. 

<div align="center" style="display: flex; margin-bottom: 15px;">
   <img src="readmeimages/profile-small.png" height=600>
   <img src="readmeimages/profile-large.png" height=600>
</div>

For pages such as the profile/settings page where user edit is possible/encouraged, the application double-checks whenever a user requests to leave the screen via a popup.

<div align="center" style="display: flex">
   <img src="readmeimages/profile-small.gif" height=600>
   <img src="readmeimages/profile-large.gif" height=600>
</div>

### Information Page

The information page provides the user with information regarding their diet, such as which foods to avoid, or which foods/ingredients are suggested for their diet. Such foods are displayed that the user can scroll through, with images for easier viewing. The page also includes legal disclaimers, as this application is not intending to be a substitute for medical advice.

<div align="center" style="display: flex">
   <img src="readmeimages/info-small.png" height=600>
   <img src="readmeimages/info-large.png" height=600>
</div>

### Meal Plan Page

The meal plan page is a more detailed overview of each meal included in the user's meal plan, and serves as an extension of the first widget in the homepage. This page includes additional features such as the user being able to edit and (delete???) specific meals. The meal plan page also includes a similar nutritional summary as the homepage, but shows the average daily nutrition for that meal plan instead of statistics for that specific day. 

<div align="center" style="display: flex">
   <img src="readmeimages/mealplan-small.png" height=600>
   <img src="readmeimages/mealplan-large.png" height=600>
</div>

### Add Meal Page

The add meal plage is where the user can add specific meals to their meal plan. They can select a specific day/meal, and manually input fields such as meal name, ingredients, and recipe steps. More conveniently, the user can also directly add existing recipes to their meal plan (explained later). This will auto fill the add meal page with the recipe information, which the user can edit to their liking. Once finished, the next page shows a budget estimation for online ordering, and allows the user to add additional tags or confirm whether they want their recipe published. 

<div align="center" style="display: flex; margin-bottom: 15px;">
   <img src="readmeimages/addmeal1-small.png" height=600>
   <img src="readmeimages/addmeal-large.gif" height=600>
</div>

#### Add Ingredients Page

If the user wants to add a specific ingredient, they can utilize the "Quick Search" feature by inputting ingredients into the top search bar. This queries Coupang/MarketKurly for relevant items, and selecting them will auto fill the ingredients page. The user can also manually input ingredient information, as well as optionally provide a Coupang/MarketKurly link that the application will use to auto-order, if the user desires. 

<div align="center" style="display: flex; margin-bottom: 15px;">
   <img src="readmeimages/addingredient-small.gif" height=600>
   <img src="readmeimages/addingredient-large.gif" height=600>
</div>

#### Add Recipe Step Page

When adding recipe steps, the user can use a counter to specify which recipe step they wish to add. They are also allowed to add recipe descriptions of any length (may perhaps change later to scale), and upload images (encoded in base64). 

<div align="center" style="display: flex; margin-bottom: 15px;">
   <img src="readmeimages/addrecipe-small.png" height=600>
   <img src="readmeimages/addrecipe-large.png" height=600>
</div>

### Recipe Search Page

The recipe browse page allows the user to browse recipes uploaded by other users in the community through a search bar at the top. The user can also open up option menus, where they can filter for specific diets, calorie/budget ranges, select whether to search by recipe name, users, or tags, and filter/order the results. A list of recipes will be displayed underneath the search bar as cards, split into multiple pages if necessary. 

<div align="center" style="display: flex; margin-bottom: 15px;">
   <img src="readmeimages/recipe-small.gif" height=600>
   <img src="readmeimages/recipe-large.gif" height=600>
</div>

Clicking a recipe card will navigate to a recipe page, with the recipe name, a table of ingredients, and procedure cards. The user can scroll through the ingredients table and select a specific row, where an ingredient card will pop up explaining the ingredient in detail. The user can also scroll through the recipe cards, and select each card to expand the recipe card for easier viewing. 

<div align="center" style="display: flex; margin-bottom: 15px;">
   <img src="readmeimages/recipecard1-small.png" height=550>
   <img src="readmeimages/recipecard2-small.png" height=550>
   <img src="readmeimages/recipecard3-small.png" height=550>
</div>

The recipe page also has buttons on the bottom for the user to further interact with the recipe. The user can like the recipe by clicking the heart icon, or navigate to the comment section by clicking the comment button. This will bring up a comment popup where the user can read and post comments. 

Crucially, the user can select "Add Meal" to add the recipe to their own meal plan. Clicking this button will navigate to the Add Meal Page, which will be auto-completed with the recipe information. The user is free to edit the recipe before adding it to their own meal plan (which will work identically as before). 

<div align="center" style="display: flex">
   <img src="readmeimages/recipebuttons-small.gif" height=600>
   <img src="readmeimages/recipebuttons-large.gif" height=600>
</div>

### My Cart Page

The cart page parses through the user's recipes and automatically displays the ingredients the user needs to buy from the Coupang/MarketKurly online stores in a table. The user can edit each ingredient's contents or count, or add new ingredients as they see fit. When adding ingredients, available options are read from the Coupang/MarketKurly stores, and each item's prices and delivery dates/methods are outlined. The total cost of ingredients is calculated for each store, and the final cost is displayed below. If the total is over the user's selected weekly budget, it is highlighted in red; otherwise, it is highlighted in green. 

<div align="center" style="display: flex; margin-bottom: 15px;">
   <img src="readmeimages/mycart-small.gif" height=600>
   <img src="readmeimages/mycart-large.gif" height=600>
</div>

The application avoids buying unnecessary ingredients by considering which items the user has in their fridge. Similarly to the cart page, the user is able to edit the amount of items, or add/remove items from their fridge. When adding items, the user will query from a list of consumer ingredients, sourced from a public [XML dataset](https://www.data.go.kr/data/15127578/openapi.do#/API%20%EB%AA%A9%EB%A1%9D/getFoodNtrCpntDbInq01) provided by the South Korean [Ministry of Food and Drug Safety](https://various.foodsafetykorea.go.kr/nutrient/). The application will refer to these items to avoid adding unnecessary items to the user's cart. The auto-ordering feature, should the user enable it, will use this cart to order the correct items. 

<div align="center" style="display: flex; margin-bottom: 15px;">
   <img src="readmeimages/myfridge-small.gif" height=600>
   <img src="readmeimages/myfridge-large.gif" height=600>
</div>

### Pages In Progress

Although most of the intended features of the application have been implemented, there are still some pages in progress. 

## Back-End Development

Back-end development started once the front-end portion of the application was somewhat finalized. The back-end portions include storing user/recipe data in a database and allowing the application read from and write to the databse (standard app content), as well as the actual meal plan computation (non-standard app content, the "Smart" of the Smart Meal Plan App). 

### DataBase

The database selected was Firebase, as it was free for the intended scope of the application, and used a tree structure akin to JSON objects for its storage instead of table-based storage like SQL. This aligned well with the hierarchial nature of user information and recipe information (ex. recipe $\rightarrow$ ingredients $\rightarrow$ ingredient_name), something that would have to be extensively modified to work well with table databases to remove redundancy. 

<div align="center">
   <img src="readmeimages/database-flowchart.png" height=400>
</div>

### Meal Plan Algorithm

Our application had to suggest varied, interesting mealplans that adhered to the user's dietary restrictions. To do this, a recipe selection algorithm was designed to query all existing recipes in the database. Our algorithm needed to achieve the following requirements: 

1. Select 21 meals (3 meals per 7 days) to suggest to the user.
2. Each meal should be appropriate for the time of day (ex. no steak for breakfast).
3. Each day's meals should adhere to the user's daily dietary restrictions, recommended nutrition/calories, and selected budget.
4. The meal plan should contain a variety of different types of meals (for a varied diet).
5. Recipes with $n$ portion sizes should span $n$ meals.

To fulfill Requirement #2, each recipe contains information about which meals of the day it is appropriate for, a data field mandatory for the author to fill in. The algorithm thus fulfills Requirement #1 by selecting 7 recipes for 7 meal slots, and repeating this process for breakfast, lunch, and dinner. 

To fulfill Requirement #3, the algorithm used a fairly simple method of dividing the user's daily recommended nutrition/calorie amount across the 3 meals, and filtering out recipes that fell outside of a certain range of those values. Nutrition/calorie division was done with a 3:4:5 ratio for breakfast, lunch, and dinner, based on generally accepted scientific literature. It is worth noting that the varying range for calories is much stricter than the range for nutrition, as a varied diet (Req #4) will adequately cover nutrition. 

The core of the selection algorithm is focused on satisfying Requirement #4. A high-level description of the algorithm is given below. 

- The algorithm fills up 7 meal slots, one at a time. Each recipe is selected via probability to allow for variance. Once a recipe is selected, the probability of selecting it or other similar recipes is reduced. 
- To achieve this, the algorithm is first initialized by forming all existing recipes into clusters based on similarity. All recipes inside the same cluster as the selected recipe will have their probability reduced, and recipes outside of the cluster will remain untouched.
- The recipe probabilities are reset each time the algorithm starts selecting breakfast, lunch, and dinner. 

Note that this algorithm naturally allows us to fulfill Requirement #5. Since each iteration selects a recipe to eventually fill 7 meal slots, a recipe with $n$ portion sizes can fulfill $n$ meal slots out of 7. Recipes with more portion sizes than available meal slots can be filtered out each iteration. 

### Detailed Algorithm Description

We now explain the inner workings of the algorithm, starting with its initialization.

Although the original algorithm idea utilized clusters, this was thrown out as it was difficult to perfectly determine whether two recipes were similar/different enough to be considered the same/different cluster. Instead, a fully connected weighted graph was constructed, with each recipe as nodes and quantified similarity scores as edge weights. Whenever a recipe is selected by the algorithm, all recipes with weights larger than some standard value would have their probabilities reduced, with the reduction amount proportional to the edge weights themselves. A minimum standard value was used to prevent two completely distinct recipes influencing each other via negligible similarity scores. 

#### Edge Weights

During initialization, the edge weights were computed by comparing each recipe's tags, ingredients, and procedures via Natural Language Processing. For any two recipes $A$ and $B$, each of $A$'s tags and $B$'s tags were inputted into a [Korean vector-space model](https://radimrehurek.com/gensim/models/word2vec.html) to yield a similarity score between 0 and 1. As a basis, a similarity value over 0.25 was considered significant; thus values over 0.25 were amplified and values below 0.25 were reduced according to the formula below.

$$TagSim_{A, B} = \sum(sim(t_a, t_b) \times \frac{1}{0.25})^2 \quad (\forall t_a \in A_{tags}, \forall t_b \in B_{tags})$$

The same formula was used to compute ingredient and procedure similarity for each recipe pair (as procedures used sentences, TF-IDF was used to extract 5 keywords). The three similarity values were then weighted and summed to compute the final recipe correlation value. 

$$Sim_{A, B} = (w_1 \times TagSim_{A, B}) + (w_2 \times IngredientSim_{A, B}) + (w_3 \times ProcedureSim_{A, B})$$

The specific weight values represent the similarity's importance, and were adjusted empirically based on testing while maintaining $w_1 \geq w_2 \geq w_3$.

#### Recipe Filtering (Nutrition)

After initialization, the algorithm is ready to run an arbitrary number of times until the user is satisfied with the outputted meal plan. We detail the specifics of each run. 

The algorithm first references the user's desired daily calorie count and budget and divides both amongst three meals. Calories are divided by a ratio of 3:4:5 per scientific literature, and budget uses the same ratio for convenience. 

The algorithm then filters out any recipes for each meal that fall outside a $\pm 500$ Cal or a $\pm ₩5000$ budget range. Additionally, the algorithm (NUTRITION ADD)

2200 Cal daily
20g protein each meal
320g carbs daily

#### Recipe Selection

Once recipe candidates for all three meal types have been confirmed, the algorithm starts by assigning all 7 breakfasts. Each breakfast recipe receives a probability weight of $1$, and a recipe is selected based on the probability weights. Once a recipe $A$ is selected, each connected recipe $B$ with weights higher than a standard value has its probability reduced based on the formula below. (Here, $MaxSim$ refers to the largest edge weight in the graph.)

$$RelSim_{A, B} = \frac{Sim_{A, B}}{MaxSim},$$
$$P_{B} = \max (P_{B} \times (1 - RelSim_{A, B}), 0.001) \quad \forall B \in \{ B \mid RelSim_{A, B} \geq 0.25 \}$$

A standard weight of $(0.25 \times MaxSim)$ was used to prevent unrelated recipes from influencing one another. Additionally, each probability has a minimum value of 0.001 to reduce excessive floating point and avoid a probability of 0, which would remove the recipe completely.

The probabilty continually repeats until 7 recipes have been chosen for that meal type. The algorithm then repeats this process for the other two meal types. This successfully creates a nutritionally complete weekly meal plan that adheres to the user's preferred calorie/budget settings. 