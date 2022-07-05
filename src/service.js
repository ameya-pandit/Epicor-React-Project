import axios from 'axios';

export async function getPlanets()  {
  const res = await Promise.all([
    axios.get('https://swapi.dev/api/planets/?page=1&format=json'),
    axios.get('https://swapi.dev/api/planets/?page=2&format=json'),
    axios.get('https://swapi.dev/api/planets/?page=3&format=json'),
    axios.get('https://swapi.dev/api/planets/?page=4&format=json'),
    axios.get('https://swapi.dev/api/planets/?page=5&format=json'),
    axios.get('https://swapi.dev/api/planets/?page=6&format=json')
  ]);

  const data = res.map((res) => res.data.results);
  return data.flat();
}

export async function getResidents(residents)  {
  const res = await Promise.all(residents.map((resident) => axios.get(resident)));
  const data = res.map((res) => res.data);

  return data;
}

export async function getFilms(films) {
  const res = await Promise.all(films.map((film) => axios.get(film)));
  const data = res.map((res) => res.data);

  return data;
}

export async function getSpecies(species) {
  const res = await Promise.all(species.map((spec) => axios.get(spec)));
  const data = res.map((res) => res.data);

  return data;
}

export async function getStarships(starships) {
  const res = await Promise.all(starships.map((ship) => axios.get(ship)));
  const data = res.map((res) => res.data);

  return data;
}

export async function getVehicles(vehicles) {
  const res = await Promise.all(vehicles.map((vehicle) => axios.get(vehicle)));
  const data = res.map((res) => res.data);

  return data;
}