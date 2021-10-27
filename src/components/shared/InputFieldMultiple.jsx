//NPM Packages
import { useState } from "react";

//Local Files
import remove from "assets/icns/remove.png";
import ButtonField from "./ButtonField";

export default function InputFieldMultiple({ onChange, options, state }) {
  const { key, label, placeholder, type, mode, required } = options;

 //Local states
 const [visible, setVisible] = useState(false);
 const [links, setLinks] = useState(state);

  //Methods
  function clearField(index) {
    let newFiles = { ...links };
    delete newFiles.[`l${index}`];
    setLinks(newFiles);
    onChange(key, newFiles);
  }

  // todo-refactor more if possible and time
  return (
    <>
     <label className="links">
        Link{(visible) || mode === "edit" ? "s" : ""}:
      </label>
      
      <label className={key}>
       
        <input
          value={links.l1 ? links.l1 : ""}
          type={type}
          placeholder={mode === "edit" && state.l1 ? state.l1 : placeholder}
          required={required}
          onChange={(e) => {
            setLinks({ ...links, l1: e.target.value });
            onChange(key, { ...links, l1: e.target.value });
          }}
        />
        {mode === "edit" && (
         <ButtonField action={clearField} index={1} icn={remove} />
        )}
      </label>

      {(visible || mode === "edit")  && (
       
        <label className={key}>
          <input
            value={links.l2 ? `${links.l2}` : ""}
            type={type}
            placeholder={mode === "edit" && state.l2 ? state.l2 : placeholder}
            onChange={(e) => {
              setLinks({ ...links, l2: e.target.value });
              onChange(key, { ...links, l2: e.target.value });
            }}
          />
          <ButtonField action={clearField} index={2} icn={remove} />
        </label>
      )}
      {(visible || mode === "edit" ) && (
        <label className={key}>
          <input
            value={links.l3 ? `${links.l3}` : ""}
            type={type}
            placeholder={mode === "edit" && state.l3 ? state.l3 : placeholder}
            onChange={(e) => {
              setLinks({ ...links, l3: e.target.value });
              onChange(key, { ...links, l3: e.target.value });
            }}
          />
         <ButtonField action={clearField} index={3} icn={remove} />
        </label>
      )}
      {mode === "create" && (
        <button
        className="btn btn-ghost btn-add-field"
        onClick={() => {
          setVisible(!visible);
        }}
        type="button"
      >
        <h4> {visible ? "show less":"more ( up to 3 links  )"} </h4>
      </button>
      )}
    </>
  );
}
