import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Verifica o componente Table", () => {
  /* beforeEach(() => {
    render(<App />);
  }); */
  it("Testa se o componente Table é renderizado corretamente", async () => {  
    render(<App />)
await waitFor(() => {
    const nameColumn = screen.getByRole('columnheader', {  name: /name/i})
    expect(nameColumn).toBeInTheDocument();
    const rotationColumn = screen.getByRole('columnheader', {  name: /rotation period/i})
    expect(rotationColumn).toBeInTheDocument();
    const orbitalColumn = screen.getByRole('columnheader', {  name: /orbital period/i})
    expect(orbitalColumn).toBeInTheDocument();
    const diameterColumm = screen.getByRole('columnheader', {  name: /diameter/i})
    expect(diameterColumm).toBeInTheDocument();
    const climateColumn = screen.getByRole('columnheader', {  name: /climate/i})
    expect(climateColumn).toBeInTheDocument();
    const gravityColumn = screen.getByRole('columnheader', {  name: /gravity/i})
    expect(gravityColumn).toBeInTheDocument();
    const terrainColumn = screen.getByRole('columnheader', {  name: /terrain/i})
    expect(terrainColumn).toBeInTheDocument(); 
    const surfaceColumn = screen.getByRole('columnheader', {  name: /surface water/i})
    expect(surfaceColumn).toBeInTheDocument();
    const populationColumn = screen.getByRole('columnheader', {  name: /population/i})
    expect(populationColumn).toBeInTheDocument();
    const filmsColumn = screen.getByRole('columnheader', {  name: /films/i})
    expect(filmsColumn).toBeInTheDocument();
    const createdColumn = screen.getByRole('columnheader', {  name: /created/i})
    expect(createdColumn).toBeInTheDocument();
    const urlColumn = screen.getByRole('columnheader', {  name: /url/i})
    expect(urlColumn).toBeInTheDocument();
    const editedColumn = screen.getByRole('columnheader', {  name: /edited/i}) 
    expect(editedColumn).toBeInTheDocument();
    
    const firstPlanet = screen.getByText(/Tatooine/i)
    expect(firstPlanet).toBeInTheDocument()

        }, {timeout: 10000})

    const filterNameSearch = screen.getByRole('textbox')
    expect(filterNameSearch).toBeInTheDocument

    const secondPlanet = screen.getByText(/Alderaan/i)
    expect(secondPlanet).toBeInTheDocument()
    
    const filterColumn = screen.getByTestId('column-filter')
    const comparisonDropDownFilter = screen.getByTestId('comparison-filter')
    const valuefilter = screen.getByTestId('value-filter')
    const addFilterButton = screen.getByTestId('button-filter')

      userEvent.selectOptions(filterColumn, 'rotation_period')
      userEvent.selectOptions(comparisonDropDownFilter, 'menor que')
      userEvent.type(valuefilter, '23')
      userEvent.click(addFilterButton)

      const thirdPlanet = screen.getByText(/Yavin IV/i)
      expect(thirdPlanet).toBeInTheDocument()

        userEvent.selectOptions(filterColumn, 'diameter')
        userEvent.selectOptions(comparisonDropDownFilter, 'igual a')
        userEvent.type(valuefilter, '10200')
        userEvent.click(addFilterButton)

        userEvent.selectOptions(filterColumn, 'rotation_period')
        userEvent.selectOptions(comparisonDropDownFilter, 'menor que')
        userEvent.type(valuefilter, '25')
        userEvent.click(addFilterButton)

        const fourthPlanet = screen.getByText(/hoth/i)
        expect(fourthPlanet).toBeInTheDocument()

        const cleanFilterButton = screen.getByRole('button', {  name: /x/i})
        expect(cleanFilterButton).toBeInTheDocument()
        userEvent.click(cleanFilterButton)
        expect(cleanFilterButton).not.toBeInTheDocument()

        const planetfind04 = screen.getByText('Tatooine')
        expect(planetfind04).toBeInTheDocument()
  });
  it("Testa os filtros", async () => {
    render(<App />)
    await waitFor(
      () => {
        const tableStructure = screen.getByRole("table");
        expect(tableStructure).toBeInTheDocument();

        const firstPlanet = screen.getByText(/Tatooine/i);
        expect(firstPlanet).toBeInTheDocument();

        const column01 = screen.getByText(/url/i);
        expect(column01).toBeInTheDocument();
      },
      { timeout: 10000 }
    );

    const filterColumn = screen.getByTestId("column-filter");
    const comparisonDropDownFilter = screen.getByTestId("comparison-filter");
    const valuefilter = screen.getByTestId("value-filter");
    const addFilterButton = screen.getByTestId("button-filter");

    userEvent.selectOptions(filterColumn, "population");
    userEvent.selectOptions(comparisonDropDownFilter, "igual a");
    userEvent.type(valuefilter, "-1");
    userEvent.click(addFilterButton);
  });
  it("Testa linhas 17-20", async () => {
    render(<App />)
    await waitFor(
      () => {
        const tableStructure = screen.getByRole("table");
        expect(tableStructure).toBeInTheDocument();

        const firstPlanet = screen.getByText(/Tatooine/i);
        expect(firstPlanet).toBeInTheDocument();

        const column01 = screen.getByText(/url/i);
        expect(column01).toBeInTheDocument();
      },
      { timeout: 10000 }
    );

    const filterColumn = screen.getByTestId("column-filter");
    const comparisonDropDownFilter = screen.getByTestId("comparison-filter");
    const valuefilter = screen.getByTestId("value-filter");
    const addFilterButton = screen.getByTestId("button-filter");

    userEvent.selectOptions(filterColumn, "diameter");
    userEvent.selectOptions(comparisonDropDownFilter, "menor que");
    userEvent.type(valuefilter, "10000");
    userEvent.click(addFilterButton);
  });
  it("Testa linha 20", async () => {
    render(<App />)
    await waitFor(
      () => {
        const tableStructure = screen.getByRole("table");
        expect(tableStructure).toBeInTheDocument();

        const firstPlanet = screen.getByText(/Tatooine/i);
        expect(firstPlanet).toBeInTheDocument();

        const column01 = screen.getByText(/url/i);
        expect(column01).toBeInTheDocument();
      },
      { timeout: 10000 }
    );

    const filterColumn = screen.getByTestId("column-filter");
    const comparisonDropDownFilter = screen.getByTestId("comparison-filter");
    const valuefilter = screen.getByTestId("value-filter");
    const addFilterButton = screen.getByTestId("button-filter");

    userEvent.selectOptions(filterColumn, "diameter");
    userEvent.selectOptions(comparisonDropDownFilter, "maior que");
    userEvent.type(valuefilter, "5000");
    userEvent.click(addFilterButton);
  });
});