export const fetchPlanetsAPI = async () => {
  const response = await fetch('https://swapi.dev/api/planets');
  const data = await response.json();
  const remove = data.results.filter((planet) => delete planet.residents);
  return remove;
};
