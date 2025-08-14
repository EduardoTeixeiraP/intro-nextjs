'use client'

import { useState } from "react"

export default function Calculadora() {
  const [display, setDisplay] = useState("")

  const KeyBoard = (value: string) => {
    if (display.length < 15) {
      setDisplay(display + value)
    }
  }

  const Backspace = () => {
    setDisplay(display.slice(0, -1))
  }

  const Clear = () => {
    setDisplay("")
  }

  const Calculate = () => {
    try {
      const sanitized = display.replace(/×/g, "*").replace(/÷/g, "/")

      
      const result = eval(sanitized)

      if (result !== undefined && !isNaN(result)) {
        setDisplay(result.toString())
      }
    } catch {
      setDisplay("Erro")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-4 py-6 bg-neutral-700 rounded">
        {/* Display */}
        <div className="flex justify-center items-center border border-neutral-400 rounded p-4 h-24 text-center text-3xl text-white w-80">
          {display || "0"}
        </div>

        {/* Teclado numérico */}
        <div className="grid grid-cols-4 gap-1 mt-5 w-80 text-white">
          {[7, 8, 9, "÷", 4, 5, 6, "×", 1, 2, 3, "-", 0, ".", "+", "="].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "=" ? Calculate() : KeyBoard(String(btn))
              }
              className="bg-neutral-800 hover:bg-neutral-900 p-6 text-2xl rounded"
            >
              {btn}
            </button>
          ))}

          {/* Backspace */}
          <button
            onClick={Backspace}
            className="p-2 col-span-2 rounded bg-orange-600 hover:bg-orange-700 flex justify-center items-center"
          >
            ⌫
          </button>

          {/* Clear */}
          <button
            onClick={Clear}
            className="p-2 col-span-2 rounded bg-orange-600 hover:bg-orange-700 flex justify-center items-center"
          >
            C
          </button>
        </div>
      </div>
    </div>
  )
}
