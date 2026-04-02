import ProductCard from "./components/ProductCard.jsx";
import mouse from "/mouse.jpg";
import picture from "/picture.avif";
import UserCard from "./components/UseCard.jsx";

export default function App() {
  return (
    <>
      <ProductCard
        image={mouse}
        name="Mouse RGB"
        price="250"
        inStock={true}
      ></ProductCard>
      <div className="grid grid-cols-4 gap-4">
        <UserCard
          avatar={picture}
          name="João Silva"
          role="Desenvolvedor"
          active={true}
          badge="Pro"
          theme="light"
        />

        <UserCard
          avatar={picture}
          name="Carlos Lima"
          role="Product Manager"
          active={true}
          badge="Admin"
          theme="dark"
        />
        <UserCard
          avatar={picture}
          name="Maria Santos"
          role="Designer"
          active={false}
          theme="light"
        />

        <UserCard
          avatar={picture}
          name="Ana Costa"
          role="Front-end"
          active={false}
          theme="dark"
        />
      </div>
    </>
  );
}
