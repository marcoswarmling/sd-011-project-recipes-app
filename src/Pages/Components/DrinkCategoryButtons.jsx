import React from 'react';
import { CategoryDrinksAPI, CategoryDrinkFilter } from '../../services/CategoryDrinksAPI';
import Context from '../../Context_Configs/Context';

export default function DrinkCategoryButtons() {
  const categories = 5;

  const { setDrinksForCategory, setRenderCategory } = React.useContext(Context);
  const [drinkCategories, setDrinkCategories] = React.useState();
  const [selectedCategory, setSelectedCategory] = React.useState('');

  React.useEffect(() => {
    async function fetchDrinkParams() {
      const categoryDrink = await CategoryDrinksAPI();
      setDrinkCategories(categoryDrink);
    }
    fetchDrinkParams();
  }, []);

  async function requestDrinksComingFromCategories({ target }) {
    setSelectedCategory(target.innerHTML);
    const lastCategory = selectedCategory;

    if (target.innerHTML === lastCategory || target.innerHTML === 'All') {
      setRenderCategory(true);
    } else {
      const twelveItems = 12;
      const drinks = await CategoryDrinkFilter(target.innerHTML);

      setDrinksForCategory(drinks && drinks
        .drinks.filter((_, index) => index < twelveItems));
      setRenderCategory(false);
    }
  }

  return (
    <div>
      {drinkCategories && drinkCategories.filter((_, index) => index < categories)
        .map((category, index) => (
          <button
            onClick={ (e) => requestDrinksComingFromCategories(e) }
            type="button"
            key={ index }
            data-testid={ `${category}-category-filter` }
          >
            {category}
          </button>
        ))}
      <button
        type="button"
        onClick={ (e) => requestDrinksComingFromCategories(e) }
        data-testid="All-category-filter"
      >
        All
      </button>
    </div>
  );
}
