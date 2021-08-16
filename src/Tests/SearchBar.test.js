import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const EMAIL_INPUT = 'email-input';
const PASS_INPUT = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';
const SEARCH_TOP_BTN = 'search-top-btn';

describe('Verificações da barra de pesquisa e tela de comidas', () => {
  it('Verifica o texto da tela de comidas e seus ícones', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);

    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    fireEvent.change(emailInput, { target: { value: 'email@betrybe.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senhaSegura123' } });
    fireEvent.click(loginButton);

    expect(window.location.pathname).toBe('/comidas');

    const comidasText = getByText(/Comidas/i);
    expect(comidasText).toBeInTheDocument();

    const profileIcon = getByTestId('profile-top-btn');
    expect(profileIcon).toBeInTheDocument();

    const searchButton = getByTestId(SEARCH_TOP_BTN);
    expect(searchButton).toBeInTheDocument();
  });

  it('Verifica se ao clicar na lupa, uma barra de pesquisa é mostrada', () => {
    const { getByTestId, container } = renderWithRouter(<App />);

    const searchButton = getByTestId(SEARCH_TOP_BTN);
    fireEvent.click(searchButton);

    const searchBar = container.getElementsByClassName('search-bar');
    expect(searchBar[0]).toBeInTheDocument();
  });

  it('Verifica se a barra de pesquisa tem 3 input-radio e clica-os.', () => {
    const { getByTestId } = renderWithRouter(<App />);

    const searchButton = getByTestId(SEARCH_TOP_BTN);
    fireEvent.click(searchButton);

    const ingredientButton = getByTestId('ingredient-search-radio');
    const nameButton = getByTestId('name-search-radio');
    const firstLetterButton = getByTestId('first-letter-search-radio');

    expect(ingredientButton).toBeInTheDocument();
    fireEvent.click(ingredientButton);
    expect(ingredientButton).toBeChecked();

    expect(nameButton).toBeInTheDocument();
    fireEvent.click(nameButton);
    expect(nameButton).toBeChecked();

    expect(firstLetterButton).toBeInTheDocument();
    fireEvent.click(firstLetterButton);
    expect(firstLetterButton).toBeChecked();
  });

  it('Verifica barra de pesquisa e se é possível digitar nela.', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const searchButton = getByTestId(SEARCH_TOP_BTN);
    fireEvent.click(searchButton);

    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'digitação' } });
    expect(searchInput.value).toBe('digitação');
  });

  it('Verifica se a barra de pesquisa possui um botão com o texto "Pesquisar"', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const searchButton = getByTestId(SEARCH_TOP_BTN);
    fireEvent.click(searchButton);

    const execSearch = getByTestId('exec-search-btn');
    expect(execSearch).toBeInTheDocument();
    expect(execSearch.innerHTML).toBe('Pesquisar');
  });

  it('verifica se itens são renderizados após click', async () => {
    const { getByTestId } = renderWithRouter(<App />);
    const searchButton = getByTestId(SEARCH_TOP_BTN);
    fireEvent.click(searchButton);

    const execSearch = getByTestId('exec-search-btn');
    fireEvent.click(execSearch);
    expect(execSearch.innerHTML).toBe('Pesquisar');
  });
});
