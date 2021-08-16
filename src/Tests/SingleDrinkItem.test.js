import React from 'react';
// import { fireEvent, getByText, waitFor } from '@testing-library/react';
import SingleDrinkItem from '../Pages/Components/SingleDrinkItem';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de detalhes de bebidas"', () => {
  // lembrar de fazer tudo a partir do home e com mocks
  it('Verifica se há um ícone e um título', () => {
    const { getByText } = renderWithRouter(<SingleDrinkItem />);
    const url = getByText('/');
    expect(url).toBeInTheDocument();
  });
});
