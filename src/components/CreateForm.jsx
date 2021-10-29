//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "assets/fields-create.json";
import InputField from "./shared/InputField";
import InputLinks from "components/shared/InputLinks";
import { createDoc } from "scripts/fireStore";
import InputFiles from "./shared/InputFiles";

export default function CreateForm({ onClose }) {
  //Local states
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageURL: "",
    content: "",
    links: [""],
    files: [{}],
    playlist: [{}],
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    await createDoc("courses", form);
    alert("Course created");
    onClose();
    history.push("/");
  }

  //Components
  const Fields = fields.map((item) => (
    <InputField
      options={item}
      state={form[item.key]}
      onChange={onChange}
      key={item.key}
    />
  ));
  console.log(form);
  return (
    <form onSubmit={onSubmit}>
      {Fields}
      <InputLinks state={form} setForm={setForm} />
      <InputFiles state={form} setForm={setForm} />
      <p>{errorMessage}</p>
      <button className="btn btn-main btn-140">
        <h4>Submit</h4>
      </button>
    </form>
  );
}
