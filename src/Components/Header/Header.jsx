import { Button } from '@chakra-ui/react';
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import './Header.css';

function DatosUsuario(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const desLoguearse = (evento) => {
        dispatch({ type: LOGOUT });
        navigate("/");
    }
    
    return <>
        <h2>{props.name}</h2>

        <Button onClick={(evento) =>{desLoguearse(evento)}}>Logout</Button>
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