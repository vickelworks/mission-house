import Home from "./pages/home";
import Sermons from "./pages/sermons";
import Locate from "./pages/locate";
import NavBar from "./components/NavBar";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Theme from "./utils/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  const GlobalStyle = createGlobalStyle`
    html, body{
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
      scroll-behavior:smooth;
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
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/pages/sermons" exact component={() => <Sermons />} />
            <Route path="/pages/locate" exact component={() => <Locate />} />
          </Switch>
          <NavBar />
        </Router>
      </ThemeProvider>

    </>
  );
}

export default App;
