+import type { Metadata } from "next";

+import { Playfair_Display, Inter } from "next/font/google";

+import "./globals.css";

+

+const playfair = Playfair_Display({

+  subsets: ["latin"],

+  variable: "--font-playfair",

+  display: "swap",

+});

+

+const inter = Inter({

+  subsets: ["latin"],

+  variable: "--font-inter",

+  display: "swap",

+});

+

+export const metadata: Metadata = {

+  title: "Crafted Wear - Premium Customized Streetwear",

+  description: "Modern luxury streetwear for youth. Custom oversized tees and hoodies with bold designs.",

+};

+

+export default function RootLayout({

+  children,

+}: Readonly<{

+  children: React.ReactNode;

+}>) {

+  return (

+    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>

+      <head>

+        <link rel="preconnect" href="https://fonts.googleapis.com" />

+        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

+      </head>

+      <body className="font-sans">

+        {children}

+      </body>

+    </html>

+  );

+}
