import { Button, Text } from '@chakra-ui/react';
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

    return <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Text as="h2" fontSize="md" fontWeight="bold">{name}</Text>

        {isAdmin && <Button backgroundColor="blue.400" color="white" onClick={() => navigate('/admin')}>Admin</Button>
        }

        <Button onClick={(evento) => { desLoguearse(evento) }}>Logout</Button>
    </div >
}

function Header() {
    const mostarDatosUsuario = useSelector(store => store.credentials.token !== null);

    return (
        <header className='myHeader'>
            <Text as="h1" fontSize="xl" color="pink.700" fontWeight="bold">Mi videoclub</Text>

            <div className='right'>
                {mostarDatosUsuario && <DatosUsuario />}
            </div>

        </header>
    )
}

export default Header