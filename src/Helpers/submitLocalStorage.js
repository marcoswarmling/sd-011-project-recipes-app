function submitLocalStorage(email) {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);

  const toLocalStorage = {
    email,
  };

  localStorage.setItem('user', JSON.stringify(toLocalStorage));
}

export default submitLocalStorage;
