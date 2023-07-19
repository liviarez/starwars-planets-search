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

  const deleteFilter = (parametro) => {
    const filtrosDeleteados = filterSelection
      .filter((teste) => teste.column !== parametro.column);
    setFilterSelection(filtrosDeleteados);
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
        <button
          data-testid="filter"
          type="submit"
          onClick={ () => setFilterSelection([]) }
        >
          Limpar filtros
        </button>
      </form>
      <div>
        {
          filterSelection.map((filtro) => (
            <div
              key={ filtro.column }
              data-testid="filter"
            >
              <p>
                {`${filtro.column}
                ${filtro.value}
                ${filtro.condition}`}
              </p>
              <button
                type="button"
                onClick={ () => deleteFilter(parametro) }
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

// https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/9e8c3bc8-5ae7-4ef8-b7e0-9482b2213d32/recording/c5e71e77-beef-4370-8188-89360df4ba54
// Suporte com a lógica da 7 na monitoria individual. 19/07
