import React from 'react';

const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handlePhoneChange = ({ target }) => {
    setPhone(target.value);
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
        style={{ width: '50%' }}
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="Phone number (standard 10 digit format)"
        style={{ width: '50%' }}
        pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$"
        required
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        style={{ width: '50%' }}
        required
      />
      <input
        type="submit"
        value="Add"
        style={{ width: '12.5%', cursor: 'pointer' }}
      />
    </form>
  );
};

export default ContactForm
