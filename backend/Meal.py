class Meal:
    def __init__(
            self,
            meal_id: str,
            meal_name: str,
            mealIdx: list,
            calories: float,
            tags: list,
            ingredients: list,
            procedure: list
    ):
        self.meal_id = meal_id
        self.name = meal_name
        self.mealIdx = mealIdx
        self.calories = calories
        self.tags = tags
        self.ingredients = ingredients
        self.procedure = procedure
        self.diet = list()
        self.keywords = {'tags': list(), 'ingredients': list(), 'procedure': list()}

    def __str__(self):
        msg = \
            f"id: {self.meal_id}\t"\
            f"mealIdx: {self.mealIdx}\t"\
            f"calories: {self.calories}\t"\
            f"tags: {self.tags}\t"\
            f"ingredients: {self.ingredients}\t"\
            f"procedure: {self.procedure}\t"\
            f"diet: {self.diet}"
        return msg


