import React from 'react';
// import { fireEvent, getByText, waitFor } from '@testing-library/react';
import SingleFoodItem from '../Pages/Components/SingleFoodItem';
import renderWithRouter from './renderWithRouter';

describe('Verificações da tela de detalhes de comidas"', () => {
  // lembrar de fazer tudo a partir do home e com mocks
  it('Verifica se há um ícone e um título', () => {
    const { getByText } = renderWithRouter(<SingleFoodItem />);
    const url = getByText('/');
    expect(url).toBeInTheDocument();
  });
});
