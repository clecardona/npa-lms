//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "assets/fields-edit-profile.json";
import InputField from "components/shared/InputField";
import { updateProfile } from "scripts/fireStore";

export default function EditProfile({ onClose, data }) {
  //Local states
  const [form, setForm] = useState(data);
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
    const newData = { ...form };
    await updateProfile("users", newData.id, newData);
    alert("Info updated");
    onClose();
    history.push(`/profile/${data.id}`);
  }

  //Components
  const Fields = fields.map((item) => (
    <InputField
      key={item.key}
      options={item}
      state={form[item.key]}
      onChange={onChange}
    />
  ));

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
