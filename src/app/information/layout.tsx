import { firacode } from "../models";
import cardLayoutStyles from "./information-layout.module.css";

function CardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${firacode.className} ${cardLayoutStyles.informationLayout}`}
    >
      {children}
    </div>
  );
}

export default CardLayout;
