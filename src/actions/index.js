export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
};

export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});
