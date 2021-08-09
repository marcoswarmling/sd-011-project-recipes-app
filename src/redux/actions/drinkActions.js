import { fetchAPIName, fetchAPICategory,
  fetchAPICategoryFilter, fetchAPIByID,
  fetchDrinkRandom, fetchDrinkIngredient } from '../../services/fetchAPIDrink';
import { fetchAPIName as fetchRecomendations } from '../../services/fetchAPIFood';

export const DRINK_LIST_SUCCESS = 'DRINK_LIST_SUCCESS';
export const DRINK_CATEGORY_SUCCESS = 'DRINK_CATEGORY_SUCCESS';
export const DRINK_LIST_CATEGORY_SUCCESS = 'DRINK_LIST_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const DRINK_DETAILS_ID_SUCCESS = 'DRINK_DETAILS_ID_SUCCESS';
export const FOOD_RECOMENDATIONS_SUCCESS = 'FOOD_RECOMENDATIONS_SUCCESS';
export const DRINK_INGREDIENTS = 'DRINK_INGREDIENTS';
export const SAVE_FAVORITES = 'SAVE_FAVORITES';

export const drinkListSuccess = (payload) => ({
  type: DRINK_LIST_SUCCESS,
  payload,
});

export const fetchDrinkList = (name) => async (dispatch) => {
  const returnFetch = await fetchAPIName(name);
  dispatch(drinkListSuccess(returnFetch));
};

const drinkCategorySuccess = (payload) => ({
  type: DRINK_CATEGORY_SUCCESS,
  payload,
});

export const fetchDrinkCategory = (category) => async (dispatch) => {
  const returnFetch = await fetchAPICategory(category);
  dispatch(drinkCategorySuccess(returnFetch));
};

const drinkListByCategorySuccess = (payload) => ({
  type: DRINK_LIST_CATEGORY_SUCCESS,
  payload,
});

export const updateCategory = (payload) => ({
  type: UPDATE_CATEGORY,
  payload,
});

export const fetchDrinkListByCategory = (category) => async (dispatch) => {
  dispatch(updateCategory(category));
  const returnFetch = await fetchAPICategoryFilter(category);
  dispatch(drinkListByCategorySuccess(returnFetch));
};

const drinkDetailsIDSuccess = (payload) => ({
  type: DRINK_DETAILS_ID_SUCCESS,
  payload,
});

export const fetchDrinkID = (id) => async (dispatch) => {
  const returnFetch = await fetchAPIByID(id);
  dispatch(drinkDetailsIDSuccess(returnFetch));
};

const foodRecomendations = (payload) => ({
  type: FOOD_RECOMENDATIONS_SUCCESS,
  payload,
});

export const fetchFoodRecomendations = (name) => async (dispatch) => {
  const returnFetch = await fetchRecomendations(name);
  dispatch(foodRecomendations(returnFetch));
};

export const saveFavoritesRedux = (payload) => ({
  type: SAVE_FAVORITES,
  payload,
});

export const saveFavoriteRecipe = (id) => async (dispatch) => {
  const returnFetch = await fetchAPIByID(id);
  const genericObj = {
    id: returnFetch[0].idMeal,
    type: 'bebida',
    area: returnFetch[0].strArea,
    category: returnFetch[0].strCategory,
    alcoholicOrNot: '',
    name: returnFetch[0].strMeal,
    image: returnFetch[0].strMealThumb,
  };
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes === null) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([genericObj]));
    dispatch(saveFavoritesRedux(genericObj));
  } else {
    const newFavoriteRecipes = [...favoriteRecipes, genericObj];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
    dispatch(saveFavoritesRedux(newFavoriteRecipes));
  }
};

export const removeFavoriteRecipe = (id) => (dispatch) => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const newFavoriteRecipes = favoriteRecipes
    .filter((item) => !(item.id === id && item.type === 'bebida'));
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
  dispatch(saveFavoritesRedux(newFavoriteRecipes));
};

export const randomDrinkId = () => async () => {
  const returnFetch = await fetchDrinkRandom();
  return returnFetch;
};

const searchDrinkIngredients = (payload) => ({
  type: DRINK_INGREDIENTS,
  payload,
});

export const drinkIngredients = () => async (dispatch) => {
  const returnFetch = await fetchDrinkIngredient();
  dispatch(searchDrinkIngredients(returnFetch));
};
