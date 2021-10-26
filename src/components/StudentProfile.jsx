//NPM Packages
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useUsers } from "state/UsersProvider";
import { getById } from "scripts/methods";
import useFetch from "hooks/useFetch";
import Spinner from "./shared/Spinner";
import BoxError from "./shared/BoxError";
import twitter from "assets/icns/twitter.png";
import instagram from "assets/icns/instagram.png";
import { useAuth } from "state/AuthProvider";
import Modal from "./shared/Modal";

export default function StudentProfile() {
  //Global state
  const { user } = useAuth();
  const { dispatchUsers } = useUsers();
  const users = useFetch("users", dispatchUsers);
  //Local state
  const { userID } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const profile = getById(userID, users.data);
  const urlIG = "https://www.instagram.com/";
  const urlTW = "https://www.twitter.com/";
  return (
    <>
      {users.loading === true && <Spinner />}
      {users.error !== null && <BoxError />}
      {(!users.loading && users.error) === null && (
        <main className="page-profile">
          <div className="container">
            <div className="avatar">
              <img src={profile.avatarURL} alt="img" />
            </div>
            <div className="description">
              <p>{profile.description}</p>
            </div>

            <div className="box">
              <h1>
                {profile.firstname} {profile.lastname}
              </h1>
              <h2>{profile.username}</h2>
              {profile.instagram && (
                <a
                  href={`${urlIG}${profile.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <img src={instagram} alt="" />@{profile.instagram}
                  </h4>
                </a>
              )}
              {profile.twitter && (
                <a
                  href={`${urlTW}${profile.twitter}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4>
                    <img src={twitter} alt="" />@{profile.twitter}
                  </h4>
                </a>
              )}
            </div>

            <div className="buttons">
              <Link to="/" className="btn btn-main btn-180">
                <h4>Back to courses</h4>
              </Link>

              {profile.id === user.id && (
                <>
                  <button
                    className="btn btn-ghost btn-180"
                    onClick={() => setIsOpen(true)}
                  >
                    Edit Profile
                  </button>
                  <Modal
                    type="edit-profile"
                    data={profile}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                  >
                    Edit profile
                  </Modal>
                </>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
