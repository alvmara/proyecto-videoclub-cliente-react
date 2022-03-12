import { Button } from '@chakra-ui/react';
import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import './Header.css';

function DatosUsuario(props) {
    
    return <>
        <h2>{props.nombre}</h2>

        <Button>Logout</Button>
    </>    
}

function Header() {
    const mostarDatosUsuario = useSelector(store => store.credentials.token !== "");
    const nombre = useSelector(store => store.credentials.usuario.nombre);

  return (
    <header className='myHeader'>
        <h1>Mi videoclub</h1>

        <div className='right'>

            { mostarDatosUsuario && <DatosUsuario nombre={nombre} />  }
        </div>
    </header>
  )
}

export default Header