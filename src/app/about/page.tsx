import { Title, Cards } from "../components/Button";

 export default function About() {
    return (
        <div className="flex bg-neutral-50 min-h-screen flex-col justify-center items-center space-y-4">
            <Title/>
            <div className="flex flex-row gap-12">
                <Cards 
                imageUrl="https://images5.alphacoders.com/338/338156.jpg"
                title="Tomb Raider - Survivor is born"
                description="Tomb Raider explora a intensa história da origem de Lara Croft, e sua ascensão de uma jovem mulher a uma sobrevivente."
                butLabel="Comprar"
                butUrl="https://store.steampowered.com/app/203160/Tomb_Raider/"/>
                <Cards 
                imageUrl="https://images8.alphacoders.com/107/1074668.jpg"
                title="Rise of the Tomb Raider"
                description="Lara Croft viaja à Sibéria em busca da Fonte Divina, enfrentando a Trindade para descobrir a verdade sobre a imortalidade."
                butLabel="Comprar"
                butUrl="https://store.steampowered.com/app/391220/Rise_of_the_Tomb_Raider/"
                />
                <Cards 
                imageUrl="https://images8.alphacoders.com/107/thumb-1920-1074713.jpg"
                title="Shadow of the Tomb Raider"
                description="Lara viava até a América Latina, onde enfrenta a Trindade e um apocalipse maia, tornando-se a verdadeira Tomb Raider."
                butLabel="Comprar"
                butUrl="https://store.steampowered.com/app/750920/Shadow_of_the_Tomb_Raider_Definitive_Edition/"
                />
            </div>
        </div>
    )
 }
 