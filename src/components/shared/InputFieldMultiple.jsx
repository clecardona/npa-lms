import { useState } from "react";
import remove from "assets/icns/remove.png";

export default function InputFieldMultiple({ onChange, options, state }) {
  const { key, label, placeholder, type, mode, required } = options;

  const [quantity, setQuantity] = useState(mode === "edit" ? 2 : 1);
  const [links, setLinks] = useState(state);

  console.log(state);

  //Methods
  function addField() {
    if (quantity < 3) {
      setQuantity(quantity + 1);
    }
  }
  function removeField() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  console.log(quantity);
  // REFACTOR THIS SHIT IF POSSIBLE
  return (
    <>
      <label>
        Link{quantity > 1 ? "s" : ""}:
        <input
          value={links.l1 ? links.l1 : ""}
          type={type}
          placeholder={mode === "edit" ? state : placeholder}
          required={required}
          onChange={(e) => {
            setLinks({ ...links, l1: e.target.value });
            onChange(key, { ...links, l1: e.target.value });
          }}
        ></input>
      </label>

      {(quantity >= 2 || (mode === "edit" && links.l2 !== "")) && (
        <label className={key}>
          <input
            value={links.l2 ? `${links.l2}` : ""}
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={(e) => {
              setLinks({ ...links, l2: e.target.value });
              onChange(key, { ...links, l2: e.target.value });
            }}
          ></input>
          <button
            className="btn btn-remove-field"
            onClick={() => {
              setLinks({ ...links, l2: "" });
              removeField();
            }}
            type="button"
          >
            <img src={remove} alt="-" />
          </button>
        </label>
      )}
      {(quantity >= 3 || (mode === "edit" && links.l3 !== "")) && (
        <label className={key}>
          <input
            value={links.l3 ? `${links.l3}` : ""}
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={(e) => {
              setLinks({ ...links, l3: e.target.value });
              onChange(key, { ...links, l3: e.target.value });
            }}
          ></input>
          <button
            className="btn btn-remove-field"
            onClick={() => {
              setLinks({ ...links, l3: "" });
              removeField();
            }}
            type="button"
          >
            <img src={remove} alt="-" />
          </button>
        </label>
      )}
      {quantity < 3 && (
        <button
          className="btn btn-ghost btn-add-field"
          onClick={addField}
          type="button"
        >
          <h4> add link ( up to 3 ) </h4>
        </button>
      )}
    </>
  );
}
