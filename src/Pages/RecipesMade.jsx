import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import FoodOrDrinkFilter from './Components/FoodOrDrinkFilter';
import SecondShareButton from './Components/Secondary/SecondShareButton';

function RecipesMade() {
  const [filter, setFilter] = React.useState('all');
  const [filtereds, setFiltereds] = useState([]);
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));

  useEffect(() => {
    if (filter === 'drinks') {
      setFiltereds(doneRecipes.filter((item) => item.type === 'bebida'));
    }
    if (filter === 'foods') {
      setFiltereds(doneRecipes.filter((item) => item.type === 'comida'));
    }
    if (filter === 'all') {
      setFiltereds(doneRecipes);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  return (
    <div>
      <section>
        <h1 data-testid="page-title">Receitas Feitas</h1>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </section>
      <FoodOrDrinkFilter setFilter={ setFilter } />
      {filtereds && filtereds.map(({
        id,
        image,
        name,
        area,
        alcoholicOrNot,
        category,
        doneDate,
        type,
        tags },
      index) => (
        <div key={ `${name}-${id}` }>
          <Link to={ `/${type}s/${id}` }>
            <img
              src={ image }
              width="150"
              data-testid={ `${index}-horizontal-image` }
              alt="Imagem de comida"
            />
          </Link>
          <div>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {area !== '' ? `${area} - ${category}` : alcoholicOrNot }
            </p>
            <Link to={ `/${type}s/${id}` }>
              <p data-testid={ `${index}-horizontal-name` }>{name}</p>
            </Link>
            <p data-testid={ `${index}-horizontal-done-date` }>
              {doneDate}
            </p>
            { tags.map((data) => (
              <p
                key={ index }
                data-testid={ `${index}-${data}-horizontal-tag` }
              >
                {data}
              </p>))}
            <SecondShareButton
              itemId={ id }
              type={ type }
              testID={ `${index}-horizontal-share-btn` }
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipesMade;
