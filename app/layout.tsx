import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Coach Serges — Coaching sportif premium",
    template: "%s | Coach Serges"
  },
  description: "Site officiel de Coach Serges : coaching sportif, programmes, événements, calendrier, espace client et suivi personnalisé.",
  metadataBase: new URL(process.env.APP_PUBLIC_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
