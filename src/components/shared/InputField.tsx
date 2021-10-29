//@ts-nocheck
import { useRef } from "react";

export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type, mode, required } = options;

  // Properties
  const inputReference = useRef(null);

  return (
    <>
      {key !== "avatarURL" && (
        <label className={key}>
          {label} {required && "  ( required )"}
          <input
            ref={inputReference}
            value={state}
            type={type}
            placeholder={mode === "edit" ? state : placeholder}
            required={required}
            onChange={() => onChange(key, inputReference.current.value)}
          ></input>
        </label>
      )}
      {key === "avatarURL" && (
        <label className="files">
          Avatar
          <input
            type="file"
            onChange={(e) => {
              onChange(key, e.target.files[0]);
            }}
          />
        </label>
      )}
    </>
  );
}
