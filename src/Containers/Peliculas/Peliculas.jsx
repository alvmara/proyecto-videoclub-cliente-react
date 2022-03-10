import { Container, Text } from '@chakra-ui/react'
import React from 'react'

function Peliculas() {
  return (
    <Container size="xl" h="100vh" maxWidth="80%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
        <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Peliculas</Text>
    </Container>
  )
}

export default Peliculas;