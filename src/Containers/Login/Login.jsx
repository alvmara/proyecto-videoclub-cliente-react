import { Button, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../redux/types';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [datosIncorrectos, setDatosIncorrectos] = useState(false);

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handler = (evento) => {
    evento.preventDefault();
    loguearse();
  }

  const loguearse = async () => {
    console.log('Enviar datos al servidor para loguarse');

    const datos = await axios.post("http://localhost:5500/usuarios/login", { email, password });

    if (datos.data.token) {
      console.log(datos);

      // localStorage.setItem("datos_login",JSON.stringify(datos.data));
      dispatch({ type: LOGIN, payload: datos.data });


      navigate('/peliculas');
    } else {
      // contraseña invalida
      console.error("contraseña invalida");
      setDatosIncorrectos(true);
    }
  }

  return (
    <div className='container'>
      <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Login</Text>

      <form onSubmit={evento => handler(evento)} style={{ padding: '0px 20px' }}>
        <FormControl>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input id='email' type='email' value={email} onChange={(evento) => { setEmail(evento.target.value) }} />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <FormLabel htmlFor='password'>password</FormLabel>
          <Input id='password' type='password' value={password} onChange={(evento) => { setPassword(evento.target.value) }} />

          <Button minW="sm" style={{ marginTop: '20px' }} type='submit'>Enviar</Button>
        </FormControl>

        {datosIncorrectos && <Text color="red">Usuario o contraseña incorrectos</Text>}
      </form>
    </div>
  )
}

export default Login;