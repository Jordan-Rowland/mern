import React, { useEffect, useState } from "react";
// import "../styles/Body.css";


function Body() {
  const [data, setData] = useState([])

  async function getData() {
    const res = await fetch("/api/items");
    const response = await res.json();
    setData(response)
  }

  useEffect(() => {
    getData();
  }, [])

  const displayData = data.map(item => (
    <li key={item._id}>{item.name}</li>
  ))

  return(
    <>
      <ul>
        {displayData}
      </ul>
    </>
  );
}

export default Body;