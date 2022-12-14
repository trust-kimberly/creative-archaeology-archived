import React, { useState } from "react"

const Dropdown = ({ title, model, mobile }) => {

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
        {/* Desktop Embed */}
        <div className="sketchfab-embed-wrapper desktop">
          <iframe 
            style={{ height: "60vh", width: "92vw" }} 
            title={title} 
            frameBorder="0" 
            allowFullScreen
            mozallowfullscreen="true" 
            webkitallowfullscreen="true" 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking 
            execution-while-out-of-viewport 
            execution-while-not-rendered 
            web-share
            src={"https://sketchfab.com/models/" + model + "/embed?preload=1&autostart=1&autospin=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_loading=0"}
          > </iframe>
        </div>
        {/* Mobile Embed */}
        <div className="sketchfab-embed-wrapper mobile">
          <iframe 
            style={{ height: "60vh", width: "92vw" }} 
            title={title}
            frameBorder="0" 
            allowFullScreen
            mozallowfullscreen="true" 
            webkitallowfullscreen="true" 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking 
            execution-while-out-of-viewport 
            execution-while-not-rendered 
            web-share
            src={"https://sketchfab.com/models/" + mobile + "/embed?preload=1&autostart=1&autospin=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_loading=0"}
          > </iframe>
        </div>
      </div>
    </>
  )
}

export default Dropdown