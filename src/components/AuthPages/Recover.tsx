//@ts-nocheck
//NPM Packages
import { useState } from "react";

//Local imports
import fields from "./assets/fields-recover.json";
import InputField from "../shared/InputField";
import { recover } from "scripts/auth";

export default function Recover() {
  //Local states
  const [form, setForm] = useState({ email: "" });
  const [message, setMessage] = useState("");

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  console.log(message);
  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await recover(form.email);
    account.isReset ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(message) {
    setMessage(message);
  }

  function onFailure(errorMessage) {
    setMessage(errorMessage);
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
    <main className="page-login recover">
      <form onSubmit={onSubmit}>
        {Fields}
        <p>{message}</p>
        <button className="btn btn-main">
          <h4>recover password</h4>
        </button>
      </form>
    </main>
  );
}
