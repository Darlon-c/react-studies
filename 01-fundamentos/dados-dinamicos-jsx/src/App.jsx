export default function App() {
  const tech = "React"
  const status = true
  return (
    <>
      <div>
        <h1>{tech} é top</h1>
         <h2>Current status: {status ? "ON" : "OFF"}</h2>
      </div>
    </>
  );
}
