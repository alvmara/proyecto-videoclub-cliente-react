import { Container, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Peliculas = () => {
  return (
    <Container size="xl" h="100vh" maxWidth="80%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
        <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Peliculas</Text>
    </Container>
  )
}

export default Peliculas;