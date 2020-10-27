// src/components/main.tsx
import React, { CSSProperties } from "react";
import Gallery from "react-grid-gallery";
import { photos } from "./photos";

import './photogallery.scss'

const captionStyle: CSSProperties = {
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  height: "100%",
  color: "white",
};

const images = photos.map((i) => ({
  ...i,
  customOverlay: (
    <div style={captionStyle}>
      <div style={{height:'100%', display:'flex'}}>
        <p style={{textAlign:'center', margin:'auto'}}>
          <h4 >{i.caption}</h4>
          {i.des}
        </p>
      </div>
    </div>
  )
}))

export const PhotoGallery = () => (
  <div className="realisations-photogallery-section">
    <div className="realisations-photogallery-text">
      <div className="realisations-photogallery-text-title"><span>Nos réalisations</span></div>
      <div className="realisations-photogallery-text-text"><span>Découvrez quelques unes des réalisations de Store Led</span></div>
    </div>
    <div className="realisations-photogallery-gallery">
      <Gallery images={images} margin={'8px'} rowHeight={'240px'} enableImageSelection={false}/>
    </div>
  </div>
);
