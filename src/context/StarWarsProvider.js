import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import requestAPI from '../services/requestAPI';

export default function StarWarsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [planetsInput, setPlanetsNameInput] = useState('');
  const [filterSelection, setFilterSelection] = useState([]);
  const [filterName, setFilterName] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getPlanetsAPI = await requestAPI();
      setPlanetsData(getPlanetsAPI);
      setFilterName(getPlanetsAPI);
    }
    fetchData();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        planetsData,
        setPlanetsData,
        planetsInput,
        setPlanetsNameInput,
        filterSelection,
        setFilterSelection,
        filterName,
        setFilterName,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// No dia 12/07 em mentoria individual, foi sugerido a criacao de um componente provider ao inves de fazer tudo no app para ficar mais organizado. Por isso a refatoracao do codigo.
