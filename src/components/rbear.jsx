import React from "react";
import {ResponsiveEmbed, Image} from "react-bootstrap";
import '../assets/css/slider.css'

export const Rbear = () => {
  return (
    <>
      <ResponsiveEmbed>
        <Image src = {require("../assets/img/r-osito.svg")}/>
      </ResponsiveEmbed>
    </>
  );
}