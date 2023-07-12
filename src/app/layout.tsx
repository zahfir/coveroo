"use client";
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import darkTheme from '@/styles/theme/darkTheme';
import { ThemeProvider, CssBaseline } from "@mui/material";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coveroo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Coveroo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
      
    </html>
  )
}
