'use client'

import {useSession} from "next-auth/react";

export default function MePage() {
    const { data } = useSession()

    return (
        <>
            <pre>Dashboard</pre>
        </>
    )
}
