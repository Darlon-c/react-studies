import ProductCard from "./components/ProductCard.jsx";
import mouse from "/mouse.jpg";

export default function App() {
  return (
    <>
      <ProductCard image={mouse} name="Mouse RGB" price="250" inStock="true"></ProductCard>
    </>
  );
}
