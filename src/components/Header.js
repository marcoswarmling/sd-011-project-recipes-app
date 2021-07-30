import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import contextRecipes from '../context/ContextRecipes';

const Header = ({ canSearch }) => {
  const { enableSearch, setEnableSearch } = useContext(contextRecipes);

  const handleSerchClick = () => {
    if (enableSearch === true) {
      setEnableSearch(false);
    } else {
      setEnableSearch(true);
    }
  };

  return (
    <div>
      <header>
        <Link to="/perfil">
          <img src={ profileIcon } alt="Profile" />
        </Link>
        <h3 data-testid="page-title">Inicial</h3>
        { canSearch ? (
          <button type="button" onClick={ handleSerchClick }>
            <img src={ searchIcon } alt="Search" />
          </button>
        ) : ''}
      </header>
      { enableSearch ? '' : <SearchBar /> }
    </div>
  );
};

Header.propTypes = {
  canSearch: PropTypes.bool.isRequired,
};

export default Header;
