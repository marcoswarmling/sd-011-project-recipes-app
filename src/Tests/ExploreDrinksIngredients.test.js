import React from 'react';
// import { fireEvent, getByText, waitFor } from '@testing-library/react';
import ExploreDrinksIngredients from '../Pages/Explore/ExploreDrinksIngredients';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de bebidas em "Explorar Ingredientes"', () => {
  it('Verifica se há um ícone e um título', () => {
    const { getByTestId } = renderWithRouter(<ExploreDrinksIngredients />);
    const profileTitle = getByTestId('page-title');
    const profileIcon = getByTestId('profile-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
  });
});
