import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const myInput = useRef(null);
  const [todoList, setTodoList] = useState([]);

  const AddToList = () => { 
    const newItem = myInput.current.value;
    if (newItem.trim() !== '') {
      setTodoList(prevList => [...prevList, newItem]);
      myInput.current.value = ''; // Clear input after adding item
    }
  };
  
  return (
    <>
      <div>
        <div>
          <input type="text" ref={myInput}/>
          <button onClick={AddToList}>Add</button>
        </div>
        <div>
          {todoList.length > 0 ? (
            <ul>
              {todoList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <h6>Nothing to show here</h6>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
