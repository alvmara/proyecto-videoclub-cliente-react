import { Container, Text, Button } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import PeliculaCard from '../Peliculas/PeliculaCard/PeliculaCard';

const PeliculaDetalle = () => {
  const [peli, setPeli] = useState(null);
  const { peliculaId } = useParams();
  const token = useSelector(store => store.credentials.token);
  const usuario = useSelector(store => store.credentials.usuario);

  const navigate = useNavigate();

  const hacerPedido = () => {
    let body = {
      precio: 5,
      peliculaId: peli.id,
      usuarioId: usuario.id,
      fecha: "2021-10-27",
      fechaDevolucion: "2021-10-27",

    }

    axios.post("http://localhost:5500/pedidos", body);
  }


  useEffect(() => {
    const headers = {
      "Authorization": `Bearer ${token}`
    };

    if (token) {
      axios
        .get(`http://localhost:5500/peliculas/id/${peliculaId}`, { headers })
        .then(res => setPeli(res.data));
    }

  }, [token, peliculaId]);

  useEffect(() => { console.log(peli) }, [peli]);

  if (!token) {
    return navigate('/');
  }



  return (
    <Container size="xl" h="100vh" maxWidth="80%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
      <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">PeliculaDetalle</Text>

      {peli !== null && <PeliculaCard pelicula={peli} />}
      <Button onClick={() => hacerPedido()}> Alquilar</Button>
    </Container>
  )
}

export default PeliculaDetalle;