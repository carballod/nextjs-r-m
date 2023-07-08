import { Character } from "@/app/characters/models";
import "./Card.css";
import Image from "next/image";

interface Props {
  data: Character;
}

function Card({ data }: Props) {
  return (
    <div className="Card">
      <p>Name: {data.name}</p>
      <p>Type: {data.type ? data.type : "No type"}</p>
      <p>Created: {data.created}</p>
      <Image width="100" height="100" alt="Image" src={data.image} />
    </div>
  );
}

export default Card;
