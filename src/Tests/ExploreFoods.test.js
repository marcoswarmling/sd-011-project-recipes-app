import React from 'react';
// import { fireEvent, getByText, waitFor } from '@testing-library/react';
import ExploreFoods from '../Pages/Explore/ExploreFoods';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de "Explorar Comidas"', () => {
  it('Verifica se há um ícone e um título', () => {
    const { getByTestId } = renderWithRouter(<ExploreFoods />);
    const profileTitle = getByTestId('page-title');
    const profileIcon = getByTestId('profile-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
  });
});
