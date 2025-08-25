import BotaoReproducao from "../components/ReproduceButton";

export default function Music() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] p-6">
            <h1 className="text-4xl font-bold text-white mb-12 tracking-wide">Music player</h1>
                <div className="flex items-center justify-center bg-[#1DB954] rounded-full p-6 shadow-xl">
                    <BotaoReproducao />
                </div>
                <p className="text-neutral-400 mt-6 text-center max-w-xs">
                    Clique no botão para reproduzir ou pausar a música.
                </p>
        </div>
    )
}
