import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';


function SearchComponent() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [searchSteps, setSearchSteps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "strings"), orderBy("content"));
      const querySnapshot = await getDocs(q);
      const dataArray = querySnapshot.docs.map(doc => doc.data().content.trim().toLowerCase());
      setData(dataArray);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchSteps([]);
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const result = binarySearch(data, normalizedSearchTerm);
    setSearchResult(result.message);
  };



 // Binary search algorithm
 // Explanation: 
 // ------------------------------------------------------------------

  function binarySearch(arr, x) {
    let steps = [];
    let start = 0, end = arr.length - 1;

    while (start <= end) {
      // Calculate the midpoint
      // Math.floor() is used to round down to the nearest whole number
      // This is necessary because the midpoint must be an integer
      // If the array has an odd number of elements, the midpoint will be the middle element
      // If the array has an even number of elements, the midpoint will be the lower of the two middle elements
      let mid = Math.floor((start + end) / 2);
      steps.push({ start, end, mid, currentElement: arr[mid] });

      // Check if the midpoint element is equal to the search term
        // If it is, return the index of the element
      if (arr[mid] === x) {
        setSearchSteps(steps);
        return { found: true, message: `Found '${x}' at index ${mid}` };
      }
      // If the midpoint element is less than the search term, search the right half of the array
      else if (arr[mid] < x) {
        start = mid + 1;
      }
      // If the midpoint element is greater than the search term, search the left half of the array
      else {
        end = mid - 1;
      }
    }
    // If the search term is not found in the array, return an error message
    setSearchSteps(steps); // Set the search steps for display
    // Return an object with the 'found' property set to false and an error message
    return { found: false, message: `'${x}' not found` };
  }

 // ------------------------------------------------------------------
 // end of binary search algorithm




  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a string"
        />
        <button type="submit">Search for a String</button>
      </form>
      <p>Search Result: {searchResult}</p>
      <div>
        {searchSteps.map((step, index) => (
          <div key={index}>
            <p>Step {index + 1}: Look from index {step.start} to {step.end}, midpoint at index {step.mid} ('{data[step.mid]}')</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchComponent;
