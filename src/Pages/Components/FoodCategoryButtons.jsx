import React from 'react';
import { CategoryFoodAPI, CategoryFoodFilter } from '../../services/CategoryFoodAPI';
import Context from '../../Context_Configs/Context';
import '../../styles/foodCategoryButtons.css';

export default function FoodCategory() {
  const numberFour = 4;

  const { setRenderCategory, setFoodsForCategory } = React.useContext(Context);
  const [foodCategories, setFoodCategories] = React.useState();
  const [selectedCategory, setSelectedCategory] = React.useState('');

  React.useEffect(() => {
    async function fetchFoodParamsButtons() {
      const CategoryFood = await CategoryFoodAPI();
      setFoodCategories(CategoryFood);
    }
    fetchFoodParamsButtons();
  }, []);

  async function requestFoodsComingFromCategories({ target }) {
    const { value } = target;

    setSelectedCategory(value);
    const lastCategory = selectedCategory;
    if (target.innerHTML === lastCategory || target.innerHTML === 'All') {
      setRenderCategory(true);
    } else {
      const twelveItems = 12;
      const meals = await CategoryFoodFilter(value);
      setFoodsForCategory(meals && meals.filter((_, index) => index < twelveItems));

      setRenderCategory(false);
    }
  }

  return (
    <div className="container-fluid ">
      <section className="d-flex flex-wrap justify-content-center my-2">
        {
          foodCategories && foodCategories.filter((item, index) => index <= numberFour)
            .map((category, index) => (
              <button
                onClick={ (e) => requestFoodsComingFromCategories(e) }
                type="button"
                className="button col-5 mb-1 mx-1"
                key={ index }
                data-testid={ `${category}-category-filter` }
                name="category"
                value={ category }
              >
                {category }
              </button>
            ))
        }
        <button
          type="button"
          className="button col-5 mb-1 mx-1"
          onClick={ (e) => requestFoodsComingFromCategories(e) }
          data-testid="All-category-filter"
        >
          All
        </button>
      </section>
    </div>
  );
}
