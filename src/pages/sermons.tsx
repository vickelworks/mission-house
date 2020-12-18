import styled from "styled-components";
import Text from "../components/Text"
import Card from "../components/Card"

export const Header = styled.div`
  background: -webkit-linear-gradient( rgba(0,0,0,.1), rgba(0,0,0,.8)),url("pst5.jpg") no-repeat;
  background-size:cover;
  min-height:70vh;
  display:flex;
  justify-content:center;
  align-items:center;


`

const Sermons = styled(({ className }) => {
  return (
    <div className={className}>
      <Header>
        <Text size="6" color="white">SERMONS</Text>
      </Header>
      <div className="sermons">
        <Card src="" alt="" label="The Ziklag Experience" />
        <Card src="" alt="" label="Katatizo" />
        <Card src="" alt="" label="Walking in wisdom" />
        <Card src="" alt="" label="Love" />
      </div>
    </div>
  )
})`

.sermons {
  width:90%;
  margin:30px auto;
  display:flex;
  justify-content:space-between;
}

`

export default Sermons;