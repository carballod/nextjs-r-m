import Navigator from "@/components/Navigator/Navigator";
import { Routes } from "@/models";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Rock and Morty app</h1>
      <h2>What do you want to see?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
    </div>
  );
}
