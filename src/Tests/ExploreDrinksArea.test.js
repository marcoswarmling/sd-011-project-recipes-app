import React from 'react';
// import { fireEvent, getByText, waitFor } from '@testing-library/react';
import ExploreDrinksArea from '../Pages/Explore/ExploreDrinksArea';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de Explorar Origem', () => {
  it('Verifica se há um ícone e um ttulo', () => {
    const { getByTestId } = renderWithRouter(<ExploreDrinksArea />);
    const profileTitle = getByTestId('page-title');
    const profileIcon = getByTestId('profile-top-btn');
    const searchIcon = getByTestId('search-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });
});
