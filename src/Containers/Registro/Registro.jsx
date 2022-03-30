import { Button, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';

const Registro = () => {
  const [userData, setuserData] = useState({
    name: "",
    age: "",
    surname: "",
    nickname: "",
    email: "",
    password: "",
  });

  const handler = (evento) => {
    evento.preventDefault();
    registrarse();
  }

  const rellenarDatos = (evento) => {
    setuserData({ ...userData, [evento.target.name]: evento.target.value })
  }


  const registrarse = async () => {
    let body = {
      name: userData.name,
      age: userData.age,
      surname: userData.surname,
      nickname: userData.nickname,
      email: userData.email,
      password: userData.password,

    }



    console.log('Enviar datos al servidor para registrarse', body);

    let datos = await axios.post("http://localhost:5500/usuarios", body);
    console.log(datos);


  }

  return (
    <div className='container'>
      <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Registro</Text>

      <form onSubmit={evento => handler(evento)}>
        <FormControl padding="4">
          <FormLabel htmlFor='name'>name</FormLabel>
          <Input name='name' id='name' type='name' onChange={(evento) => { rellenarDatos(evento) }} />

          <FormLabel htmlFor='age'>age</FormLabel>
          <Input name='age' id='age' type='number' onChange={(evento) => { rellenarDatos(evento) }} />

          <FormLabel htmlFor='surname'>surname</FormLabel>
          <Input name='surname' id='surname' type='surname' onChange={(evento) => { rellenarDatos(evento) }} />

          <FormLabel htmlFor='nickname'>nickname</FormLabel>
          <Input name='nickname' id='nickname' type='nickname' onChange={(evento) => { rellenarDatos(evento) }} />

          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input name='email' id='email' type='email' onChange={(e) => { rellenarDatos(e) }} />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <FormLabel htmlFor='password'>password</FormLabel>
          <Input name='password' id='password' type='password' onChange={(evento) => { rellenarDatos(evento) }} />

          <Button type='submit' marginTop="8" minW="md">Enviar</Button>
        </FormControl>
      </form>
    </div>
  )
}

export default Registro;