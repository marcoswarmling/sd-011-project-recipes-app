export function verifyFavoritesDrink(currentItem, id, currentFavoriteRecipes) {
  if (currentFavoriteRecipes.some((anyItem) => anyItem.id === id)) {
    const newStorage = currentFavoriteRecipes.filter((any) => any.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  } else {
    currentFavoriteRecipes.push({
      id: currentItem.idDrink,
      type: 'bebida',
      area: '',
      category: currentItem.strCategory,
      alcoholicOrNot: currentItem.strAlcoholic === 'Non alcoholic'
      || currentItem.strAlcoholic === 'Alcoholic'
        ? currentItem.strAlcoholic : '',
      name: currentItem.strDrink,
      image: currentItem.strDrinkThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(currentFavoriteRecipes));
  }
}

export function verifyFavoritesFood(currentItem, id, currentFavoriteRecipes) {
  if (currentFavoriteRecipes.some((anyItem) => anyItem.id === id)) {
    const newStorage = currentFavoriteRecipes.filter((any) => any.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newStorage));
  } else {
    currentFavoriteRecipes.push({
      id: currentItem.idMeal,
      type: 'comida',
      area: currentItem.strArea,
      category: currentItem.strCategory,
      alcoholicOrNot: '',
      name: currentItem.strMeal,
      image: currentItem.strMealThumb,
    });
    localStorage.setItem('favoriteRecipes', JSON.stringify(currentFavoriteRecipes));
  }
}
