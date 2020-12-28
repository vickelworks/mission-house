import { useEffect } from "react";
import Text from "../Text";
// import BackgroundSlider from 'react-background-slider';
import styled, { keyframes } from "styled-components";
import Home from "../Icons/Home";
import useHandleScroll from "../../hooks/useHandleScroll"
import '../../App.css';

const bgSlider = keyframes`
  from {
    background: -webkit-linear-gradient( rgba(0,0,0,.3), rgba(0,0,0,.8)),url("/hotr-mission-house.png") no-repeat;
    background-size:100% 100%;
  }
  70% {
    background: -webkit-linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.8)),url("/hotr-1.jpg") no-repeat;
    background-size:cover;
  }
  to {
    background: -webkit-linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.8)),url("/pst-paul.jpg") no-repeat;
    background-size:cover;
  }
`;
const hotr = keyframes`
  from{
    opacity:0;
    transform:translateX(-20%);
  }
  to{
    opacity:.25;
    transform:translateX(0%);
  }
`

const BackToTopAnim = keyframes`
from{
  transform:translateY(100%);
  opacity:0;
}
50%{
  transform:translateY(100%);
  opacity:0;
}
to{
  transform:translateY(0%);
  opacity:1;
}
`
const Header = styled(({ className }) => {
  const { scrolled, handleScroll } = useHandleScroll();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  return (
    <div className={className} id="top">
      {/* <Text size="4" align="left" color="white">WELCOME TO</Text>
      <Text className="hotr" size="5" weight="bolder" align="left" color="white">HOUSE ON <br /> THE ROCK KADUNA</Text> */}
      <Text className="mission-house" size="3" color="white" >THE MISSION HOUSE</Text>
      {scrolled && <a href="#top" className="backToTop"><Home color="#8AC23D" size="20" /></a>}
    </div>
  )
})`
scroll-behavior:smooth;
animation:${bgSlider} 15s ease-out infinite;
background-repeat: no-repeat;
background-size:cover;
min-height: 100vh;
padding-left:30px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
position:relative;

.hotr {opacity:.25; animation:${hotr} 1.5s;}
.mission-house {
  position: absolute; bottom:0; left:0;
  display:flex;
  justify-content:center;
  margin-bottom:10px;
  width:100%;
  text-align:center;
  letter-spacing:2em;
  word-spacing:3em;
  opacity:.7;
}


.backToTop {
  z-index:9;
  position:fixed; bottom:20px; right:1em;
  animation:${BackToTopAnim} 1s ease ;
}

@media (max-width: 600px){
  min-height: 70vh;
  .mission-house {
    font-size:1em;
     letter-spacing:.5em;
  word-spacing:.05em;
  }
}


`

export default Header;