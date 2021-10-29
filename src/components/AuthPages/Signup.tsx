//@ts-nocheck
//NPM Packages
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

//Local imports
import fields from "./assets/fields-signup.json";
import InputField from "../shared/InputField";
import { createAccount } from "scripts/auth";
import { useAuth } from "state/AuthProvider";
import { createDocumentWithId } from "scripts/fireStore";

export default function Signup() {
  //Local states
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { setLoggedIn, setUser } = useAuth();
  const AVATAR_URL =
    "https://cdn.dribbble.com/users/1066406/screenshots/6453079/bbb_-_firmino.jpg?compress=1&resize=400x300";

  // Methods
  function onChange(key, value) {
    const field = { [key]: value };
    setForm({ ...form, ...field });
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage("");
    const account = await createAccount(form.email, form.password);
    account.isCreated ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const newUser = {
      firstname: form.firstname,
      lastname: form.lastname,
      username: form.username,
      role: "student",
      avatarURL: AVATAR_URL,
    };
    await createDocumentWithId("users", uid, newUser);
    setLoggedIn(true);
    setUser({ ...newUser, id: uid });

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
    <main className="page-login signup ">
      <form onSubmit={onSubmit}>
        {Fields}
        <p>{message}</p>
        <button className="btn btn-main">
          <h4>signup</h4>
        </button>
      </form>
      <p className="optional-action">
        Already have an acoount? :
        <Link to="/login">
          <strong> Login </strong>
        </Link>
      </p>
    </main>
  );
}
