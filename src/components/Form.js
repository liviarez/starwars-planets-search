import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import { getAllFilters, comparisonFilter } from '../helpers/consts';

export default function Form() {
  const {
    setPlanetsNameInput,
    filterSelection,
    setFilterSelection,
  } = useContext(PlanetsContext);

  const [selected, setSelected] = useState({
    column: 'population',
    condition: 'maior que',
    value: '0',
  });

  const saveSelection = (e) => {
    console.log('e', e);
    setSelected({
      ...selected,
      [e.target.name]: e.target.value,
    });
  };

  const availableFilters = getAllFilters.filter(
    (filter) => !filterSelection.map((f) => f.column).includes(filter),
  );

  const handleAddButton = (event) => {
    event.preventDefault();
    setFilterSelection([...filterSelection, selected]);
    setSelected({
      column: availableFilters[0],
      condition: 'maior que',
      value: '0',
    });
  };

  return (
    <div>
      <form>
        <label>
          <input
            data-testid="name-filter"
            type="text"
            placeholder="Filtro por planeta"
            onChange={ ({ target }) => setPlanetsNameInput(target.value) }
          />
        </label>
        <label htmlFor="column-filter">
          <select
            data-testid="column-filter"
            name="column"
            onChange={ saveSelection }

          >
            {availableFilters.map((column) => (
              <option
                value={ column }
                key={ column }
              >
                {column}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            name="condition"
            data-testid="comparison-filter"
            onChange={ saveSelection }
          >
            {comparisonFilter.map((comparison) => (
              <option
                value={ comparison }
                key={ comparison }
              >
                {comparison}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="value-filter">
          <input
            data-testid="value-filter"
            name="value"
            type="number"
            value={ selected.value }
            onChange={ saveSelection }
          />
        </label>
        <button
          data-testid="button-filter"
          type="submit"
          onClick={ handleAddButton }
        >
          Adicionar filtro
        </button>
      </form>
    </div>
  );
}
