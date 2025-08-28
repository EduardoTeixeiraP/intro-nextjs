'use client'

import { useState } from "react"
import { CheckCircle2, ShoppingBag, ShoppingCart } from "lucide-react"

type Lista = {
  item: string
  comprado: boolean
}

export default function ListaDeCompras() {
  const [lista, setLista] = useState<Lista[]>([
    { item: "Leite", comprado: false },
    { item: "Pão", comprado: false },
    { item: "Ovos", comprado: false },
    { item: "Manteiga", comprado: false },
    { item: "1kg de bife", comprado: false },
    { item: "Batata frita", comprado: false },
  ])

  const Comprar = (index: number) => {
    const novaLista = [...lista]
    novaLista[index].comprado = !novaLista[index].comprado
    setLista(novaLista)
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <div className="flex items-center justify-center gap-2 mb-6">
        <ShoppingBag className="w-7 h-7 text-green-600" />
        <h2 className="text-3xl font-extrabold text-gray-800">Lista de Compras</h2>
      </div>
      
      <ul className="space-y-4">
        {lista.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-4 rounded-xl shadow-sm border transition-all
              ${item.comprado ? "bg-green-50 border-green-200" : "bg-gray-50 hover:bg-gray-100 border-gray-200"}
            `}
          >
            <span
              className={`text-lg font-medium transition-all
                ${item.comprado ? "line-through text-gray-400" : "text-gray-800"}
              `}
            >
              {item.item}
            </span>

            <button
              onClick={() => Comprar(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm shadow-md transition
                ${item.comprado
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white"}
              `}
            >
              {item.comprado ? <CheckCircle2 className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />
              }
            </button>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 text-center mt-6">
         Clique no botão para marcar o item como comprado
      </p>
    </div>
  )
}
