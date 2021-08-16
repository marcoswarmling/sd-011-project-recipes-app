function twelveItems(dataResult) {
  const whichMethod = Object.keys(dataResult)[0];

  const quantityItems = 12;
  let array = [];

  if (dataResult[whichMethod] === null) {
    return null;
  }

  // Refatoração certamente se encaixaria aqui, fica de lembrete.
  if (whichMethod === 'drinks' && dataResult.drinks.length >= quantityItems) {
    array = [];
    for (let i = 0; i !== quantityItems; i += 1) {
      array.push(dataResult.drinks[i]);
    }
    return array;
  }

  if (whichMethod === 'meals' && dataResult.meals.length >= quantityItems) {
    array = [];
    for (let i = 0; i !== quantityItems; i += 1) {
      array.push(dataResult.meals[i]);
    }
    return array;
  }

  // Refatoração certamente se encaixaria aqui, fica de lembrete.
  // condicionais caso o tamanho seja menor que 12
  if (whichMethod === 'drinks' && dataResult.drinks !== null) {
    return dataResult.drinks;
  }
  if (whichMethod === 'meals' && dataResult.meals !== null) {
    return dataResult.meals;
  }
}

export default twelveItems;
