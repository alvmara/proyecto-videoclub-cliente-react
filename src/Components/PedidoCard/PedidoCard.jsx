import React from 'react'

function PedidoCard(props) {

    return (
        <div style={{ border: "1px solid black" }}>
            {/* <p>{JSON.stringify(props.pedido)}</p> */}

            <div>{props.pedido.nombreUsuario}</div>
            <div>{props.pedido.tituloPelicula}</div>
            <div>{props.pedido.precio} $</div>
            <div>{props.pedido.createdAt}</div>
        </div>
    )
}

export default PedidoCard