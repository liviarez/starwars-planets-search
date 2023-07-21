import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Verifica o componente Form', () => {
    beforeEach(() => {
        render(<App />);
      });
it('Teste se o componente Form é renderizado corretamente', async ()=>{
const nameSearch = screen.getByPlaceholderText(/filtro por planeta/i)
const columnDropDown = screen.getByTestId('name-filter')
const comparisonDropDown = screen.getByTestId('comparison-filter')
const valueInput = screen.getByRole('spinbutton')
const addFilter = screen.getByRole('button', {  name: /adicionar filtro/i})
const cleanFilter = screen.getByRole('button', {  name: /limpar filtros/i})
expect(nameSearch).toBeInTheDocument();
expect(columnDropDown).toBeInTheDocument();
expect(comparisonDropDown).toBeInTheDocument();
expect(valueInput).toBeInTheDocument();
expect(addFilter).toBeInTheDocument();
expect(cleanFilter).toBeInTheDocument();
/* expect(xButton).toBeInTheDocument(); */

})
it('Testa os mocks da API', async () => {

    const nameSearch = screen.getByTestId('name-filter')
    expect(nameSearch).toBeInTheDocument();
    userEvent.type(nameSearch, 'Tatooine')
    expect(nameSearch.value).toBe('Tatooine')

    const valueInput = screen.getByTestId('value-filter')
    expect(valueInput).toBeInTheDocument();
    userEvent.type(valueInput, '23')
    expect(valueInput.value).toBe('023')

    const addFilterButton = screen.getByRole('button', {  name: /adicionar filtro/i})
    expect(addFilterButton).toBeInTheDocument()
    userEvent.click(addFilterButton)
    const cleanFilter = screen.getByRole('button', {  name: /limpar filtros/i})
    expect(cleanFilter).toBeInTheDocument();
    userEvent.click(cleanFilter)

    const secondAddFilter = screen.getByRole('button', {  name: /adicionar filtro/i})
    expect(secondAddFilter).toBeInTheDocument()
    userEvent.click(secondAddFilter)
    const xButton = screen.getByRole('button', {  name: /x/i}) 
    expect(xButton).toBeInTheDocument();
    userEvent.click(xButton);
    expect(xButton).not.toBeInTheDocument();

    const filterColumn = screen.getByTestId("column-filter");
    const comparisonDropDownFilter = screen.getByTestId("comparison-filter");
    const valuefilter = screen.getByTestId("value-filter");

    userEvent.selectOptions(filterColumn, "diameter");
    userEvent.selectOptions(comparisonDropDownFilter, "maior que");
    userEvent.type(valuefilter, "5000");
    userEvent.click(secondAddFilter);
})
})
