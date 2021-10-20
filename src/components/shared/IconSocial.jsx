import React from "react";

export default function IconSocial({ icon, link }) {
  return (
    <li>
      <a href={link} target="blank">
        <img alt="icn" src={icon} />
      </a>
    </li>
  );
}
