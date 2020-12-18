import Text from "../Text";
import Card from "../Card";
import styled from "styled-components";


const MeetPastor = styled(({ className }) => {
  return (
    <div className={className}>
      <Text color="primary" size="5" align="center" weight="bold">Our pastor will like to <br /> meet you and be your <br /> friend</Text>
      <Card color="transparent" src="mission-house/pst2.jpg" alt="Rev Barnabas Arastus" borderRadius="50%">
        <Text size="4" color="primary" weight="light">Rev Barnabas Arastus </Text>
        <Text size="3" color="primary" weight="bold">Resident Pastor, <br /> House on the Rock Kaduna </Text>
      </Card>
    </div>
  )
})`

  height:70vh;
  width:80%;
  margin:0 auto;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-around;
  align-items:center;

  @media (max-width:600px){
    margin-top:50px;
    width:90%;
  }

`

export default MeetPastor;