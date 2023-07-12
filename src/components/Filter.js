import { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function Filter() {
  const {
    planetsInput,
    setPlanetsNameInput,
    /* activeFilter,
    setActiveFilter,
    selectedFilters,
    setSelectedFilters, */
  } = useContext(planetsContext);

  const getFilterByName = (nameTarget) => {
    setPlanetsNameInput(nameTarget);
  };

  /*  const getFilterByNumber = (numberTarget) => {
    setActiveFilter(numberTarget);
  };
 */
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ planetsInput }
        placeholder="Filtro por planeta"
        onChange={ (e) => {
          getFilterByName(e.target.value);
        } }
      />
      {/*       <div>
        <select
          data-testid="column-filter"
          onChange={ (e) => {
            getFilterByNumber(e.target.value);
          } }
          value={ activeFilter }
        >
          Coluna
        </select>

      </div>
      <button
        data-testid="button-filter"
        onClick={ () => {
          setActiveFilter([...activeFilter, selectedFilters]);
          setSelectedFilters({
            column: '',
            condition: '',
            value: '',
          });
        } }
      >
        Adicionar Filtro
      </button> */}
    </div>
  );
}
