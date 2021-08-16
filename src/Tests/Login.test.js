import React from 'react';
import { fireEvent } from '@testing-library/react';
import Login from '../Pages/Login';
import renderWithRouter from './renderWithRouter';

// Para fazer uso do .toBeDisabled, foi consultada a documentação oficial do RLT
// Source: https://testing-library.com/docs/react-testing-library/example-intro

const EMAIL_INPUT = 'email-input';
const PASS_INPUT = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';

describe('Verificações da tela de Login', () => {
  it('Verifica se há dois inputs na tela de Login', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('Verifica se há um botão de login na tela de Login', () => {
    const { getByTestId } = renderWithRouter(<Login />);
    const loginButton = getByTestId(LOGIN_BUTTON);
    expect(loginButton).toBeInTheDocument();
  });

  it('Verifica se o botão desabilita quando informações erradas são inseridas', () => {
    const { getByTestId } = renderWithRouter(<Login />);

    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    fireEvent.change(emailInput, { target: { value: 'grupo33' } });
    fireEvent.change(passwordInput, { target: { value: '33' } });
    expect(loginButton).toBeDisabled();
  });

  it('Verifica se o botão habilita quando informações corretas são inseridas', () => {
    const { getByTestId } = renderWithRouter(<Login />);

    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    fireEvent.change(emailInput, { target: { value: 'email@betrybe.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senhaSegura123' } });
    expect(loginButton).not.toBeDisabled();
  });

  it('Verifica se ao clicar no botão "Entrar", direciona para a rota "/comidas"', () => {
    const { getByTestId, history } = renderWithRouter(<Login />);

    const emailInput = getByTestId(EMAIL_INPUT);
    const passwordInput = getByTestId(PASS_INPUT);
    const loginButton = getByTestId(LOGIN_BUTTON);

    fireEvent.change(emailInput, { target: { value: 'email@betrybe.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senhaSegura123' } });

    fireEvent.click(loginButton);
    expect(history.location.pathname).toBe('/comidas');
  });
});
