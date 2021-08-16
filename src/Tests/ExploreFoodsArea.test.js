import React from 'react';
// import { fireEvent, getByText, waitFor } from '@testing-library/react';
import ExploreFoodsArea from '../Pages/Explore/ExploreFoodsArea';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de comidas em "Explorar Origem"', () => {
  it('Verifica se há um ícone e um título', () => {
    const { getByTestId } = renderWithRouter(<ExploreFoodsArea />);
    const profileTitle = getByTestId('page-title');
    const profileIcon = getByTestId('profile-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
  });
});
