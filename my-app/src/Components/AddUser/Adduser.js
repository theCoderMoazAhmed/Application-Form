import React, { useState } from 'react';

const Adduser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [id, setId] = useState(0); // Initialize id state

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/adduser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          email,
          note,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(responseData);
      // You can add further handling after successful submission, like showing a success message or redirecting the user.

      // Clear input fields after successful submission
      setName('');
      setEmail('');
      setNote('');
      setId(id + 1); // Increment id for the next user
    } catch (error) {
      console.error('Error:', error);
      // Handle error, like showing an error message to the user.
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Note:</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Adduser;