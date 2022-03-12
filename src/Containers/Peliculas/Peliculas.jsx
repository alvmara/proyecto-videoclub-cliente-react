import { Button, Container, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PeliculaCard from './PeliculaCard/PeliculaCard';

const Peliculas = () => {
  const [pelis, setPelis] = useState([]);
  const [indice, setIndice] = useState(20);

  useEffect(() => {
    axios.get("http://localhost:5500/peliculas")
      .then(res => setPelis(res.data));
  }, []);

  return (
    <Container size="xl" h="100vh" maxWidth="80%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
        <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Peliculas</Text>

        <ul>
          {pelis.slice(0, indice).map(peli => <PeliculaCard pelicula={peli} />)}
        </ul>

        <Button onClick={() => setIndice(indice + 20)}>Ver más</Button>
    </Container>
  )
}

export default Peliculas;