import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  const defaultContact = { name: "Select Contact", phone: "555-555-5555", email: "contact@example.com" };

  return (
    <select onChange={onChange}>
      <option defaultValue key="-1">{defaultContact.name}</option>
      {contacts.map((contact, index) => <option key={index}>{contact.name}</option>)}
    </select>
  );
};
