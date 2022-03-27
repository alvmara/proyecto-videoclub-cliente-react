import { Box, Button, Container, Text, } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

import fondo from '../../img/fondo1.svg';

function Home() {

  const navigate = useNavigate();

  const llevame = (destino) => {
    navigate(`/${destino}`);
  }


  return (
    <Container size="xl" backgroundImage={fondo} h="100vh" maxWidth="80%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
      <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Bienvenido al videoclub</Text>
      <Text fontSize='2xl' color="black">Hazte usuario y disfruta del mejor contenido audiovisual</Text>
      <Button onClick={() => llevame("login")}>Login</Button>
      <Button onClick={() => llevame("registro")}>Registro</Button>

    </Container>
  )
}

export default Home;