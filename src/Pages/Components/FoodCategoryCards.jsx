import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context_Configs/Context';

export default function FoodCategoryCards() {
  const { foodsForCategory } = React.useContext(Context);
  return (
    <div>
      {foodsForCategory !== 0
      && foodsForCategory.map(({ strMeal, strMealThumb, idMeal }, i) => (
        <Link to={ `/comidas/${idMeal}` } key={ `${strMeal}-${i}` }>
          <div data-testid={ `${i}-recipe-card` }>
            <h3 data-testid={ `${i}-card-name` }>{strMeal}</h3>
            <img
              src={ strMealThumb }
              data-testid={ `${i}-card-img` }
              alt="Imagem de comida"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
