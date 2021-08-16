import React from 'react';
// import { fireEvent, getByText, waitFor } from '@testing-library/react';
import ExploreDrinks from '../Pages/Explore/ExploreDrinks';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de "Explorar Bebidas"', () => {
  it('Verifica se há um ícone e um título', () => {
    const { getByTestId } = renderWithRouter(<ExploreDrinks />);
    const profileTitle = getByTestId('page-title');
    const profileIcon = getByTestId('profile-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
  });
});
