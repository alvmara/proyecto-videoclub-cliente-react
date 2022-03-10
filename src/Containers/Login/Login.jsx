import { Button, Container, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loguearse = () => {
    // No hace nada
    console.log('Enviar datos al servidor para loguarse');
  }

  return (
    <Container size="xl" h="100vh" maxWidth="80%" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-end">
      <Text fontSize='6xl' color='violet' fontWeight="bold" dropShadow="lg">Login</Text>
     
      <form onSubmit={ (evento) => { evento.preventDefault(); loguearse(); } }>
        <FormControl>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input id='email' type='email' value={email} onChange={ (evento) => { setEmail(evento.target.value) }} />
          <FormHelperText>We'll never share your email.</FormHelperText>
          
          <FormLabel htmlFor='password'>password</FormLabel>
          <Input id='password' type='password' value={password} onChange={ (evento) => { setPassword(evento.target.value) }} />

          <Button type='submit'>Enviar</Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default Login