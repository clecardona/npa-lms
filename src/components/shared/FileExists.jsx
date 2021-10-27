import ButtonField from "./ButtonField";
import remove from "assets/icns/remove.png";

export default function FileExists({ action, state, index }) {
  return (
    <div className="exists">
      <label>
        <p>- {state.name}</p>
      </label>
      <ButtonField action={action} index={index} icn={remove} />
    </div>
  );
}
