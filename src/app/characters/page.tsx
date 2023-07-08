import { getCharacters } from "./services";

async function fetchCharacters() {
  const response = await getCharacters();
  return response;
}

async function Characters() {
  const characters = await fetchCharacters();
  return <div>{JSON.stringify(characters)}</div>;
}

export default Characters;
