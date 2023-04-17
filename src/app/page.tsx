import Image from 'next/image'
import {Inter} from 'next/font/google'
import {Session} from "next-auth";
import {SessionProvider} from "next-auth/react";

const inter = Inter({subsets: ['latin']})

export interface HomePageProps {
    session: Session
}

export default function Home() {
    return (
        <main>Hello world!</main>
    )
}
