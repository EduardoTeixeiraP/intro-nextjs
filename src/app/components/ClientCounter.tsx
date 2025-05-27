import { useState } from 'module'

export default function ClientCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Contador</h1>
            <p className="cont">Você clicou {count} vezes!</p>
            <button onClick={()=>{setCount(count+1)}}>
                Clique aqui
            </button>
        </div>
    )
}