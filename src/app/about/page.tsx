// pages/about.tsx
import { Title, Cards } from "../components/Button";

const items = [
  {
    title: "Read Dead Redempation",
    description: "Um clássico da fantasia onde Bilbo Bolseiro parte em uma aventura inesperada.",
    imageUrl: "https://images8.alphacoders.com/128/1287689.jpg",
    butLabel: "Comprar",
    butUrl: "https://www.amazon.com.br/Hobbit-J-R-R-Tolkien/dp/8595084742",
    category: "Jogo",
  },
  {
    title: "Cyberpunk 2077",
    description: "Um retrato distópico de um futuro sombrio sob vigilância total.",
    imageUrl: "https://giffiles.alphacoders.com/220/220803.gif",
    butLabel: "Ver jogo",
    butUrl: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    category: "Jogo",
  },
  {
    title: "Hades",
    description: "Enfrente o submundo grego neste roguelike eletrizante da Supergiant Games.",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.aR4KEcj4FeZiFFtQ5yCrtAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    butLabel: "Ver Jogo",
    butUrl: "https://store.steampowered.com/app/1145360/Hades/",
    category: "Jogo",
  },
  {
    title: "Harry Potter e o Prisioneiro de Azkaban",
    description: "Explore um mundo vasto como Geralt de Rívia em sua busca por Ciri.",
    imageUrl: "https://articulosdeopinion.net/wp-content/uploads/2016/04/harry-potter-y-el-prisionero-de-azkaban.jpg",
    butLabel: "Ver filme",
    butUrl: "https://www.hbomax.com/br/pt/movies/harry-potter-e-o-prisioneiro-de-azkaban/73553a76-1658-45f6-9e26-1b9c4443b0d6",
    category: "",
  },
  {
    title: "Vingadores Ultimato",
    description: "Após o trágico fim de guerra infinita, é a hora de nos vingarmos",
    imageUrl: "https://img.olhardigital.com.br/wp-content/uploads/2019/04/20190409104125.jpg",
    butLabel: "Ver filme",
    butUrl: "https://www.disneyplus.com/pt-br/browse/entity-b39aa962-be56-4b09-a536-98617031717f",
    category: "Filme",
  },
  {
    title: "Duna",
    description: "Um filme de ficção científica sobre política, ecologia e destino.",
    imageUrl: "https://img.odcdn.com.br/wp-content/uploads/2021/10/duna.jpg",
    butLabel: "Ver filme",
    butUrl: "https://www.hbomax.com/br/pt/shows/duna-a-profecia-2024/57660b16-a32a-476f-89da-3302ac379e91",
    category: "Filme",
  },
];

export default function About() {
  return (
    <div className="flex flex-col items-center bg-neutral-50 min-h-screen p-8">
      <Title />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <Cards
            key={index}
            imageUrl={item.imageUrl}
            title={`${item.title} (${item.category})`}
            description={item.description}
            butLabel={item.butLabel}
            butUrl={item.butUrl}
          />
        ))}
      </div>
    </div>
  );
}
