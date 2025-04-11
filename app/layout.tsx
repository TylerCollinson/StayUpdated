import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { NavBar } from "@/components/nav-bar"
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Topic Library - Searchable Information",
  description: "A website to search and browse topics with detailed information",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
              {/* <Head>
          <link href="https://cdn.jsdelivr.net/npm/react-simple-wysiwyg@1.0.0/dist/react-simple-wysiwyg.css" rel="stylesheet" />
          <script src="https://cdn.jsdelivr.net/npm/react-simple-wysiwyg@1.0.0/dist/react-simple-wysiwyg.js"></script>
        </Head> */}
      <body className={`${inter.className} bg-white text-black`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
