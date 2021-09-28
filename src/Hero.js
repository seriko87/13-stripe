import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return <section onMouseOver={closeSubmenu} className='hero-center'></section>;
};

export default Hero;
