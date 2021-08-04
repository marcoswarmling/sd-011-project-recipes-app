import React, { useState } from 'react';
import DetailsContext from './detailsContext';

export default function DetailsProvider({ children }) {
  const [ingredients, setIngredients] = useState();
  return (
    <DetailsContext.Provider value={ { ingredients, setIngredients } }>
      { children }
    </DetailsContext.Provider>
  );
}
