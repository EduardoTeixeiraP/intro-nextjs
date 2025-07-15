'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type DogImage = {
    message: string;
};

export default function DogsPage() {
    const [dog, setDog] = useState<DogImage>({message:""});

    const fetchDog = async () => {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await res.json();
        setDog(data);
    };

    useEffect(() => {
        fetchDog();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Random Dog 🐶</h1>

            <Image
                src={dog.message}
                alt="Random dog"
                className="w-80 h-80 object-cover rounded-xl shadow-lg"
            />

            <Button
                onClick={fetchDog}
                className=" hover:bg-blue-600 transition"
            >
                Buscar outro cachorro
            </Button>
        </div>
    );
}
