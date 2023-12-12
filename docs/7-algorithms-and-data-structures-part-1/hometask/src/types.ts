export interface WeightedGraphInterface<T> {
  addVertex(key: string): void;
  addEdge(vertex1: T, vertex2: T, weight: number): void;
}

export interface Path {
  path: string[];
  distance: number;
}

export interface Node {
  key: string;
  weight: number;
}

export interface DijkstraInterface<T> {
  findShortestPath(vertex1: T, vertex2: T): Path;
  findAllShortestPaths(vertex: T): Record<string, Path>;
}
