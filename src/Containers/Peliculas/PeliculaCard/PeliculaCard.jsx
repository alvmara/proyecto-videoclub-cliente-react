import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function PeliculaCard({ pelicula }) {
  const navigate = useNavigate();

  const date = new Date(pelicula.updatedAt);

  return (
    <Box borderWidth='1px' borderRadius='md' overflow="hidden" style={{ display: 'flex', gap: '20px', marginBlock: '20px' }}>
      <img onClick={() => navigate(`/pelicula/${pelicula.id}`)} src={pelicula.image} alt={pelicula.titulo} style={{ width: "200px", height: "200px" }} />

      <div >
        <Text fontSize="x-large">{pelicula.titulo}</Text>
        <Text>Estrenada en: {date.toLocaleDateString()}</Text>
      </div>
    </Box>
  )
}

export default PeliculaCard;