import React, { useState } from "react"
import Dropdown from "./dropdown";

const Landing = () => {

  const [show, toggleShow] = useState(false)

  function toggleDropdown() {
    toggleShow(!show);
    console.log(show);
  }

  return (
    <>
      <section>
        <h1>Creative Archaeology</h1>
        <p>Creative archeology is an installation wherein viewers are invited to excavate a sculptured archeological dig site. Buried within the site, are an untold number of sculptures waiting to be discovered and claimed.</p>
        <p>Viewers are permitted to claim ownership of any sculpture they discover. Some, but not all, are embedded with chips programmed to point to the sculpture’s token of authenticity — which is created and distributed on the Ethereum blockchain. The token certifies not only the authenticity of the sculpture but also the validity of any claim of ownership.</p>
        <p>The installation is intended to simulate conditions from  which archeological looting emerges. This practice of archeology looting and archeological looting,</p>
      </section>
      <section>
        <h2><a onClick={() => toggleDropdown()} style={show ? { color: "blue" } : { color: "inherit" }} >FWB FEST</a></h2>
        <div style={show ? { display: "grid" } : { display: "none" }}>
          <Dropdown title="FWB Tablet" model="25c1834575124c3492c4aeec01a5e56f" />
          <Dropdown title="Copy of Michelangelo’s David’s Ear With AirPod™️" model="d65146b1338d45ed82b9cae4dfdea496" />
          <Dropdown title="Black Face White Stone" model="a38c30d72054424fb4244a0e39a677f0" />
          <Dropdown title="Face 55:1000 (Michael Jackson)" model="b3cf8dbdd0264a78940fa2247fe4c51c" />
          <Dropdown title="Face 1:1000 (Mother)" model="df5c31b028e34d9f9fcd60f2f6a6682b" />
          <Dropdown title="⛈" model="3a094e80f28a4f4391aa729642afdfca" />
          <Dropdown title="🕊" model="10503f815a274f78a5f7644dd7eb6c42" />
        </div>
      </section>
    </>
  )
}

export default Landing