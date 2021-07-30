import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRecipesAPIAction } from '../redux/actions';

function SearchBar({ recipeType, fetch }) {
  const [searchInput, setSearchInput] = useState('');
  const [radioInput, setRadioInput] = useState('');

  // LÓGICA PARA CRIAÇÃO DA URL:
  // VERIFICAÇÃO 1 - CASO A BUSCA SEJA POR COMIDA, SERÁ UTILIZADO 'themealdb' NA URL. JÁ PARA BEBIDAS, SERÁ UTILIZADO 'thecocktaildb'
  // VERIFICAÇÃO 2 - CASO A BUSCA SEJA POR INGREDIENTE, SERÁ UTILIZADO 'filter' NA URL. JÁ PARA NOME OU PRIMEIRA LETRA, SERÁ UTILIZADO 'search'
  // VERIFICAÇÃO 3 - POSSIBILIDADES:
  // a) BUSCA POR INGREDIENTE, SERÁ UTILIZADO 'i'
  // b) BUSCA POR NOME, SERÁ UTILIZADO 's'
  // c) BUSCA POR PRIMEIRA LETRA, SERÁ UTILIZADO 'f'
  // VERIFICAÇÃO 4 - SERÁ ACRESCENTADO O VALOR DIGITADO NO INPUT PARA REALIZAR A BUSCA.
  // MONTAGEM DA URL:
  // https://www.${VERIFICAÇÃO1}.com/api/json/v1/1/${VERIFICAÇÃO2}.php?${VERIFICAÇÃO3}=${VERIFICAÇÃO4}

  const handleClick = () => {
    if (radioInput === 'firstLetter' && searchInput.length > 1) {
      return alert('Sua busca deve conter somente 1 (um) caracter');
    }
    fetch(`https://www.${recipeType === 'meals' ? 'themealdb' : 'thecocktaildb'}.com/api/json/v1/1/${radioInput === 'ingredient' ? 'filter' : 'search'}.php?${radioInput === 'ingredient' ? 'i' : ''}${radioInput === 'name' ? 's' : ''}${radioInput === 'firstLetter' ? 'f' : ''}=${searchInput}`);
  };

  return (
    <form>
      Search Bar
      <label htmlFor="search-input">
        <input
          placeholder="Buscar Receita"
          data-testid="search-input"
          onChange={ ({ target: { value } }) => setSearchInput(value) }
        />
      </label>
      <label htmlFor="radio-options">
        Ingrediente
        <input
          name="radio-options"
          type="radio"
          data-testid="ingredient-search-radio"
          onChange={ () => setRadioInput('ingredient') }
        />
        Nome
        <input
          name="radio-options"
          type="radio"
          data-testid="name-search-radio"
          onChange={ () => setRadioInput('name') }
        />
        Primeira letra
        <input
          name="radio-options"
          type="radio"
          data-testid="first-letter-search-radio"
          onChange={ () => setRadioInput('firstLetter') }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </form>
  );
}

const mapStateToProps = (state) => ({
  recipeType: state.RecipesReducer.recipeType,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: (url) => dispatch(fetchRecipesAPIAction(url)),
});

SearchBar.propTypes = {
  fetch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
