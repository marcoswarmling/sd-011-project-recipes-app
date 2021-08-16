function verifyIngredients(string, array) {
  return string && string !== ' ' ? array.push(string) : null;
}

export default verifyIngredients;
