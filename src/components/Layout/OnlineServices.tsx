import styled from "styled-components";
import Card from "../Card";
import { Link } from "react-router-dom";

const OnlineServices = styled(({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="card">
          <Link to="/pages/sermons" style={{ textDecoration: "none" }}>
            <Card color="white" src="mission-house/pst3.jpg" alt="" label="Listen to Sermon" />
          </Link>
          <Card color="white" src="mission-house/hotr-img2.jpg" alt="" label="worship warfare" />
          <Card color="white" src="mission-house/hotr-img.jpg" alt="" label="PUSH" />
          <Card color="white" src="mission-house/hotr-7.jpg" alt="" label="LOVE" />
        </div>
      </div>
    </>
  )
})`
  width:100%;
  padding:100px 0px;
  .card {
    width:80%;
    margin:0 auto;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-around;
  }
  .card ${Card}:hover {
    transform:translateY(-5px);
    box-shadow:0 2px 5px #555;
  }
  

`

export default OnlineServices;