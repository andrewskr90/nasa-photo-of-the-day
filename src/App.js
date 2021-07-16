import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Post from './Components/Post'

export default function App() {
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
  
  return (
    <div className="App">
      <div className="post-container">
        <Post data={data} />
      </div>
    </div>
  );
}
