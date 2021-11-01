import "./styles.css";
const Input = ({ type, placeHolder, onChange }) => {
  return (
    <input
      type={type}
      class="form-control mb-4"
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
};

export default Input;
