import styled from "styled-components";
import Text, { getFontColor } from "../Text";

interface props {
  className?: any;
  src?: string;
  alt?: string;
  children?: any;
  color?: string;
  borderRadius?: string;
  label?: string;
}

const Card = styled(({ className, src, alt, label, children }: props) => {
  return (
    <div className={className}>
      {src && <img className="image" src={src} alt={alt} />}
      <div className="text">
        <Text color="primary" align="center" size="2">{label}</Text>
        <Text color="primary" align="center" size="2">{children}</Text>
      </div>
    </div>
  )
})`
  background:${(props) => getFontColor(props.color, props.theme)};
  width:200px;
  min-height:250px;
  overflow:hidden;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  transition:.5s;

  .image {width:200px;
    height:190px;
    border-radius:${(props) => props.borderRadius}}
  .text {
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;  
      }
  @media (max-width:600px){
        margin-bottom:30px;
    }


    


`

export default Card;