import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Registro from "./Containers/Registro/Registro";
import Peliculas from "./Containers/Peliculas/Peliculas";
import PeliculaDetalle from "./Containers/PeliculaDetalle/PeliculaDetalle";
import Admin from "./Containers/Admin/Admin";

import Header from "./Components/Header/Header";

import { ChakraProvider } from "@chakra-ui/react";

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
            <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
