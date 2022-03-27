import React from 'react'

function UsuarioCard(props) {
    return (
        <div>{JSON.stringify(props.usuario)}</div>
    )
}

export default UsuarioCard