import React from 'react';
// import { fireEvent, getByText, waitFor } from '@testing-library/react';
import Profile from '../Pages/Profile';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de Perfil', () => {
  it('Verifica se há um ícone e um título', () => {
    const { getByTestId } = renderWithRouter(<Profile />);
    const profileTitle = getByTestId('page-title');
    const profileIcon = getByTestId('profile-top-btn');

    expect(profileIcon).toBeInTheDocument();
    expect(profileTitle).toBeInTheDocument();
  });
});
