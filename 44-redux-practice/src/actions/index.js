import { FETCH_PAINTINGS, SELECT_ACTIVE_PAINTING, DELETE_PAINTING, UPDATE_FILTER } from './types';
import artworks from '../data/artworks';

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function selectPainting(id) {
  return { type: SELECT_ACTIVE_PAINTING, id };
}

export function deletePainting(id) {
  return { type: DELETE_PAINTING, id };
}

export function updateFilter(filter) {
  return { type: UPDATE_FILTER, filter };
}
