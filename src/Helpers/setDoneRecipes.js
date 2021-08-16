export default function setDoneRecipes(id, item, type) {
  console.log(item.strTags);
  let newObject;
  let tagsUseds = [];
  if (type === 'foods') {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    delete inProgressRecipes.meals[id];
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));

    if (item.strTags) tagsUseds = item.strTags.split(',');
    newObject = {
      id: item.idMeal,
      type: 'comida',
      area: item.strArea,
      category: item.strCategory,
      alcoholicOrNot: '',
      name: item.strMeal,
      image: item.strMealThumb,
      doneDate: `${new Date().toLocaleString().split(',')[0]}`,
      tags: tagsUseds,
    };
  }

  if (type === 'drinks') {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    delete inProgressRecipes.cocktails[id];
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    if (item.strTags) tagsUseds = item.strTags.split(',');

    newObject = {
      id: item.idDrink,
      type: 'bebida',
      area: '',
      category: item.strCategory,
      alcoholicOrNot: item.strAlcoholic,
      name: item.strDrink,
      image: item.strDrinkThumb,
      doneDate: `${new Date().toLocaleString().split(',')[0]}`,
      tags: tagsUseds,
    };
  }

  const currentDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  currentDoneRecipes.push(newObject);
  localStorage.setItem('doneRecipes', JSON.stringify(currentDoneRecipes));
}
