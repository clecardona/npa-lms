//NPM Packages
import reactDom from "react-dom";

//Local Files
import cross from "assets/icns/cross.png";
import CreateForm from "components/UserPage/forms/CreateForm";
import EditForm from "components/UserPage/forms/EditForm";
import EditProfile from "components/ProfilePage/EditProfile";
import EditPlaylist from "components/CoursePage/form/EditPlaylist";

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
        <div className="container">
          {type === "create" && <CreateForm onClose={onClose} />}
          {type === "edit" && <EditForm onClose={onClose} data={data} />}
          {type === "edit-profile" && (
            <EditProfile onClose={onClose} data={data} />
          )}
          {type === "edit-playlist" && (
            <EditPlaylist onClose={onClose} data={data} />
          )}
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
