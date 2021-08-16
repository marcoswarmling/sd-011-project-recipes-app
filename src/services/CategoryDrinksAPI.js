export async function CategoryDrinksAPI() {
  const linkDrinkCategory = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const awaitDrink = await fetch(linkDrinkCategory);
  const awaitDrinkToJSON = await awaitDrink.json();
  return awaitDrinkToJSON.drinks.map((item) => Object.values(item)[0]);
}

export async function CategoryDrinkFilter(param) {
  const linkDrinkCategory = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`;
  const awaitDrink = await fetch(linkDrinkCategory);
  const awaitDrinkToJSON = await awaitDrink.json();
  return awaitDrinkToJSON;
}
