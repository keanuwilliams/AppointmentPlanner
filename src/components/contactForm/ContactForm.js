import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="tel"
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number (ex. 555-555-5555)"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address (ex. johndoe@example.com)"
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
};
