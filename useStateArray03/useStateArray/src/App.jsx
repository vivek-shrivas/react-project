import { useState, useRef, useEffect } from "react";

function App() {
  const [arr, setArr] = useState([]);

  const myRef = useRef();

  const addItem = (name) => {
    if (name === "") {
      alert("Please enter a name");
      return;
    }
    setArr([
      ...arr,
      {
        id: arr.length,
        name: name,
      },
    ]);
    myRef.current.value = "";
  };

  const removeItem = (name) => {
    setArr(arr.filter((item) => item.name != name));
  };
  useEffect(() => {
    fetch("/api")
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse the JSON data from the response
        return response.json();
      })
      .then((data) => {
        // Handle the JSON data here
        console.log(data.message);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <>
      <h3>Add an item to display</h3>
      <input type="text" ref={myRef} />
      <button onClick={() => addItem(myRef.current.value)}>Add Item</button>
      <button onClick={() => removeItem(myRef.current.value)}>
        Remove Item
      </button>
      <ul>
        {arr.length > 0 ? (
          arr.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </>
  );
}

export default App;
