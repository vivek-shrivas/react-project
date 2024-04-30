import React, { useState, useRef } from 'react';
import './App.css';
import { set } from 'firebase/database';

function App() {
  const myInput = useRef(null);
  const myList = useRef(null);
  const [todoList, setTodoList] = useState([]);
  const [removeList, setRemoveList] = useState([]);

  const AddToList = () => { 
    const newItem = myInput.current.value;
    if (newItem.trim() !== '') {
      setTodoList(prevList => [...prevList, newItem]);
      myInput.current.value = ''; 
    }
  };

  const AddToRemoveList = (index) => {
    if(!removeList.includes(index)){
    setRemoveList((prevList) => {
      const newlist = prevList.concat(index)
      console.log(newlist);
      return newlist;
    })
  }
  };

  const RemoveFromList = () => {
    setTodoList(prevList => {
      // Filter out items at indexes stored in removeList
      const newList = prevList.filter((item, index) => {
        return !removeList.includes(index); // Keep the item if index is not in removeList
      });
  
      // Update removeList to remove indexes of removed items
      setRemoveList(prevRemoveList => {
        return prevRemoveList.filter(index => index < newList.length);
      });
  
      return newList;
    });
  };
  
  
  
  return (
    <>
      <div className='outer-contaier'>
        <div className='input-container'>
          <input className='input-list' type="text" ref={myInput}/>
          <button onClick={AddToList}>Add</button>
        </div>
        <div>
          {todoList.length > 0 ? (
            <ul className='list-container'>
              {todoList.map((item, index) => (
                <>
                <div key={index} className='li-cnt'>
                  <input type='checkbox' value={index} ref={myList} onClick={() => AddToRemoveList(index)} />
                  <li>{index + 1}</li>
                  <li>{item}</li>
                </div>
                  </>
              ))}
               <button onClick={RemoveFromList}>remove</button>
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
