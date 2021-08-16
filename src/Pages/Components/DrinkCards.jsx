import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../Context_Configs/Context';

export default function DrinkCards() {
  const { dataDrinks } = useContext(Context);
  return (
    <div>
      {
        dataDrinks !== null
          ? dataDrinks.map(({ strDrink, strDrinkThumb, idDrink }, index) => (
            <Link to={ `/bebidas/${idDrink}` } key={ strDrink }>
              <div data-testid={ `${index}-recipe-card` }>
                <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
                <img
                  src={ strDrinkThumb }
                  data-testid={ `${index}-card-img` }
                  alt="Imagem de comida"
                />
              </div>
            </Link>
          ))
        // eslint-disable-next-line no-alert
          : alert('Sinto muito, não encontramos nenhuma receita para esses filtros.')
      }
    </div>
  );
}
