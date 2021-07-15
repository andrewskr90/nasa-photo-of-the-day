import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Post from './Components/Post'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=SKSXmRlaTuHqV8cdxZlESwq5S8ayxdK1CyXHIPdt')
    .then(res => {
      // console.log(res.data)
      setData(res.data)
    })
    .catch(err => console.log(err))
    .finally(() => console.log('done'))
  }, [])
  console.log(data)
  return (
    <div className="App">
      <div className="post-container">
        <Post data={data} />
          
      </div>
      

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
