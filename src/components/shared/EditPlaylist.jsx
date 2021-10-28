//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports

import InputPlaylist from "./InputPlaylist";
import { updateDocument } from "scripts/fireStore";

export default function EditPlaylist({ onClose, data }) {
  //Local states
  const [form, setForm] = useState(data);
  const [errorMessage, setErrorMessage] = useState("");
  //const [playlist, setPlaylist] = useState(data.playlist);
  const history = useHistory();

  const [quantity, setQuantity] = useState(data.playlist.length);

  //[...Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span>)
  // Methods
  function onChange(key, value) {
    /*  const playlistItem = { [key]: value };
   const field= {playlist.push(playlistItem)} 
    setForm({ ...form, ...field }); */
  }

  /*   async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    const newData = { ...form };
    await updateDocument("courses", newData.id, newData);
    alert("Mofified");
    onClose();
    history.push(`/profile/${data.id}`);
  } */
  console.log(data.playlist);
  //Components
  /*   const Fields = [...Array(quantity)].map((index) => (
    <InputPlaylist index={index} />
  )); */
  const Fields = data.playlist.map((item, index) => (
    <InputPlaylist key={index} data={item} />
  ));

  const Figures = [...Array(8)].map((index) => {
    let text = "";
    for (let i = 0; i < 8; i++) {
      return <h3>aaa {i}</h3>;
    }
    return null;
  });

  return (
    <form /* onSubmit={onSubmit} */>
      {Fields}
      <p>{errorMessage}</p>
      <button className="btn btn-main btn-140">
        <h4>Submit</h4>
      </button>
    </form>
  );
}
