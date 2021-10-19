//@ts-nocheck
//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import fields from "assets/fields-signup.json";
import InputField from "./shared/InputField";
import { createAccount } from "scripts/auth";
import { useAuth } from "state/AuthProvider";

export default function Signup() {
  //Local states
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { setLoggedIn, setUser, user } = useAuth();

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }
  console.log(user);
  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await createAccount(form.email, form.password);
    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  function onSuccess(uid) {
    const newUser = { username: form.username };
    // 1.TODO create a user in the database using the UID as the document id.

    // 2. update global state: user and loggedin
    setLoggedIn(true);
    setUser(newUser);
    // 3. redirect to home
    history.push("/");
  }

  function onFailure(code) {
    setMessage(code);
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
        <button>Create account</button>
      </form>
    </div>
  );
}
