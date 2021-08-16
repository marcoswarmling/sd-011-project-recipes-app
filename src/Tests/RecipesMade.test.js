import React from 'react';
import RecipesMade from '../Pages/RecipesMade';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de receitas feitas"', () => {
  it('Verifica se há um ícone e um título', () => {
    const { getByTestId } = renderWithRouter(<RecipesMade />);

    const pageTitle = getByTestId('page-title');
    console.log(pageTitle);
    const profileIcon = getByTestId('profile-top-btn');

    expect(pageTitle).toBeInTheDocument();
    expect(profileIcon).toBeInTheDocument();
  });
});
