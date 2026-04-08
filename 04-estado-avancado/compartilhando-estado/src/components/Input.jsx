export default function Input(props) {
  return (
    <>
      <div className="flex gap-4 py-1 border rounded">
        <label htmlFor="passwordSize">Tamanho:</label>
        <input
          type="number"
          min={1}
          value={props.passwordSize}
          className="text-center"
          onChange={(ev) => props.setPasswordSize(Number(ev.target.value))}
        />
      </div>
    </>
  );
}
