import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function PedidoCard(props) {

    const date = new Date(props.pedido.createdAt);

    return (
        <Box borderWidth='1px' borderRadius='md' overflow="hidden"
            style={{ display: 'flex', gap: '20px', marginBlock: '20px' }}
        >
            <div>
                <img style={{ width: '48px', height: '48px' }}
                    alt="avatar"
                    src="https://api.minimalavatars.com/avatar/random/png" />

                <Text>{props.pedido.nombreUsuario}</Text>
            </div>


            <div>
                <Text>Película: {props.pedido.tituloPelicula}</Text>
                <Text>Precio: {props.pedido.precio} $</Text>
                <Text>Fecha del pedido: {date.toLocaleDateString()}</Text>
            </div>
        </Box>
    )
}

export default PedidoCard