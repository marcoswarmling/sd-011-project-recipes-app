import React, { useState, useEffect } from 'react';
import '../../styles/carrousel.css';

export default function CarrouselDrinks() {
  const [drinkRecomendations, setDrinksRecomendations] = useState([]);

  useEffect(() => {
    const FetchRecomendation = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const recomendationResponse = await response.json();
      const recomendationsQuantity = 6;

      const recomendationsArray = [];
      for (let i = 0; i < recomendationsQuantity; i += 1) {
        recomendationsArray.push(recomendationResponse.drinks[i]);
      }
      setDrinksRecomendations(recomendationsArray);
    };
    FetchRecomendation();
  }, []);

  return (
    <>
      <h2>Recomendações de acompanhamentos</h2>
      <section className="scroll-recomendation">
        { drinkRecomendations.map(({ strDrink, strDrinkThumb }, i) => (
          <div data-testid={ `${i}-recomendation-card` } key={ `${strDrink} ${i}` }>
            <h3 data-testid={ `${i}-recomendation-title` }>{strDrink}</h3>
            <img
              className="img-recomendation"
              src={ strDrinkThumb }
              alt={ `Imagem de ${strDrinkThumb}` }
            />
          </div>
        ))}
      </section>
    </>
  );
}
