export default function Input(props) {
  return (
    <>
      <div className="flex justify-center gap-4">
        <label htmlFor="passwordSize">Tamanho:</label>
        <input
          type="number"
          min={1}
          value={props.passwordSize}
          className="text-center border rounded"
          onChange={(ev) => props.setPasswordSize(Number(ev.target.value))}
        />
      </div>
    </>
  );
}
