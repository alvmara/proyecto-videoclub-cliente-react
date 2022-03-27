import { Button } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import './Header.css';

function DatosUsuario(props) {
    const { name } = useSelector(store => store.credentials.usuario || {});
    const isAdmin = useSelector(store => store.credentials.usuario.rol);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const desLoguearse = (evento) => {
        dispatch({ type: LOGOUT });
        navigate("/");
    }

    return <>
        <h2>{name}</h2>

        {isAdmin && <Button onClick={() => navigate('/admin')}>Admin</Button>}

        <Button onClick={(evento) => { desLoguearse(evento) }}>Logout</Button>
    </>
}

function Header() {
    const mostarDatosUsuario = useSelector(store => store.credentials.token !== null);

    return (
        <header className='myHeader'>
            <h1>Mi videoclub</h1>

            <div className='right'>
                {mostarDatosUsuario && <DatosUsuario />}
            </div>

        </header>
    )
}

export default Header