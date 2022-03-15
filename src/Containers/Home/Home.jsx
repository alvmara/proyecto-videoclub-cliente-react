import { Button, Container, Text,  } from '@chakra-ui/react'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import fondo from '../../img/fondo1.svg';

function Home() {

  const navigate = useNavigate();

  const llevame = () => {
    navigate("/login");
  }


  return (
    <Container size="xl" backgroundImage={fondo}  h="100vh" maxWidth="80%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
        <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Bienvenido al videoclub</Text>
        <Text fontSize='2xl' color="black">Hazte usuario y disfruta del mejor contenido audiovisual</Text>
        <Button onClick={()=>llevame()}>soy boton </Button>
        
    </Container>
  )
}

export default Home;