import React from 'react';
// import { fireEvent, getByText, waitFor } from '@testing-library/react';
import ExploreFoodsIngredients from '../Pages/Explore/ExploreFoodsIngredients';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de comida em "Explorar Ingredientes"', () => {
  it('Verifica se há um ícone e um título', () => {
    const { getByTestId } = renderWithRouter(<ExploreFoodsIngredients />);
    const profileTitle = getByTestId('page-title');
    const profileIcon = getByTestId('profile-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
  });
});
