import { Container, Text } from '@chakra-ui/react'
import React from 'react'

import fondo from '../../img/fondo1.svg';

function Home() {
  return (
    <Container size="xl" backgroundImage={fondo} h="100vh" maxWidth="80%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
        <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Bienvenido al videoclub</Text>
        <Text fontSize='2xl' color="black">Hazte usuario y disfruta del mejor contenido audiovisual</Text>
    </Container>
  )
}

export default Home