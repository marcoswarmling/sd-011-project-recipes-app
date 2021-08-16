import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import FooterBar from '../Components/FooterBar';

function ExploreDrinks() {
  const history = useHistory();
  const [drinkId, setDrinkId] = React.useState();

  async function getRandomMealAPI() {
    const linkDrinkCategory = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const awaitDrink = await fetch(linkDrinkCategory);
    const awaitDrinkToJSON = await awaitDrink.json();
    setDrinkId(awaitDrinkToJSON.drinks[0].idDrink);
  }

  React.useEffect(() => {
    getRandomMealAPI();
  }, []);

  return (
    <>
      <div>
        <h1 data-testid="page-title">Explorar Bebidas</h1>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </div>
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explorar/bebidas/ingredientes') }
        >
          Por Ingredientes
        </button>

        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => history.push(`/bebidas/${drinkId}`) }
        >
          Me Surpreenda!
        </button>

      </div>
      <FooterBar />
    </>
  );
}

export default ExploreDrinks;
