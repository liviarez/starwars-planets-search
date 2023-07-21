import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import StarWarsProvider from '../context/StarWarsProvider';
import testData from '../../cypress/mocks/testData'
describe('Verifica o componente Form', () => {
  // mock do fech
  beforeEach(()=>{
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    })
  })
it('Testa os mocks da API', async () => {
       render(
          <App />
      )
      expect(global.fetch).toHaveBeenCalled();
    const nameSearch = screen.getByTestId('name-filter')
    expect(nameSearch).toBeInTheDocument();
    act(()=>{
      userEvent.type(nameSearch, 'Tatooine')
    })
    const planetName = await screen.findByTestId('planet-name')
    expect(planetName).toBeInTheDocument()

    const valueInput = screen.getByTestId('value-filter')
    expect(valueInput).toBeInTheDocument();
    userEvent.type(valueInput, '23')
    expect(valueInput.value).toBe('023')
    const addFilterButton = screen.getByRole('button', {  name: /adicionar filtro/i})
    act(()=>{
      userEvent.click(addFilterButton);
    })

    const cleanFilter = screen.getByRole('button', {  name: /limpar filtros/i})
    expect(cleanFilter).toBeInTheDocument();
    act(() => {
      userEvent.click(cleanFilter)
    })

    const filterColumn = screen.getByTestId("column-filter");
    const comparisonDropDownFilter = screen.getByTestId("comparison-filter");
    const valuefilter = screen.getByTestId("value-filter");

    userEvent.selectOptions(filterColumn, "diameter");
    userEvent.selectOptions(comparisonDropDownFilter, "maior que");
    userEvent.type(valuefilter, "5000"); 
    act(() => {
      userEvent.click(addFilterButton)
    })

    userEvent.selectOptions(filterColumn, "surface_water");
    userEvent.selectOptions(comparisonDropDownFilter, "menor que");
    userEvent.type(valuefilter, "40");
    act(() => {
      userEvent.click(addFilterButton)
    })

    userEvent.selectOptions(filterColumn, "population");
    userEvent.selectOptions(comparisonDropDownFilter, "igual a");
    userEvent.type(valuefilter, "-1");
    act(() => {
      userEvent.click(addFilterButton)
    })
    
})

it('Testa o botao clear', async () => {
  render(
     <App />
 )
 expect(global.fetch).toHaveBeenCalled();
 const filterColumn = screen.getByTestId("column-filter");
 const comparisonDropDownFilter = screen.getByTestId("comparison-filter");
 const valuefilter = screen.getByTestId("value-filter");
 const addFilterButton = screen.getByRole('button', {  name: /adicionar filtro/i})
 userEvent.selectOptions(filterColumn, "diameter");
 userEvent.selectOptions(comparisonDropDownFilter, "maior que");
 userEvent.type(valuefilter, "5000"); 
 act(() => {
   userEvent.click(addFilterButton)
 })

 const xButton = await screen.findByRole('button', {  name: /x/i})
 expect(xButton).toBeInTheDocument();
 act(() => {
   userEvent.click(xButton)
 })    

})
})

