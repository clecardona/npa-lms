//@ts-nocheck
//NPM Packages
import { useState } from "react";
import { Link } from "react-router-dom";

//Local imports
import fields from "assets/fields-login.json";
import InputField from "./shared/InputField";

export default function Login() {
  //Local states
  const [form, setForm] = useState({ email: "", password: "" });

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  function onSubmit(e) {
    e.preventDefault();
    alert("submit");
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
    <div>
      <form onSubmit={onSubmit}>
        {Fields}
        <button>Login</button>
      </form>
      <p>
        Not registered ?<Link to="/signup"> Create an account</Link>
      </p>
    </div>
  );
}
