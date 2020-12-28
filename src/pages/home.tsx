import Header from "../components/Layout/Header";
import NewHere from "../components/Layout/NewHere";
import Corevalues from "../components/Layout/Corevalues";
import OnlineServices from "../components/Layout/OnlineServices";
import ServiceQuotes from "../components/Layout/ServiceQuotes";
import MeetPastor from "../components/Layout/MeetPastor";
import Footer from "../components/Layout/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <NewHere />
      <Corevalues />
      <OnlineServices />
      <ServiceQuotes />
      <MeetPastor />
      <Footer />
    </>
  );
}

export default Home;