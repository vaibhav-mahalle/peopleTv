import { Fade } from "react-slideshow-image";
import React from "react";
import "./HomeBanner";
import "react-slideshow-image/dist/styles.css";
import HomeImg1 from "../../assets/HomeImg1.jpg";
import HomeImg2 from "../../assets/HomeImg2.jpg";
import HomeImg3 from "../../assets/HomeImg3.jpg";
import HomeImg4 from "../../assets/HomeImg4.png";
import HomeImg5 from "../../assets/HomeImg5.jpg";

function HomeBanner() {
  const properties = {
    duration: 1500,
    transitionDuration: 1000,
    easing: 'ease',
  }

  const FadingImg = [HomeImg1,HomeImg2,HomeImg3,HomeImg4,HomeImg5];
  return (
    <div className="hero-container">
    <Fade {...properties}>
    {FadingImg.map((fadeImg,index) => (<div className="hero-container" key={index}>
      <img src={fadeImg} className="hero resp-img" />
    </div>))}
    </Fade>
    </div>
  )
}

export {HomeBanner}