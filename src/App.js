import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Registro from "./Containers/Registro/Registro";
import Peliculas from "./Containers/Peliculas/Peliculas";

import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/pelicula/[id]" element={<Peliculas />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
