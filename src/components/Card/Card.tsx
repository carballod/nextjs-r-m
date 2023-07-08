import { Character } from "@/app/characters/models";
import "./Card.css";

interface Props {
  data: Character;
}

function Card({ data }: Props) {
  return (
    <div className="Card">
      <p>Name: {data.name}</p>
      <p>Type: {data.type}</p>
      <p>Created: {data.created}</p>
    </div>
  );
}

export default Card;
