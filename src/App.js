import React from 'react';
import AddStringForm from './AddStringForm';
import SearchComponent from './SearchComponent';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <h1>String Storage and Search</h1>
      <h2>Binary Search Algorithm</h2>
      <h3>by Hector Reyes and Nick Spieker</h3>
      <AddStringForm />
      <SearchComponent />
    </div>
  );
}

export default App;