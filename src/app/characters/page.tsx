import { Card } from "@/components";
import { getCharacters } from "./services";

async function fetchCharacters() {
  const response = await getCharacters();
  return response;
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </div>
  );
}

export default Characters;
