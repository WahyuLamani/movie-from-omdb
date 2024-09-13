"use client";
import { fetching } from "@/lib/action";
import { useEffect } from "react";
export default function Details({ imdb }: { imdb: string }) {
    useEffect(() => {
        const result = async () => {
            const response = await fetching(`i=${imdb}`);
            console.log(response);
        };
        result();
    }, [imdb]);
    return (
        <div>
            <div>Halaman details</div>
        </div>
    );
}
