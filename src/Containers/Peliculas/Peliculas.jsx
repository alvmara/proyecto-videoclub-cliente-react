import { Box, Button,  Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PeliculaCard from './PeliculaCard/PeliculaCard';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Peliculas = () => {
  const [pelis, setPelis] = useState([]);
  const [pelisFiltradas, setPelisFiltradas] = useState([]);
  const [indice, setIndice] = useState(20);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const token = useSelector(store => store.credentials.token);

  
  const navigate = useNavigate();

  useEffect(() => {
    const resultado = pelis.filter((peli)=> peli.titulo.toLowerCase().includes(textoBusqueda.toLocaleLowerCase()));
    setPelisFiltradas(resultado);
  },[textoBusqueda, pelis])
  
  useEffect(() => {
    const headers = {
      "Authorization": `Bearer ${token}`
    };
    
    if (token) {
      axios
        .get("http://localhost:5500/peliculas", { headers })
        .then(res => setPelis(res.data));
    }
    
  }, [token]);
  
  if (!token) {
    return navigate('/');
  }
  
  return (
    <div>
        <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Peliculas</Text>
          <Input placeholder='small size' size='sm'  value={textoBusqueda} onChange={ (evento) => { setTextoBusqueda(evento.target.value) }}/>

          <Box>
            <ul>
              {pelisFiltradas.slice(0, indice).map(peli => <PeliculaCard key={peli.id} pelicula={peli} />)}
            </ul>
          </Box>

        <Button onClick={() => setIndice(indice + 20)}>Ver más</Button>
    </div>
  )
}

export default Peliculas;