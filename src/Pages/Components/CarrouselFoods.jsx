import React, { useState, useEffect } from 'react';
import '../../styles/carrousel.css';

export default function CarrouselFoods() {
  const [foodsRecomendations, setFoodsRecomendations] = useState([]);

  useEffect(() => {
    const FetchRecomendation = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const recomendationResponse = await response.json();
      const recomendationsQuantity = 6;

      const recomendationsArray = [];
      for (let i = 0; i < recomendationsQuantity; i += 1) {
        recomendationsArray.push(recomendationResponse.meals[i]);
      }
      setFoodsRecomendations(recomendationsArray);
    };
    FetchRecomendation();
  }, []);

  return (
    <>
      <h2>Recomendações de acompanhamentos</h2>
      <section className="scroll-recomendation">
        { foodsRecomendations.map(({ strMeal, strMealThumb }, i) => (
          <div data-testid={ `${i}-recomendation-card` } key={ `${strMeal} ${i}` }>
            <h3 data-testid={ `${i}-recomendation-title` }>{strMeal}</h3>
            <img
              className="img-recomendation"
              src={ strMealThumb }
              alt={ `Imagem de ${strMealThumb}` }
            />
          </div>
        ))}
      </section>
    </>
  );
}
