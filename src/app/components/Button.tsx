type ButtonProps = {
  label: string;
};

type PropCards = {
  title: string;
  description: string;
  imageUrl: string;
  butLabel: string;
  butUrl: string;
};

function Button({ label }: ButtonProps) {
  return (
    <button
      type="submit"
      className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded transition-colors duration-300"
    >
      {label}
    </button>
  );
}

function Title() {
  return <h1 className="text-black text-4xl font-bold mb-8">Triologia de Tomb Raider</h1>;
}

function Cards({ title, description, imageUrl, butLabel, butUrl }: PropCards) {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md overflow-hidden w-[400px] h-[440px] flex flex-col group">
      <div className="h-[280px] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt="imageProps"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-2 p-4 flex-1">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 flex-1">{description}</p>
        <div className="mt-auto">
          <a href={butUrl} target="_blank" rel="noopener noreferrer">
            <button
                type="button"
                className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded transition-colors duration-300"
            >
                {butLabel}
            </button>
            </a>
        </div>
      </div>
    </div>
  );
}


export { Button, Title, Cards };
