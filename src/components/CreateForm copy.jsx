//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "assets/fields-create.json";
import InputField from "./shared/InputField";
import { createDoc } from "scripts/fireStore";

export default function CreateForm({ onClose }) {
  //Local states
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageURL: "",
    content: "",
    links: [],
    files: {}, // todo- refactor to [{}]
    playlist: [{}],
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  function onChangeLink(key, value, index) {
    const newLinks = [...form.links]; //arr
    const upLink = { ...newLinks[index], [key]: value };
    newLinks[index] = upLink;

    setForm({ ...form, links: newLinks });
  }

  function addLink() {
    const newLinks = [...form.links];
    newLinks.push("");
    console.log(newLinks);
    setForm({ ...form, links: newLinks });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    const newCourse = { ...form };
    await createDoc("courses", newCourse);
    alert("Course created");
    onClose();
    history.push("/");
  }

  //Components
  const Fields = fields.map((item) => (
    <div className="link-item" key={item.key}>
      <InputField
        options={item}
        state={form[item.key]}
        onChange={item.key === "links" ? onChangeLink : onChange}
      />
      {item.key === "links" && (
        <button
          className="btn btn-ghost btn-add-field"
          onClick={addLink}
          type="button"
        >
          <h4> Add a slot </h4>
        </button>
      )}
    </div>
  ));

  console.log(form);

  return (
    <form onSubmit={onSubmit}>
      {Fields}
      <p>{errorMessage}</p>

      <button className="btn btn-main btn-140">
        <h4>Submit</h4>
      </button>
    </form>
  );
}
