import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import planetsContext from './context/planetsContext';
import { fetchPlanetsAPI } from './helpers/planetsAPI';
import Filter from './components/Filter';

function App() {
  const [planets, setPlanets] = useState([]);
  const [planetsInput, setPlanetsNameInput] = useState('');
  const [filterName, setFilterName] = useState([]);
  /*   const [activeFilters, setActiveFilters] = useState();
  const [selectedFilters, setSelectedFilters] = useState({
    column: '',
    condition: '',
    value: '',
  }); */

  // Consequência de uma ação. Acontece de forma posterior a um evento.
  useEffect(() => {
    const fetchData = async () => {
      const getPlanetsAPI = await fetchPlanetsAPI();
      setPlanets(getPlanetsAPI);
      setFilterName(getPlanetsAPI);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // includes comparacao aproximada.
    const filteredNames = planets
      .filter((planet) => planet.name.toUpperCase().includes(planetsInput.toUpperCase()));
    setFilterName(filteredNames);
  }, [planetsInput]);

  return (
    <planetsContext.Provider
      value={ { planets,
        planetsInput,
        filterName,
        setFilterName,
        setPlanetsNameInput,
      } }
    >
      <div>
        <Table />
        <Filter />
      </div>
    </planetsContext.Provider>
  );
}

export default App;
