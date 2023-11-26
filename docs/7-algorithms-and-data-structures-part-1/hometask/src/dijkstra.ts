import { DijkstraInterface, Path } from './types';
import { WeightedGraph } from './weighted-graph';
import { Vertex } from './vertex';
import { PriorityQueue } from './priority-queue';

export class Dijkstra implements DijkstraInterface<Vertex> {
  constructor(private graph: WeightedGraph) {};

  findAllShortestPaths(vertex: Vertex): Record<string, Path> {
    let result: Record<string, Path> = {};

    for (const vertexKey in this.graph.adjacencyList) {
      if (vertex.key !== vertexKey) {
        result = {
          ...result,
          [vertexKey]: this.findShortestPath(vertex, new Vertex(vertexKey)),
        };
      }
    }

    return result;
  }

  findShortestPath(vertex1: Vertex, vertex2: Vertex): Path {
    const distance = {};
    const backtrace = {};
    let currentNodeKey: string;
    let path = [];
    const priorityQueue = new PriorityQueue();

    for (const vertexKey in this.graph.adjacencyList) {
      if (vertexKey === vertex1.key) {
        distance[vertexKey] = 0;
        priorityQueue.enqueue(vertexKey, 0);
      } else {
        distance[vertexKey] = Infinity;
        priorityQueue.enqueue(vertexKey, Infinity);
      }
      backtrace[vertexKey] = null;
    }

    while (priorityQueue.collection.length) {
      currentNodeKey = priorityQueue.dequeue().key;
      if (currentNodeKey === vertex2.key) {
        while (backtrace[currentNodeKey]) {
          path.push(currentNodeKey);
          currentNodeKey = backtrace[currentNodeKey];
        }
        break;
      }

      if (currentNodeKey || distance
        [currentNodeKey] !== Infinity) {
        for (const neighborNode of this.graph.adjacencyList[currentNodeKey]) {
          let distanceFromStartingNode = distance[currentNodeKey] + neighborNode.weight;
          let nextNeighborNode = neighborNode.vertex;
          if (distanceFromStartingNode < distance[nextNeighborNode]) {
            distance[nextNeighborNode] = distanceFromStartingNode;
            backtrace[nextNeighborNode] = currentNodeKey;
            priorityQueue.enqueue(nextNeighborNode, distanceFromStartingNode);
          }
        }
      }
    }

    return {
      path: (distance[vertex2.key] !== Infinity) ? path.concat(currentNodeKey).reverse() : [],
      distance: distance[vertex2.key],
    };
  }
}
