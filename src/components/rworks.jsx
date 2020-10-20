import React from "react";
import {ResponsiveEmbed, Image} from "react-bootstrap";
import '../assets/css/App.css'

export const Rworks = () => {
  return (
    <>
      <ResponsiveEmbed>
        <Image src = {require("../assets/img/r-works.svg")} className = "rest-img"/>
      </ResponsiveEmbed>
    </>
  );
}