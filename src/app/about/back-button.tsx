'use client';

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export function BackButton(props: { children: ReactNode }) {
    const router = useRouter()
    return (
        <button onClick={() => { router.back() }}>{props.children}</button>
    )
}
