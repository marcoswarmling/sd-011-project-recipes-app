const createDoneRecipes = (doneRecipes) => {
  if (!doneRecipes) {
    localStorage.setItem('doneRecipes', JSON.stringify([]));
  }
};

export default createDoneRecipes;
