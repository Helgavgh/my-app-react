const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

export default async function getPokemons() {
  const service = await fetch(apiURL);
  const JSONresponse = await service.json();
  const { results } = JSONresponse;
  const getName = results.map((names) => {
    const { name } = names;
    return name;
  });
  return getName;
};
