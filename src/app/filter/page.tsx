
export default function Filter() {
    
    const frutas = ['maça', 'banana', 'uva', 'melão']

    const resultado = frutas.filter((fruta)=>{
        const primeiraLetra = fruta[0]
        const ultimaLetra = fruta[fruta.length -1]
        if(primeiraLetra == "m" && ultimaLetra){return true}
        else {
            return false
        }
    })

    console.log(resultado)


    return (
        <div className="">

        </div>
    )
 }