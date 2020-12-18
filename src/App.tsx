import Header from "./components/Layout/Header";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import NewHere from "./components/Layout/NewHere";
import Corevalues from "./components/Layout/Corevalues";
import OnlineServices from "./components/Layout/OnlineServices";
import ServiceQuotes from "./components/Layout/ServiceQuotes";
import MeetPastor from "./components/Layout/MeetPastor";
import Footer from "./components/Layout/Footer";
import Theme from "./utils/theme";


const App = () => {
  const GlobalStyle = createGlobalStyle`
    body{
      text-align:center;
      background-color:#dfdfdf;
      margin: 0;
      width:100%;
      overflow-x: hidden;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      transition: all 0.5s linear;
    }
    body > * {
      width:100%;
        overflow-x: hidden;
    }
    @media (max-width: 600px){
      body {width:100%;
        overflow-x: hidden;}
    }
    ::-webkit-scrollbar {width:10px;}
    ::-webkit-scrollbar-track { background: rgba(0,00,00,.00);}
    ::-webkit-scrollbar-thumb {box-shadow:0 4px 5px #555; height:10px; background: ${({ theme }) => theme.colors.primary};}
    ::-webkit-scrollbar-thumb:hover {background: ${({ theme }) => theme.colors.primary};}
  `;
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header />
        <NewHere />
        <Corevalues />
        <OnlineServices />
        <ServiceQuotes />
        <MeetPastor />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
