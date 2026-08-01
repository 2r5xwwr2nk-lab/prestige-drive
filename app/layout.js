import "./globals.css";
import Header from "../components/Header";
import { LanguageProvider } from "../components/LanguageProvider";

export const metadata = {
  title: {
    default: "Prestige Drive | Wedding Cars & VIP Executive Travel",
    template: "%s | Prestige Drive",
  },
  description:
    "Luxusná svadobná doprava a VIP executive transfer. Prestige Drive – komfort, elegancia a profesionálny servis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sk">
      <body>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}