'use client'

import {Inter} from 'next/font/google'
import {Session} from "next-auth";
import {signIn, useSession} from "next-auth/react";
import {Hero} from "@/components/hero/hero";
import {useRouter} from 'next/navigation';
import {Spinner} from "@/components/spinner/spinner";

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

    const { status } = useSession()

    if (status === "loading" || status === "authenticated") {
        if (status === "authenticated") {
            router.push('/dashboard');
        }
        return (
            <div className="flex w-full h-full items-center justify-center">
             <Spinner />
            </div>
        );
    }

    return (
        <Hero onClickHandler={handler.onLogin}></Hero>
    )
}
