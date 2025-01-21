import type { Metadata } from "next";
import "./globals.css";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Plus_Jakarta_Sans({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-sans",
});

export const metadata: Metadata = {
   title: "jigx hospital",
   description: "a hospital management system",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={cn(
               "min-h-screen bg-dark-300 font-sans antialiased",
               fontSans.variable
            )}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               // enableSystem
               // disableTransitionOnChange
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
