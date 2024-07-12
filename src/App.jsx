import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home from "./pages/Home"
import Nuevo from "./pages/NewVideo"
import Page404 from "./pages/Page404"
import styled from "styled-components"
import GlobalStyles from "./components/Globalstyles";

<<<<<<< HEAD
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AluraFlixProvider} from "./contex/AluraFlixContext.jsx";
=======
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585


const FondoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    color: aliceblue;
`


function App() {

<<<<<<< HEAD
  return (
      <AluraFlixProvider>
        <Router>
          <FondoGradiente>
            <GlobalStyles/>
            <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/nuevo' element={<Nuevo/>}/>
              <Route path='*' element={<Page404/>}/>
            </Routes>
            <Footer/>
          </FondoGradiente>
        </Router>
      </AluraFlixProvider>
  );
=======
    return (
        <Router>
            <FondoGradiente>
                <GlobalStyles/>
                    <Header/>
                    <Routes>
                        <Route path='/' element= {<Home/>}/>
                        <Route path='/nuevo' element= {<Nuevo/>}/>
                        <Route path='*' element= {<Page404/>}/>
                    </Routes>
                    <Footer/>
            </FondoGradiente>
        </Router>
    );
>>>>>>> 5f16ac30fbae2ea871662c03a858275ebf8ea585
}

export default App;