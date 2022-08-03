import React, { useState } from "react"

const Dropdown = ({ title, model }) => {

  const [show, toggleShow] = useState(false)

  function toggleDropdown() {
    toggleShow(!show);
  }

  return (
    <>
      <span>
        <span className={show ? "rotate" : "" } style={{color: "blue"}}>{'>'}</span>
        <span>{' '}</span>
        <a
          onClick={() => toggleDropdown()}
          className={show ? "active" : "" }
        >
          {title}
        </a>
      </span>
      <div style={show ? { display: "block", margin: "2vh 0" } : { display: "none" }}>
        <div className="sketchfab-embed-wrapper">
          <iframe style={{ height: "60vh", width: "92vw" }} title="🕊" frameBorder="0" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true"
            src={"https://sketchfab.com/models/" + model + "/embed?preload=1&autostart=1&autospin=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_loading=0"}> </iframe>
        </div>
      </div>
    </>
  )
}

export default Dropdown