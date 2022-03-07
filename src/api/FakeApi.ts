import { Node, Edge, Path } from '../model/DbModel';

import { edges, nodes, path } from './data';

export const fetchNodes = (): Node[] => {
  // TODO: Fetch Nodes from your API
  return nodes;
};

export const fetchEdges = (): Edge[] => {
  // TODO: Fetch Edges from your API
  return edges;
};

export const fetchPath = (): Path => {
  // TODO: Fetch Path from your API
  return path;
};
