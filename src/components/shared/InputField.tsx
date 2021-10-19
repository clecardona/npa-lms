//@ts-nocheck
import { useRef } from "react";
export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type } = options;

  // Properties
  const inputReference = useRef(null);
  return (
    <label>
      {label}
      <input
        ref={inputReference}
        value={state}
        type={type}
        placeholder={placeholder}
        required
        onChange={() => onChange(key, inputReference.current.value)}
      ></input>
    </label>
  );
}
