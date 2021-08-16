import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import FoodOrDrinkFilter from './Components/FoodOrDrinkFilter';
import SecondShareButton from './Components/Secondary/SecondShareButton';
import SecondFavoriteButton from './Components/Secondary/SecondFavoriteButton';

function FavoriteRecipes() {
  const [filter, setFilter] = useState('all');
  const [update, setUpdate] = useState(false);
  const [filtereds, setFiltereds] = useState([]);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  useEffect(() => {
    if (filter === 'drinks') {
      setFiltereds(favoriteRecipes.filter((item) => item.type === 'bebida'));
    }
    if (filter === 'foods') {
      setFiltereds(favoriteRecipes.filter((item) => item.type === 'comida'));
    }
    if (filter === 'all') {
      setFiltereds(favoriteRecipes);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, update]);

  return (
    <div>
      <h1 data-testid="page-title">Receitas Favoritas</h1>
      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="Botão que direciona para a tela de perfil"
      />
      <FoodOrDrinkFilter setFilter={ setFilter } />
      <section className="favorites-recipes">
        {filtereds && filtereds.map(({ id,
          image,
          name,
          area,
          alcoholicOrNot,
          category,
          type,
        }, index) => (
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
              <SecondFavoriteButton
                itemId={ id }
                type={ type }
                testId={ `${index}-horizontal-favorite-btn` }
                currentItem={ favoriteRecipes[index] }
                setUpdate={ setUpdate }
                update={ update }
              />
              <SecondShareButton
                itemId={ id }
                type={ type }
                testID={ `${index}-horizontal-share-btn` }
              />
            </div>

          </div>
        ))}
      </section>
    </div>
  );
}

export default FavoriteRecipes;
