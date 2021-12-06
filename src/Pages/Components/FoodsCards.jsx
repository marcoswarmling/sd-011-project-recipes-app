import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context_Configs/Context';
import '../../styles/foods.css';

export default function FoodsCards() {
  const { dataFood } = useContext(Context);
  return (
    <div className="container">
      {dataFood !== null
        ? dataFood.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <Link to={ `/comidas/${idMeal}` } key={ strMeal }>
            <div
              data-testid={ `${index}-recipe-card` }
              className="col-6 d-inline-block flex-column align-items-center mt-3 mb-3"
            >
              <img
                className="food-card w-100 rounded-circle p-2"
                src={ strMealThumb }
                data-testid={ `${index}-card-img` }
                alt="Imagem de comida"
              />
              <h3 data-testid={ `${index}-card-name` } className="d-flex align-items-center justify-content-center">{strMeal}</h3>
            </div>
          </Link>
        ))
        // eslint-disable-next-line no-alert
        : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')}
    </div>
  );
}
