import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { DetailCharacters } from "./pages/DetailCharacters"

export const App = () => {

  return (

   <BrowserRouter>
   
      <header>
        <Link to = "/">
        <h1 className="main-title">Rick and Morty API Project</h1>  
        </Link>      
      </header>

    <Routes>

        <Route path="/" element = { <LandingPage/> } />
        <Route path="/character/:characterId" element = { <DetailCharacters/> }/>

    </Routes>


    <footer>
    <p>By Matias Guigue - Especializacion React</p>
    </footer>
   
   </BrowserRouter>
    
  );
};
