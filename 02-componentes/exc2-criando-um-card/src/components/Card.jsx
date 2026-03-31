export default function NewCard() {
  return (
    <div className="bg-gray-200 rounded-2xl flex justify-center items-center mt-30 gap-6 max-w-4xl mx-auto p-4">
      <div className="shrink-0">
        <img src="poster.jpg" width={300} className="shadow-2xl" />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Pôster: Star Wars</h1>
        <p>
          Traga toda a emoção da aventura que marcou gerações para a sua
          decoração com o Poster Star Wars. Com o formato imponente de 90x60 cm,
          este não é apenas um pôster; é uma peça de colecionador que transforma
          qualquer ambiente em um verdadeiro troféu geek.
        </p>
        <button className="mt-10 p-2 rounded hover:bg-blue-800 cursor-pointer bg-blue-600">
          Comprar
        </button>
      </div>
    </div>
  );
}
