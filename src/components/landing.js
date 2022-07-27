import React, { useState } from "react"

const Landing = () => {

  const [expand, toggleExpand] = useState(false)

  function toggleDropdown() {
    return console.log('hello');
  }

  return (
    <>
      <h1>Creative Archaeology</h1>
      <p>Body description</p>
      <ul>
        <li><button onClick={() => toggleDropdown()}>Friends With Benefits Fest</button></li>
      </ul>
    </>
  )
}

export default Landing