import React, { useEffect, useState } from "react";
// import "../styles/Body.css";


function Body() {
  const [data, setData] = useState([])
  const [inputData, setInputData] = useState("")

  async function getData() {
    const res = await fetch("/api/items");
    const response = await res.json();
    setData(response)
  }

  async function fetchPost(url, data) {
    const res = await fetch(
      url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
  }

  useEffect(() => {
    getData();
  }, [])

  function handleClick() {
    const res = fetchPost("/api/items", {name: inputData})
    console.log(res)
    setInputData("");
    getData();
  }

  function handleChange(e) {
    setInputData(e.target.value)
  }

  const displayData = data.map(item => (
    <li key={item._id}>{item.name}</li>
  ))

  return(
    <>
      <ul>
        {displayData}
      </ul>
      <input type="text" value={inputData} onChange={handleChange}/>
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default Body;