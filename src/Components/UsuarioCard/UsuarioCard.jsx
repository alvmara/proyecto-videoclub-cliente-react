import { Box, Checkbox, Text } from '@chakra-ui/react'
import React from 'react'

function UsuarioCard(props) {
    const date = new Date(props.usuario.createdAt);

    return (
        <Box borderWidth='1px' borderRadius='md' overflow="hidden"
            style={{ display: 'flex', gap: '20px', marginBlock: '20px' }}
        >
            <div>
                <img style={{ width: '48px', height: '48px' }}
                    alt="avatar"
                    src="https://api.minimalavatars.com/avatar/random/png" />

                <Text>{props.usuario.nickname}</Text>
            </div>


            <div>
                <Text>Nombre completo: {props.usuario.name} {props.usuario.surname}</Text>
                <Text>Email: {props.usuario.email}</Text>
                <Text>Es administrador?: <Checkbox disabled defaultChecked={props.usuario.rol}></Checkbox></Text>
                <Text>Fecha de creación: {date.toLocaleDateString()}</Text>
            </div>
        </Box>
    )
}

export default UsuarioCard