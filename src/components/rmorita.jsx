import React from "react";
import {ResponsiveEmbed, Image} from "react-bootstrap";
import '../assets/css/App.css'

export const Rmorita = () => {
  return (
    <>
      <ResponsiveEmbed>
        <Image src = {require("../assets/img/r-morita.svg")} />
      </ResponsiveEmbed>
    </>
  );
}