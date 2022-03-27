import { Container, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PedidoCard from '../../Components/PedidoCard/PedidoCard';
import UsuarioCard from '../../Components/UsuarioCard/UsuarioCard';


const Admin = () => {
  const isAdmin = useSelector(store => store.credentials.usuario.rol);
  const token = useSelector(store => store.credentials.token);
  const navigate = useNavigate();

  const [pedidos, setPedidos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    if (!isAdmin) {
      return navigate('/');
    }

    const headers = {
      'Authorization': `Bearer ${token}`
    }

    // traer los usuarios
    axios.get('http://localhost:5500/usuarios', { headers })
      .then((res) => setUsuarios(res.data));

    // traer los pedidos
    axios.get('http://localhost:5500/pedidos', { headers })
      .then((res) => setPedidos(res.data));
  }, []);


  useEffect(() => {
    console.log(usuarios);
  });

  useEffect(() => {
    console.log(pedidos);
  });

  return (
    <div>
      <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Admin</Text>

      {/* Visualizar pedidos */}
      <Text>Pedidos</Text>
      {pedidos.map(pedido => <PedidoCard pedido={pedido} />)}

      {/* Visualizar usuarios */}
      <Text>Usuarios</Text>
      {usuarios.map(usuario => <UsuarioCard usuario={usuario} />)}

    </div>
  )
}

export default Admin;