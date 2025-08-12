'use client'

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Interruptor() {
  const [ligada, setLigada] = useState(false);

  const handleClick = () => {
    setLigada((prev) => !prev);
  };

  const imgLampadaLigada =
    "https://i.pinimg.com/736x/05/3a/69/053a697efc05a4d3892a9cd098963423.jpg";
  const imgLampadaDesligada =
    "https://i.pinimg.com/736x/79/72/73/79727342e86ef96986b057621583849c.jpg";

  let imagem;
  let textoBotao;
  let altTexto;

  if (ligada) {
    imagem = imgLampadaLigada;
    textoBotao = "Desligar";
    altTexto = "Lâmpada acesa";
  } else {
    imagem = imgLampadaDesligada;
    textoBotao = "Ligar";
    altTexto = "Lâmpada apagada";
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Lâmpada */}
      <Image
        width={128}
        height={128}
        src={imagem}
        alt={altTexto}
        className="transition-all duration-300"
      />

      {/* Botão */}
      <Button
        variant="outline"
        onClick={handleClick}
        className="bg-neutral-800 hover:bg-neutral-950 px-8 py-6 text-white"
      >
        <span>{textoBotao}</span>
      </Button>
    </div>
  );
}
