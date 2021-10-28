//NPM Packages
import { useState } from "react";
import { useHistory } from "react-router-dom";

//Local imports
import remove from "assets/icns/remove.png";
import InputPlaylist from "./InputPlaylist";
import { updateDocument } from "scripts/fireStore";

export default function EditPlaylist({ onClose, data }) {
  //Local states
  const [form, setForm] = useState(data);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  // Methods
  function onChange(key, value, index) {
    const newPlaylist = [...form.playlist]; //arr
    const upVideo = { ...newPlaylist[index], [key]: value };
    newPlaylist[index] = upVideo;

    setForm({ ...form, playlist: newPlaylist });
  }

  function addField() {
    const newPlaylist = [...form.playlist];
    newPlaylist.push({ content: "", url: "" });
    setForm({ ...form, playlist: newPlaylist });
  }
  async function onSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    const newData = { ...form };
    await updateDocument("courses", newData.id, newData);
    alert("Modified");
    onClose();
    history.push(`/courses/${data.id}`);
  }

  function clearField(idx) {
    const newPlaylist = [...form.playlist];
    console.log("bef", idx, newPlaylist);
    newPlaylist.splice(idx, 1);
    console.log("aft", idx, newPlaylist);
    setForm({ ...form, playlist: newPlaylist });
  }

  const Fields = form.playlist.map((item, index) => (
    <div className="playlist-item" key={index}>
      <InputPlaylist
        data={item}
        onChange={onChange}
        index={index}
        state={form.playlist[index]}
      />
      <button
        className="btn btn-clear-field"
        onClick={() => clearField(index)}
        type="button"
      >
        <img src={remove} alt="-" />
      </button>
    </div>
  ));

  return (
    <form onSubmit={onSubmit}>
      <div className="playlist-form-title">
        <p>Youtube Link</p>
        <p>Content description</p>
      </div>

      {Fields}
      <p>{errorMessage}</p>
      <button
        className="btn btn-ghost btn-add-field"
        onClick={addField}
        type="button"
      >
        <h4> Add a slot </h4>
      </button>
      <button className="btn btn-main btn-140">
        <h4>Submit</h4>
      </button>
    </form>
  );
}
