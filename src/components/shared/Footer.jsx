// react is not neccesary to import...
import React from "react";

import IconSocial from "./IconSocial";
// Not an error, but this could be fused as just contact data and each item is like this:
import iconsData from "assets/footer/icons.json";
import contactData from "assets/footer/contact.json";

const data = {
  linkedIn: {
    icon: "some-icon",
    link: "www.google.com",
  },
};

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
