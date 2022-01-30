import { useState, useEffect } from "react";

// components
import Activity from "./Components/Activity";

// styles
import './App.css';

function App() {
// storing data
const [idea, setIdea] = useState([]);
const [url, setUrl] = useState("https://boredapi.com/api/activity/");
const [newFetch, setNewFetch] = useState(false);

useEffect(() => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => setIdea(json));
}, [url, newFetch]);

const handleClick = (y) => {
  setUrl("https://boredapi.com/api/activity" + y);
  setNewFetch(!newFetch);
};

return (
  <div className="App">
    <h1>Activity generator</h1>
    <Activity {...idea} />
    <h2>Click on any button below to generate a new activity</h2>
    <button onClick={() => { handleClick("?participants") }}>any amount of people</button>
    <button onClick={() => { handleClick("?participants=1") }}>1 person</button>
    <button onClick={() => { handleClick("?participants=2") }}>2 people</button>
    <button onClick={() => { handleClick("?participants=4") }}>4 people</button>
  </div>
  );
}

export default App;
