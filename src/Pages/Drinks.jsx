import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../Context_Configs/Context';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from './Components/SearchBar';
import FooterBar from './Components/FooterBar';
import DrinkCards from './Components/DrinkCards';
import DrinkCategoryButtons from './Components/DrinkCategoryButtons';
import DrinkCategoryCards from './Components/DrinkCategoryCards';

function Drinks() {
  const history = useHistory();
  const { dataDrinks,
    setRequestDrinksParams,
    renderCategory,
    requestDrinksParams } = useContext(Context);

  const [showSearch, setShowSearch] = useState(false);
  const drinks = 'drinks';

  // Busca por bebidas quando monta a tela de bebidas
  useEffect(() => {
    if (requestDrinksParams.searchInput === ''
    && requestDrinksParams.searchMethod === '') {
      setRequestDrinksParams({
        searchInput: '', searchMethod: '' });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderCategory]);

  if (dataDrinks !== null && dataDrinks.length === 1) {
    const oneResult = dataDrinks[0];
    history.push(`/bebidas/${oneResult.idDrink}`);
  }

  return (
    <div>
      <h1 data-testid="page-title">Bebidas</h1>
      { showSearch && <SearchBar value={ drinks } /> }
      <Link to="/perfil">
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </Link>
      <button
        onClick={ () => setShowSearch(!showSearch) }
        type="button"
      >
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="Botão com imagem de uma lupa: abre uma barra de pesquisa"
        />
      </button>
      <DrinkCategoryButtons />
      { renderCategory ? <DrinkCards /> : <DrinkCategoryCards />}

      <FooterBar />
    </div>
  );
}

export default Drinks;

Drinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
