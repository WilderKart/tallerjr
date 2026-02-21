import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "JR Taller de Motos - SaaS",
    description: "Gestión integral para talleres de motocicletas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
