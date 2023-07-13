import React from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';

export default function App() {
  return (
    <StarWarsProvider>
      <Form />
      <Table />
    </StarWarsProvider>
  );
}
