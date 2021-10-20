import React from "react";

import IconSocial from "./IconSocial";
import iconsData from "assets/footer/icons.json";
import contactData from "assets/footer/contact.json";

export default function Footer() {
  const contact = contactData[0];
  const icons = iconsData[0];

  return (
    <footer>
      <ul>
        <IconSocial icon={icons.linkedInURL} link={contact.linkedIn} />
        <IconSocial icon={icons.githubURL} link={contact.github} />
      </ul>
      <span>© 2021 • {contact.fullname}</span>
    </footer>
  );
}
