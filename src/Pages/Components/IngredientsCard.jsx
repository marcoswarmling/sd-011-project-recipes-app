import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../../Context_Configs/Context';

export default function IngredientsCard({ ingredient, index, type }) {
  const { setRequestFoodParams, setRequestDrinksParams } = useContext(Context);
  let strName;
  let INGREDIENT_IMAGE;
  const history = useHistory();

  function renderIngredients() {
    switch (type) {
    case 'drink':
      setRequestDrinksParams({
        searchInput: strName, searchMethod: 'ingredients' });
      history.push('/bebidas');
      break;
    case 'meal':
      setRequestFoodParams({
        searchInput: strName, searchMethod: 'ingredients' });
      history.push('/comidas');
      break;
    default:
    }
  }

  if (type === 'drink') {
    strName = ingredient.strIngredient1;
    INGREDIENT_IMAGE = `https://www.thecocktaildb.com/images/ingredients/${strName}-Small.png`;
  } else {
    strName = ingredient.strIngredient;
    INGREDIENT_IMAGE = `https://www.themealdb.com/images/ingredients/${strName}-Small.png`;
  }

  return (
    <button type="button" onClick={ () => renderIngredients() }>
      <div data-testid={ `${index}-ingredient-card` }>
        <img
          data-testid={ `${index}-card-img` }
          alt={ `Imagem of a/an ${strName}` }
          src={ INGREDIENT_IMAGE }
        />
        <div>
          <p data-testid={ `${index}-card-name` }>{strName}</p>
        </div>
      </div>
    </button>
  );
}

IngredientsCard.propTypes = {
  ingredient: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.isRequired,
};
