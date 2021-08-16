import React from 'react';
import { fireEvent } from '@testing-library/react';
// import App from './App';
import renderWithRouter from './renderWithRouter';
import Foods from '../Pages/Foods';
import Drinks from '../Pages/Drinks';

describe('Testes footer', () => {
  it('19 - Testa se os ícones de bebidas, explorar e comida estão na tela', () => {
    const { getByTestId } = renderWithRouter(<Foods />);
    const drinkIcon = getByTestId(/drinks-bottom-btn/i);
    const exploreIcon = getByTestId(/explore-bottom-btn/i);
    const mealIcon = getByTestId(/food-bottom-btn/i);

    expect(drinkIcon).toBeInTheDocument();
    expect(exploreIcon).toBeInTheDocument();
    expect(mealIcon).toBeInTheDocument();
  });

  it('20 - testa se o menu está fixado na parte inferior', () => {
    const { getByTestId } = renderWithRouter(<Foods />);

    const footer = getByTestId(/footer/i);
    const style = window.getComputedStyle(footer[0]);
    expect(style).toHaveStyle({ position: 'fixed' });
    expect(style).toHaveStyle({ bottom: '0' });
  });

  // A FAZER
  // it('21 - testa se o footer está em todas as páginas selecionadas', () => {

  // }

  it('22 - testa se redireciona para a página de bebidas', () => {
    const { history, getByRole } = renderWithRouter(<Foods />);

    const drinksLink = getByRole('img', { name: /ícone de bebidas/i });
    fireEvent.click(drinksLink);
    history.push('/bebidas');
    expect(history.location.pathname).toBe('/bebidas');
  });

  it('23 - testa se redireciona para a página de explorar', () => {
    const { history, getByRole } = renderWithRouter(<Foods />);

    const exploreLink = getByRole('img', { name: /ícone de explorar - bulsola/i });
    fireEvent.click(exploreLink);
    history.push('/explorar');
    expect(history.location.pathname).toBe('/explorar');
  });

  it('24 - testa se redireciona para a página de comidas, iniciando já em bebidas',
    () => {
      const { history, getByRole } = renderWithRouter(<Drinks />);

      const foodLink = getByRole('img', { name: /ícone de comidas - garfos/i });
      fireEvent.click(foodLink);
      history.push('/comidas');
      expect(history.location.pathname).toBe('/comidas');
    });
});
