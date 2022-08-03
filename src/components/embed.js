import * as React from "react"
import "../styles/index.scss";

const Embed = ({ title, model }) => {
  return (
    <>
      <h3>
        <a
          className="margins"
          style={{ position: "absolute", bottom: "0", textAlign: "center", width: "92vw" }}
          href={"mailto:hamzatraheem@icloud.com?subject=" + title + " Token of Authenticity Request&body=Wallet address:"}
        >
          Request Token of Authenticity
        </a>
      </h3>
      <div className="sketchfab-embed-wrapper">
        <iframe style={{ height: "100vh", width: "100vw" }} title={title} frameBorder="0" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="true" execution-while-out-of-viewport="true" execution-while-not-rendered="true" web-share="true" src={"https://sketchfab.com/models/" + model + "/embed?preload=1&autostart=1&autospin=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_loading=0"}> </iframe>
      </div>
    </>
  )
}

export default Embed