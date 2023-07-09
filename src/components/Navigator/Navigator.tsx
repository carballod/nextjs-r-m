import { Route } from "@/models";
import Link from "next/link";

interface Props {
  pathNames: Route[];
}

function Navigator({ pathNames }: Props) {
  return (
    <div style={{ display: "flex", gap: "15px", flexDirection: "row" }}>
      {pathNames.map((pathName) => (
        // eslint-disable-next-line react/jsx-key
        <Link href={pathName.path}>{pathName.name}</Link>
      ))}
    </div>
  );
}
export default Navigator;
