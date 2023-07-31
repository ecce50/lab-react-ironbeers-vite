import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage />} />
        <Route path="/random-beers" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
       </Routes>
   
    </div>
  );
}

export default App;
