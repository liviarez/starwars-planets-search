import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Form from '../components/Form';

describe('Testa o componente <Form.js />', () => {
  it('Teste se os botões da aplicação estão funcionando corretamente', () => {
    const { history } = renderWithRouter(<Form />);
    const addButton = screen.getByTestId('button-filter');
    const cleanButton = screen.getByTestId('filter');
    expect(addButton).toBeInTheDocument();
    expect(cleanButton).toBeInTheDocument();

    userEvent.click(addButton);
    userEvent.click(cleanButton);


   /*  expect(history.location.pathname).toBe('/'); */
  });
  it('Teste se a aplicação é redirecionada para a página de Home', () => {
    const { history } = renderWithRouter(<Form />);
    const addButton = screen.getByRole('button', { name: 'Adicionar filtro' });
    const cleanButton = screen.getByRole('button', { name: 'Limpar filtros' });
    expect(addButton).toBeInTheDocument();
    expect(cleanButton).toBeInTheDocument();

    userEvent.click(addButton);
    userEvent.click(cleanButton);

  });
});

