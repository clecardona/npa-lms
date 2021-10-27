//@ts-nocheck
import { useRef } from "react";
import InputFieldMultiple from "./InputFieldMultiple";
import InputFieldMultipleFiles from "./InputFieldMultipleFiles";

export default function InputField({ onChange, options, state }) {
  const { key, label, placeholder, type, mode, required } = options;

  // Properties
  const inputReference = useRef(null);

  return (
    <>
      {key !== "links" &&
        key !== "files" &&
        key !== "file" &&
        key !== "avatarURL" && (
          <label className={key}>
            {label} {required && " - required"}
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

      {key === "links" && (
        <InputFieldMultiple
          onChange={onChange}
          options={options}
          state={state}
        />
      )}
      {key === "files" && (
        <InputFieldMultipleFiles
          onChange={onChange}
          options={options}
          state={state}
        />
      )}
      {key === "avatarURL" && (
        <label className="files">
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
