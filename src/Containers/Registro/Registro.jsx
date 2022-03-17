import { Button, Container, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Registro = () => {

  const [userData, setuserData] = useState({
    name: "",
    age: "",
    surname: "",
    nickname: "",
    email: "",
    password: "",
  });

  
  const [datosIncorrectos, setDatosIncorrectos] = useState(false);

  

  let navigate = useNavigate();

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
    <Container size="xl" h="100vh" maxWidth="80%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
      <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Registro</Text>
     
      <form onSubmit={ evento => handler(evento) }>
        <FormControl>
          <FormLabel htmlFor='name'>name</FormLabel>
          <Input name='name' id='name' type='name'   onChange={ (evento) => {rellenarDatos(evento)} } />

           <FormLabel htmlFor='age'>age</FormLabel>
           <Input name='age' id='age' type='number'   onChange={ (evento) => {rellenarDatos(evento)} } />

           <FormLabel htmlFor='surname'>surname</FormLabel>
           <Input name='surname' id='surname' type='surname'   onChange={ (evento) => {rellenarDatos(evento)} } />

           <FormLabel htmlFor='nickname'>nickname</FormLabel>
           <Input name='nickname' id='nickname' type='nickname'   onChange={ (evento) => {rellenarDatos(evento)} } />

          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input name='email' id='email' type='email' onChange={(e) => { rellenarDatos(e) }} />
          <FormHelperText>We'll never share your email.</FormHelperText>
          
          <FormLabel htmlFor='password'>password</FormLabel>
          <Input name='password' id='password' type='password'   onChange={ (evento) => {rellenarDatos(evento)} } />




          <Button type='submit'>Enviar</Button>
        </FormControl>

        { datosIncorrectos && <Text color="red">Usuario o contraseña incorrectos</Text>}
      </form>
    </Container>
  )
}

export default Registro;