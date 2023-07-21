const requestAPI = async () => {
  const response = await fetch('https://swapi.dev/api/planets');
  const { results } = await response.json();
  const planets = results.map(({ residents, ...rest }) => rest);
  return Promise.resolve(planets);
/*   return response.ok ? Promise.resolve(planets) : Promise.reject(planets); */
};

export default requestAPI;
