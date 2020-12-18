import React, { useEffect } from "react";
import { A } from "../Button";
import styled, { keyframes } from "styled-components";
import Home from "../Icons/Home";
import Events from "../Icons/Events";
import Location from "../Icons/Location";
import Money from "../Icons/Money";
import useHandleScroll from "../../hooks/useHandleScroll"

const navAnim = keyframes`
from{
  transform:translateY(-100%);
  opacity:0.5;
}
to{
  transform:translateY(0%);
  opacity:1;
}
`


const NavBar = styled(({ className }) => {
  const { scrolled, handleScroll } = useHandleScroll();

  const NavClass: any = [];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  scrolled ? NavClass.push("nav-scroll") : NavClass.pop();

  return (
    <div className={className} id="nav">
      <div className={`nav-class ${NavClass.join(" ")}`}>
        <img className="logo" src="mission-house/hotr-logo.png" alt="logo" />
        <div className={`menu`}>
          <A className="nav" href="#"><Home />Home</A>
          <A className="nav" href="#"><Events />Events</A>
          <A className="nav" href="#"><Location size="15" />Locate us</A>
          <A href="#" size="2" active><Money />Give</A>
        </div>
      </div>

    </div>
  );
}
)`
  z-index:5000;
  @media (max-width: 600px){
    display:none;
  }
  .nav-class {
    position:absolute; top:0; right:0;
    background : rgba(255,255,255,.1);
    width:100%;
    height:80px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  }
  .nav-scroll {
    position:fixed; top:0; right:0;
    background: rgba(255,255,255,.5);
    box-shadow: 0 3px 10px #333;
    animation:${navAnim} .5s ease alternate;
  }
  .logo {
    padding-left:30px;
    filter:drop-shadow(0 0 1px #777);
  }
  .menu {display:flex;
    flex-direction:row;
    justify-content:space-between;}
  
  .menu > ${A} {
    margin-right:30px;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .nav {
    background:${({ theme }) => theme.colors.default};
    color:#fff;
    text-shadow:0 0 3px #333;
  }
  .menu > ${A}:hover  {
    background-color:rgba(255,255,255,1);
    color:${({ theme }) => theme.colors.primary}; 
    text-shadow:none;
    }

  .menu > ${A} > *  {
    fill:${({ theme }) => theme.colors.white};
    filter:drop-shadow(0 0 1px ${({ theme }) => theme.colors.primary});
    }
  .menu > ${A}:hover > *  {
    fill:${({ theme }) => theme.colors.primary};
    filter:none;
    }

`

export default NavBar;