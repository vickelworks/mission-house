import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import styled from "styled-components";

interface props {
  google?: string;
  className?: string;
}

const API_KEY = "AIzaSyCeEwFop4GhcCi7jL0yPJ94JsFbDPUXR9A";

const Locate = styled(({ className, google }: props) => {
  return (
    <>
      <div className={className}>
        <div>LOCATE US</div>
        <Map google={google} />
      </div>
    </>
  );
})`
  margin:90px auto 0;

  @media (max-width:600px){
    margin:60px auto 0;
  }

`

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(Locate);