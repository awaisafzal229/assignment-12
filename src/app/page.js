"use client"
import { Button,Container,Text } from '@chakra-ui/react'
import Navbar from "./components/Navbar"
import Search from './components/Search_'
import { useState } from 'react'
import UserProfile from './components/userProfile'
export default function Home() {
  const [userData,setUserData] = useState(null);
  const [loading,setLoading]= useState(false);
  console.log(userData);
  return (
   <Container maxW="container.lg">
    <Navbar />
    <Text fontSize={'2xl'} textAlign={'center'} my={4}>
      Search Users on GitHub
    </Text>
    <Search setUserData={(res)=> setUserData(res)} setLoading={setLoading}/>

    {userData && <UserProfile userData={userData} />}
   </Container>
  )
}
