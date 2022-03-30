import { Button, Text, } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import fondo from '../../img/fondo1.svg';
import './Home.css'

function Home() {
  const navigate = useNavigate();

  const llevame = (destino) => {
    navigate(`/${destino}`);
  }


  return (
    <div className='container'>
      <img src={fondo} alt="Imagen de fondo" />

      <div className='home-text'>
        <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Bienvenido al videoclub</Text>
        <Text fontSize='2xl' color="black">Hazte usuario y disfruta del mejor contenido audiovisual</Text>

        <div className='home-text' style={{ padding: '20px 0px' }}>
          <Button maxW="sm" minW="sm" onClick={() => llevame("login")}>Login</Button>
          <Button maxW="sm" minW="sm" onClick={() => llevame("registro")}>Registro</Button>
        </div>
      </div>
    </div>
  )
}

export default Home;