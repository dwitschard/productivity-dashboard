'use client'

import './(root)/(old)/globals.css'
import Header from "@/components/header/header";
import {SessionProvider} from "next-auth/react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="w-screen h-screen">
        <SessionProvider>
            {children}
        </SessionProvider>
        </body>
        </html>
    )
}
