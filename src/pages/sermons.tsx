import styled from "styled-components";
import Text from "../components/Text";
import Card from "../components/Card";

export const Header = styled.div`
  background: -webkit-linear-gradient( rgba(0,0,0,.5), rgba(0,0,0,.8)),url("mission-house/pst4.jpg") no-repeat;
  background-size:cover;
  height:70vh;
  display:flex;
  justify-content:center;
  align-items:center;
  
  @media (max-width:600px){
    height:40vh;
  }


`

const Sermons = styled(({ className }) => {
  return (
    <div className={className}>
      <Header>
        <Text size="6" color="white">SERMONS</Text>
      </Header>
      <div className="sermons">
        <Card src="mission-house/public/pst1.jpg" alt="" label="The Ziklag Experience" />
        <Card src="mission-house/pst2.jpg" alt="" label="Katatizo" />
        <Card src="mission-house/pst5.jpg" alt="" label="Walking in wisdom" />
        <Card src="mission-house/pst4.jpg" alt="" label="Love" />
      </div>
    </div>
  )
})`
width:80%;
overflow:hidden;
margin:90px auto 0;
@media (max-width:600px){
  margin:0px auto 0;
  width:100%;
}
.sermons {
  width:90%;
  margin:30px auto;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-between;
}

@media (max-width: 600px){
  .sermons {
    justify-content:center;
  }
}

`

export default Sermons;