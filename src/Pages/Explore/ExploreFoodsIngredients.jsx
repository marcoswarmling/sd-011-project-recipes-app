import React from 'react';
import profileIcon from '../../images/profileIcon.svg';
import FooterBar from '../Components/FooterBar';
import IngredientsCard from '../Components/IngredientsCard';

function ExploreFoodsIngredients() {
  const [IngredientId, setIngredientId] = React.useState();
  const [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    async function IngredientsFoodApi() {
      const quantityItems = 12;
      const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
      const awaitIngredient = await fetch(URL);
      const awaitIngredientToJSON = await awaitIngredient.json();
      const filterId = awaitIngredientToJSON.meals
        .filter((_, index) => index < quantityItems);
      setIngredientId(filterId);
      setLoad(false);
    }
    IngredientsFoodApi();
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
      {!load ? IngredientId
        .map((ingredient, index) => (
          <IngredientsCard
            ingredient={ ingredient }
            index={ index }
            key={ index }
            type="meal"
          />
        )) : null}
    </>
  );
}

export default ExploreFoodsIngredients;
