'use client'

import {Inter} from 'next/font/google'
import {Session} from "next-auth";
import {signIn} from "next-auth/react";
import {Hero} from "@/components/hero/hero";
import {useRouter} from 'next/navigation';

const inter = Inter({subsets: ['latin']})

export interface HomePageProps {
    session: Session
}

export default function Home() {
    const router = useRouter();

    const handler = {
        onLogin: () => {
            signIn('google', {callbackUrl: '/dashboard'})
        }
    }

    return (
        <Hero onClickHandler={handler.onLogin}></Hero>
    )
}
