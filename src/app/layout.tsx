import "./tailwind-global.css";
import StyledComponentsRegistry from "./lib/registry";

export const metadata = {
  title: "Rick and Morty",
  description: "Nextjs app with Rick and Morty API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
