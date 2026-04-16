import PropTypes from "prop-types";

TextInput.PropTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default function TextInput({ id, label, value, setValue }) {
  return (
    <>
      <div>
        <label className="p-2" htmlFor={id}>{label}:</label>
        <input
          className="border rounded"
          type="text"
          name={id}
          id={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
}
