import React, { useState } from 'react';
import profileIcon from '../../images/profileIcon.svg';
import FooterBar from '../Components/FooterBar';
import IngredientsCard from '../Components/IngredientsCard';

function ExploreDrinksIngredients() {
  const [drinkIngredients, setDrinkIngredients] = useState();
  const [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    async function ingredientsDrinkApi() {
      const quantityItems = 12;
      const URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
      const awaitIngredient = await fetch(URL);
      const awaitIngredientToJSON = await awaitIngredient.json();
      const filterId = awaitIngredientToJSON.drinks
        .filter((_, index) => index < quantityItems);
      setDrinkIngredients(filterId);
      setLoad(false);
    }
    ingredientsDrinkApi();
  }, []);

  return (
    <>
      <div>
        <h1 data-testid="page-title">Explorar Ingredientes</h1>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </div>
      <FooterBar />
      {!load && drinkIngredients.map((ingredient, index) => (
        <IngredientsCard
          key={ index }
          ingredient={ ingredient }
          index={ index }
          type="drink"
        />
      ))}
    </>
  );
}

export default ExploreDrinksIngredients;
