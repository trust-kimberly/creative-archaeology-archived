import React, { useState } from "react"
import Dropdown from "./dropdown";

const Landing = () => {

  const [show, toggleShow] = useState(false)

  function toggleDropdown() {
    toggleShow(!show);
  }

  return (
    <>
      <header>
        <h1>Creative Archaeology</h1>
      </header>
      <section>
        <p>An installation wherein you are invited to excavate a sculptured archeological dig site. Buried within the site, are an untold number of sculptures waiting to be discovered and claimed.</p>
        <p>You are permitted to claim ownership of any sculpture you discover. Some, but not all, are embedded with chips programmed to point to the sculpture’s token of authenticity — which is created, distributed, and stored on-chain on the Ethereum blockchain. The token certifies not only the authenticity of the sculpture but also validates any claim to its ownership because the token is a part of the sculpture.</p>
        <p>The installation is intended to simulate conditions from  which archeological looting emerges. Outcomes will emphasize the significance of establishing provenance and illustrate the compatibility of . The token exists to exercise the artist’s authority to certify authenticity of artwork using contemporary technological opportunities.</p>
        <p>FWB FEST 2022 is the first staging of Creative Archaeology, scans and documentation of the buried sculptures are accessible below.</p>
      </section>
      <section>
        <h3>
          <span className={show ? "rotate" : "" } style={{color: "blue"}}>{'>'}</span>
          <span>{' '}</span>
          <a
            onClick={() => toggleDropdown()}
            className={show ? "active" : "" }
          >
            FWB FEST 22
          </a>
        </h3>
        <div style={show ? { display: "grid" } : { display: "none" }}>
          <Dropdown title="FWB Tablet" model="25c1834575124c3492c4aeec01a5e56f" />
          <Dropdown title="Copy of Michelangelo’s David’s Ear With AirPod™️" model="d65146b1338d45ed82b9cae4dfdea496" />
          <Dropdown title="Black Face White Stone" model="a38c30d72054424fb4244a0e39a677f0" />
          <Dropdown title="Face 55:1000 (Noseless Michael Jackson With Skin Condition)" model="b3cf8dbdd0264a78940fa2247fe4c51c" />
          <Dropdown title="Face 1:1000 (Mother)" model="df5c31b028e34d9f9fcd60f2f6a6682b" />
          <Dropdown title="⛈" model="3a094e80f28a4f4391aa729642afdfca" />
          <Dropdown title="🕊" model="10503f815a274f78a5f7644dd7eb6c42" />
        </div>
      </section>
    </>
  )
}

export default Landing