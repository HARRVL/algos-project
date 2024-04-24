import React, { useState } from 'react';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


function AddStringForm() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');  // State to store user feedback messages

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');  // Clear previous messages
    if (input.trim() !== '') {
      try {
        await addDoc(collection(db, 'strings'), {
          content: input,
          timestamp: serverTimestamp()
        });
        setInput('');  // Clear the input after successful submission
        setMessage('String added successfully!');  // Success message
      } catch (error) {
        console.error("Error adding document: ", error);
        setMessage('Failed to add string. Please try again.');  // Error message
      }
    } else {
      setMessage('Please enter a string to add.');  // Validation message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a string"
        />
        <button type="submit">Add a String</button>
      </form>
      {message && <p>{message}</p>}  {/* Display feedback messages */}
    </div>
  );
}

export default AddStringForm;
