import remove from "assets/icns/remove.png";
export default function InputLinks({ state, setForm }) {
  //methods
  function onChangeLink(value, index) {
    const newLinks = [...state.links];
    newLinks[index] = value;
    setForm({ ...state, links: newLinks });
  }

  function addLink() {
    const newLinks = [...state.links];
    newLinks.push("");
    setForm({ ...state, links: newLinks });
  }

  function clearField(idx) {
    const newLinks = [...state.links];
    newLinks.splice(idx, 1);
    setForm({ ...state, links: newLinks });
  }
  //Component
  const Links = state.links.map((item, index) => (
    <div className="links-item" key={index}>
      <input
        type="text"
        onChange={(e) => onChangeLink(e.target.value, index)}
        value={item}
        placeholder="http://..."
      />
      {state.links.length > 1 && (
        <button
          className="btn btn-clear-field"
          onClick={() => clearField(index)}
          type="button"
        >
          <img src={remove} alt="-" />
        </button>
      )}
    </div>
  ));

  return (
    <>
      <h4>Links </h4>
      {Links}
      {state.links.length < 5 && (
        <button className="btn btn-add-field" onClick={addLink} type="button">
          <h4> Add a slot ( max 5 )</h4>
        </button>
      )}
    </>
  );
}
