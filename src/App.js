import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";
import Registro from "./Containers/Registro/Registro";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
