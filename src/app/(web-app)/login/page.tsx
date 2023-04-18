'use client'

import {useEffect} from "react";
import { signIn } from "next-auth/react"

const MyPage = () => {
    useEffect(() => {
        signIn('google', {callbackUrl: '/dashboard'})
    }, []);

    return <></>
}

export default MyPage