"use client";  // Indica que este es un componente del lado del cliente

import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { NavBarComponent } from "@/components/ui/NavBarComponent";
import { IPadCursorProvider } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const config: IpadCursorConfig = {};

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(false), 1000); // Añade un retraso para permitir el efecto de desvanecido
    }, 5000); // Mantener la pantalla de carga visible durante 5 segundos

    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favico.png" sizes="any" />
        <title>RecomIA</title>
      </head>
      <body className={inter.className}>
        <LoadingScreen isVisible={isVisible} />
        <IPadCursorProvider config={config}>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {isLoading ? null : children}
          </ThemeProvider>
        </IPadCursorProvider>
      </body>
    </html>
  );
}
