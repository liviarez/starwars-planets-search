import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    planetsData,
    filterName,
    setFilterName,
    planetsInput,
    filterSelection } = useContext(PlanetsContext);

  const dataTreatment = () => planetsData.filter((planet) => (
    filterSelection.every((filter) => {
      if (filter.condition === 'igual a') {
        return +planet[filter.column] === +filter.value;
      }
      if (filter.condition === 'maior que') {
        return +planet[filter.column] > +filter.value;
      }
      return +planet[filter.column] < +filter.value;
    })
  ));
  useEffect(() => {
    setFilterName(
      dataTreatment(),
    );
  }, [filterSelection]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { filterName
            .filter(({ name }) => name.toUpperCase()
              .includes(planetsInput
                .toUpperCase()))
            .map((planet) => (
              <tr key={ planet.name }>
                <td data-testid="planet-name">{ planet.name }</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))}

        </tbody>
      </table>
    </div>

  );
}
export default Table;
