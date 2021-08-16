import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../styles/InProgressFood.css';
import { manageDetailAPI } from '../../Helpers/convertUrlToID';
import verifyIngredients from '../../Helpers/verifyIngredients';
import ShareButton from './ShareButton';
import FavoriteButton from './FavoriteButton';
import setDoneRecipes from '../../Helpers/setDoneRecipes';
import createDoneRecipes from '../../Helpers/createDoneRecipes';

function InProgressFood() {
  const { id } = useParams();
  const [usedIngredients, setUsedIngredients] = useState([]);
  const [showFinish, setShowFinish] = useState(true);
  const [itemDetail, setItemDetail] = useState({
    meals: null,
  });

  const arrayOfIngredients = [];
  const arrayOfMeasures = [];

  useEffect(() => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    createDoneRecipes(doneRecipes);

    const currentStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!currentStorage) {
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: {},
        meals: { [id]: [] },
      }));
    }

    if (currentStorage && currentStorage.meals[id]) {
      setUsedIngredients(currentStorage.meals[id]);
    }

    const fetchFood = async () => {
      const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      const response = await fetch(URL);
      const detailRequest = await response.json();
      setItemDetail(manageDetailAPI(detailRequest));
    };
    fetchFood();

    if (arrayOfIngredients.length === usedIngredients.length) {
      setShowFinish(false);
    } else {
      setShowFinish(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const currentStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    currentStorage.meals[id] = usedIngredients;
    localStorage.setItem('inProgressRecipes', JSON.stringify(currentStorage));

    if (arrayOfIngredients.length === usedIngredients.length) {
      setShowFinish(false);
    } else {
      setShowFinish(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usedIngredients, arrayOfIngredients]);

  // Parte que separa os ingredientes da receitas
  if (itemDetail.meals !== null) {
    const food = itemDetail.meals[0];

    const arrayOfIngredientsKey = Object
      .keys(food).filter((key) => key.includes('strIngredient'));
    const arrayOfMeasuresKey = Object
      .keys(food).filter((key) => key.includes('strMeasure'));
    arrayOfIngredientsKey
      .map((ingredient) => verifyIngredients(food[ingredient], arrayOfIngredients));
    arrayOfMeasuresKey
      .map((ingredient) => verifyIngredients(food[ingredient], arrayOfMeasures));
  }

  function handleCheckBox(ingredient) {
    return usedIngredients.includes(ingredient)
      ? setUsedIngredients(usedIngredients.filter((ing) => ing !== ingredient))
      : setUsedIngredients(usedIngredients.concat(ingredient));
  }

  const { meals: anyFood } = itemDetail;

  return anyFood !== null && (
    <div>
      <h1 data-testid="recipe-title">{anyFood[0].strMeal}</h1>
      <img
        width="350"
        src={ anyFood[0].strMealThumb }
        alt={ `Foto da comida chamada ${anyFood[0].strMeal}` }
        data-testid="recipe-photo"
      />
      <FavoriteButton currentItem={ anyFood[0] } typeOf="Meal" />
      <ShareButton />
      <p data-testid="recipe-category">{anyFood[0].strCategory}</p>
      <section>
        <h2>Ingredientes</h2>
        <div className="steps-inputs">
          { arrayOfIngredients.map((ingredient, i) => (
            <label
              htmlFor={ ingredient }
              key={ `${ingredient}-${i}` }
              data-testid={ `${i}-ingredient-step` }
            >
              <input
                id={ ingredient }
                type="checkbox"
                onChange={ () => handleCheckBox(ingredient) }
                checked={ usedIngredients.includes(ingredient) }
              />
              {`${arrayOfIngredients[i]} - ${arrayOfMeasures[i]}`}
            </label>
          ))}
        </div>
      </section>
      <section>
        <h2>Instruções</h2>
        <p data-testid="instructions">{anyFood[0].strInstructions}</p>
      </section>
      <Link to="/receitas-feitas">
        <button
          data-testid="finish-recipe-btn"
          type="button"
          disabled={ showFinish }
          onClick={ () => setDoneRecipes(id, anyFood[0], 'foods') }
        >
          Finalizar Receita
        </button>
      </Link>
    </div>
  );
}

export default InProgressFood;
