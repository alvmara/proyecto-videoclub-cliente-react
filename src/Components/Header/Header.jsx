import { Button } from '@chakra-ui/react';
import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import './Header.css';

function DatosUsuario(props) {
    
    return <>
        <h2>{props.name}</h2>

        <Button>Logout</Button>
    </>    
}

function Header() {
    const mostarDatosUsuario = useSelector(store => store.credentials.token !== null);
    const { name } = useSelector(store => store.credentials.usuario || {});

  return (
    <header className='myHeader'>
        <h1>Mi videoclub</h1>

        <div className='right'>

            { mostarDatosUsuario && <DatosUsuario name={name} />  }
        </div>
    </header>
  )
}

export default Header