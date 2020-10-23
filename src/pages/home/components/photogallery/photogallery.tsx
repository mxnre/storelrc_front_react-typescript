// src/components/main.tsx
import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

import './photogallery.scss'

export const PhotoGallery = () => {
return (
  <div className="home-photogallery-section">
    <div className="home-photogallery-text">
      <div className="home-photogallery-text-title"><span >Découvrez un aperçu de nos réalisations</span></div>
      <div className="home-photogallery-text-text"><span>Un savoir-faire acquis grâce à de nombreuses années d'expérience</span></div>
    </div>
    <div className="home-photogallery-gallery">
      <Gallery photos={photos} margin={6}/>
    </div>
  </div>
 );
};