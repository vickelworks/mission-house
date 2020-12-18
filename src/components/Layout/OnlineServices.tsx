import styled from "styled-components";
import Card from "../Card";

const OnlineServices = styled(({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="card">
          <Card color="white" src="mission-house/pst3.jpg" alt="" label="Listen to Sermon" />
          <Card color="white" src="mission-house/hotr-img2.jpg" alt="" label="worship warfare" />
          <Card color="white" src="mission-house/serve3.jpg" alt="" label="PUSH" />
          <Card color="white" src="mission-house/serve4.jpg" alt="" label="LOVE" />
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