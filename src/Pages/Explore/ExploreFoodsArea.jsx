import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import twelveItems from '../../Helpers/twelveItems';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import FooterBar from '../Components/FooterBar';

function ExploreFoodsArea() {
  const [areas, setAreas] = useState([]);
  const [foods, setFoods] = useState([]);
  const [filter, setFilter] = useState(false);

  async function areaRequest(e) {
    const area = e.target.value;
    let URL = '';

    if (e.target.value === 'All') {
      URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    } else {
      URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    }

    const request = await fetch(URL);
    const response = await request.json();
    setFoods(twelveItems(response));
    setFilter(true);
  }

  useEffect(() => {
    // Requisita locais de origem
    async function requestAreas() {
      const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const request = await fetch(URL);
      const response = await request.json();
      setAreas(response.meals);
    }
    requestAreas();

    // Requisição do onLoad da página
    async function didMountRequest() {
      const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const request = await fetch(URL);
      const response = await request.json();
      setFoods(twelveItems(response));
    }

    if (!filter) {
      didMountRequest();
    }
  }, [filter]);
  return (
    <>
      <div>
        <h1 data-testid="page-title">Explorar Origem</h1>
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="Botão que direciona para a tela de perfil"
        />
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </div>
      <select onChange={ (e) => areaRequest(e) } data-testid="explore-by-area-dropdown">
        <option data-testid="All-option">All</option>
        {areas && areas.map(({ strArea }, i) => (
          <option
            key={ `${strArea}${i}` }
            data-testid={ `${strArea}-option` }
          >
            {strArea}
          </option>
        ))}
      </select>
      <div>
        <h1>Resultados</h1>
        <div>
          {foods.map(({ strMeal, strMealThumb, idMeal }, i) => (
            <Link to={ `/comidas/${idMeal}` } key={ `${idMeal}` }>
              <div data-testid={ `${i}-recipe-card` }>
                <p data-testid={ `${i}-card-name` }>{ strMeal }</p>
                <img
                  data-testid={ `${i}-card-img` }
                  src={ strMealThumb }
                  alt={ `Imagem de ${strMeal}` }
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FooterBar />
    </>
  );
}

export default ExploreFoodsArea;
