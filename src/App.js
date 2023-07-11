import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import planetsContext from './context/planetsContext';
import { fetchPlanetsAPI } from './helpers/planetsAPI';

function App() {
  const [planets, setPlanets] = useState([]);

  const fetchData = async () => {
    const getPlanetsAPI = await fetch(fetchPlanetsAPI);
    const response = await getPlanetsAPI.json();
    setPlanets(response);
  };

  // Consequência de uma ação. Acontece de forma posterior a um evento.
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <planetsContext.Provider value={ { planets } }>
      <div>
        <Table />
      </div>
    </planetsContext.Provider>
  );
}

export default App;
