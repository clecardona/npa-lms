import reactDom from "react-dom";
import cross from "assets/icns/cross.png";
import CreateForm from "components/CreateForm";
import EditForm from "components/EditForm";
import EditProfile from "components/EditProfile";
import EditPlaylist from "./EditPlaylist";

export default function Modal({ isOpen, onClose, data, children, type }) {
  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <div className="modal-header">
          <h2>{children}</h2>
          <button className="btn-close" onClick={onClose}>
            <img alt="close" src={cross} />
          </button>
        </div>
        {type === "create" && <CreateForm onClose={onClose} />}
        {type === "edit" && <EditForm onClose={onClose} data={data} />}
        {type === "edit-profile" && (
          <EditProfile onClose={onClose} data={data} />
        )}
        {type === "edit-playlist" && (
          <EditPlaylist onClose={onClose} data={data} />
        )}
      </div>
    </>,
    document.getElementById("modal")
  );
}
