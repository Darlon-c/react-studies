export default function ProductCard({ name, price, inStock, image }) {
  return (
    <div className="bg-gray-200 rounded-2xl flex flex-col items-center mt-30 gap-6 max-w-92 mx-auto p-4">
      <img src={image} alt={name} />
      <h1>Nome: {name}</h1>
      <h3>Preço: R${price}</h3>
      <h3>Em estoque: {inStock}</h3>
    </div>
  );
}
