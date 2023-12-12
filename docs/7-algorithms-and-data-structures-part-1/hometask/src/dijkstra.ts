import { DijkstraInterface, Path } from './types';
import { WeightedGraph } from './weighted-graph';
import { Vertex } from './vertex';
import { PriorityQueue } from './priority-queue';

export class Dijkstra implements DijkstraInterface<Vertex> {
  constructor(private graph: WeightedGraph) {};

  findShortestPath(vertex1: Vertex, vertex2: Vertex): Path {
    return this.findAllShortestPaths(vertex1)[vertex2.key];
  }

  findAllShortestPaths(vertex: Vertex): Record<string, Path> {
    const priorityQueue = new PriorityQueue();
    let paths: Record<string, Path> = {};

    for (const vertexKey in this.graph.adjacencyList) {
      paths = {
        ...paths,
        [vertexKey]: { path: [], distance: Infinity },
      };
    }

    const visited: Record<string, boolean> = {};
    priorityQueue.enqueue(vertex);
    visited[vertex.key] = true;
    paths[vertex.key] = { path: [vertex.key], distance: 0 };

    while (priorityQueue.collection.length > 0) {
      const currentNode: any = priorityQueue.dequeue();
      const currentNodePath = currentNode.key ? paths[currentNode.key] : paths[currentNode.vertex];
      const adjacentVertices = currentNode.key
        ? this.graph.adjacencyList[currentNode.key]
        : this.graph.adjacencyList[currentNode.vertex];

      adjacentVertices.forEach((adjacentVertex: any) => {
        if (!adjacentVertex) {
          return;
        }

        const adjacentPath = paths[adjacentVertex.vertex];
        const distance = currentNodePath.distance + adjacentVertex.weight;

        if (!adjacentPath || distance < adjacentPath.distance) {
          paths[adjacentVertex.vertex] = {
            path: [...currentNodePath.path, adjacentVertex.vertex],
            distance,
          };
        }

        if (!visited[adjacentVertex.vertex]) {
          visited[adjacentVertex.vertex] = true;
          priorityQueue.enqueue(adjacentVertex);
        }
      });
    }

    return paths;
  }
}
