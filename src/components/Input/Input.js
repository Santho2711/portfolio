import React from "react";

function Input({
  type,
  label,
  placeholder,
  onChangeText,
  error,
  textarea = false,
  value
}) {
  return (
    <div className="inpt">
      {label && <label>{label}</label>}
      {!textarea ? (
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChangeText(e.target.value)}
          value={value}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
        ></textarea>
      )}
      {error && <span className="error">{error.message}</span>}
    </div>
  );
}

export default Input;
