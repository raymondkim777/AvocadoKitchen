import json


class WeightedGraph:
    def __init__(self, stringified=None):
        self.__graph = dict() if stringified is None else json.loads(stringified)
        self.__min_weight = float('inf')
        self.__max_weight = -1 * float('inf')
        # self.__graph[id1][id2] = weight

    def toString(self) -> str:
        return json.dumps(self.__graph)

    def addNode(self, meal_id: str) -> None:
        self.__graph[meal_id] = dict()

    def getNodes(self) -> dict.keys:
        return self.__graph.keys()

    def addWeight(self, id1: str, id2: str, weight: float) -> None:
        if id1 in self.__graph and id2 in self.__graph:
            self.__graph[id1][id2] = weight
            self.__graph[id2][id1] = weight
            self.__min_weight = min(self.__min_weight, weight)
            self.__max_weight = max(self.__max_weight, weight)
        else:
            raise ValueError(f'id not in nodes list')

    def getWeight(self, id1: str, id2: str) -> float | None:
        if id1 in self.__graph and id2 in self.__graph:
            return self.__graph[id1][id2]
        else:
            return None

    def getMinWeight(self) -> float:
        return self.__min_weight

    def getMaxWeight(self) -> float:
        return self.__max_weight

    def getNeighbors(self, meal_id: str) -> dict.keys:
        return self.__graph[meal_id].keys()

    def getTopWeights(self):
        result = {}
        for node in self.__graph:
            neighbors = self.getNeighbors(node)
            weights_list = []
            for neighbor in neighbors:
                weights_list.append((self.weightToProb(self.getWeight(node, neighbor)), neighbor))
            weights_list.sort(reverse=True)
            result[node] = weights_list
        return result

    def weightToProb(self, weight: float) -> float:
        # minWeight: 0, maxWeight: 1, anything below 0.5 weight is set to 0
        numer = weight - self.getMinWeight()
        denom = self.getMaxWeight() - self.getMinWeight()
        prob = numer / denom
        return prob


if __name__ == "__main__":
    wg = WeightedGraph()
    wg.addNode('1')
    wg.addNode('2')
    wg.addNode('3')
    print(list(wg.getNodes()))
    wg.addWeight('1', '2', 10)
    print(wg.getWeight('2', '1'))
    print(wg.getNeighbors('1'))
    print(wg.getNeighbors('3'))

    wg_str = wg.toString()
    wg2 = WeightedGraph(wg_str)
    print(list(wg2.getNodes()))
    print(wg2.getWeight('2', '1'))
    print(wg2.getNeighbors('1'))
    print(wg2.getNeighbors('3'))
