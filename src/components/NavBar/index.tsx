import React, { useState, useEffect } from "react";
import { A } from "../Button";
import styled, { keyframes } from "styled-components";
import Home from "../Icons/Home";
import Media from "../Icons/Media";
import Location from "../Icons/Location";
import Money from "../Icons/Money";
import Menu from "../Menu";
import useHandleScroll from "../../hooks/useHandleScroll"
import { Link, withRouter } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <WebNav />
      <MobileNav />
    </>
  )
}
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

const mobileNavAnim = keyframes`
  from{
    opacity:0;
    transform:translateY(100px);
  }
  50%{
    opacity:0;
    transform:translateY(50px);
  }
  51%{
    opacity:1;
    transform:translateY(50px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
`


const WebNav = styled(({ className }) => {
  const { scrolled, handleScroll } = useHandleScroll();

  const NavClass: any = [];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  scrolled ? NavClass.push("nav-scroll") : NavClass.pop();

  return (
    <div className={className} id="nav">
      <div className={`nav-class ${NavClass.join(" ")}`}>
        <img className="logo" src="/hotr-logo.png" alt="logo" />
        <div className={`menu`}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <A className="nav normal" href="#"><Home />Home</A>
          </Link>
          <Link to="/pages/sermons" style={{ textDecoration: 'none' }}>
            <A className="nav normal" href="#"><Media />Media</A>
          </Link>
          <Link to="/pages/locate" style={{ textDecoration: 'none' }}>
            <A className="nav normal" href="#"><Location size="15" />Locate us</A>
          </Link>
          <Link to="#" style={{ textDecoration: 'none' }}>
            <A className="nav" href="#" size="2" active><Money />Give</A>
          </Link>
        </div>
      </div>

    </div>
  );
}
)`
  z-index:999999;
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
  
  .nav {
    color:#fff;
    text-shadow:0 0 3px #333;
    margin-right:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1em;
  }
  .nav:visited {text-decoration:none;}
  .normal {
    background: ${({ theme }) => theme.colors.default};
    text-decoration:none;
  }

  .nav:hover  {
    background-color:rgba(255,255,255,1);
    color:${({ theme }) => theme.colors.primary}; 
    text-shadow:none;
    }

  .nav > *  {
    filter:drop-shadow(0 0 1px ${({ theme }) => theme.colors.primary});
    }
  .nav:hover > *  {
    filter:drop-shadow(0 0 0 transparent);
    }
  // .menu > ${A}:hover > *  {
  //   fill:${({ theme }) => theme.colors.primary};
  //   filter:none;
  //   }

`

const MobileNav = styled(({ className }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // if (isVisible) {
  //   window.addEventListener("click", () => setIsVisible(false))
  // }
  return (
    <>
      <div className={className}>
        <div className="mobileNavHeader">
          <div className="mobileNavHeadercontent">
            <div><img src="/hotr-logo-mobile.png" alt="logo" /></div>
            <div onClick={() => setIsVisible(!isVisible)}><Menu show={isVisible} /></div>
          </div>
        </div>
        <div className={`mobileNav ${isVisible && "showMobileNav"} `}>
          <div className={`mobilemenu`}>
            <Link onClick={() => setIsVisible(false)} to="/" style={{ textDecoration: 'none' }}>
              <A className="mobNav" href="#"><Home />Home</A>
            </Link>
            <Link onClick={() => setIsVisible(false)} to="/pages/sermons" style={{ textDecoration: 'none' }}>
              <A className="mobNav" href="#"><Media />Media</A>
            </Link>
            <Link onClick={() => setIsVisible(false)} to="/pages/locate" style={{ textDecoration: 'none' }}>
              <A className="mobNav" href="#"><Location size="15" />Locate us</A>
            </Link>
            <Link onClick={() => setIsVisible(false)} to="#" style={{ textDecoration: 'none' }}>
              <A className="mobNav" href="#" size="2" active><Money />Give</A>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
})`

display:none;
width:100%;
text-align:center;
color: ${({ theme }) => theme.colors.white};
position:fixed; top:0; left:0;
display:none;
@media (max-width: 600px){
  display:block;
}
.mobileNavHeader {
  background:rgba(0,0,0,.5);
  width:100%;
  position:fixed;
  z-index:11111;
 
}
.mobileNavHeadercontent{
  width:90%;
  padding:10px 5px;
  margin:0 auto;
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  align-items:center;
  
}
.mobileNav {
  position:absolute; top:0; left:0;
  display:none;
  background: rgba(0,0,0,.8);
  height:100vh;
  width:100%;
  transition: .5s linear all;
}
.showMobileNav{
  display:block;
  
}
.mobilemenu {
  position:absolute; bottom:0;
  border-radius:20px 20px 0 0;
  background: ${({ theme }) => theme.colors.primary};
  height:60vh;
  width:100%;
  margin:auto;
  padding:50px auto;
  display:flex;
  flex-flow:column wrap;
  justify-content:center;  
  align-items:center;
  color:#fff;
  animation: ${mobileNavAnim} .35s;

}
.mobNav {
  color: ${({ theme }) => theme.colors.white};
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.2em;
  margin-bottom:50px;

}
`

export default NavBar;