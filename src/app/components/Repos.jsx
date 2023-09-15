"use Client"
import { Flex, Text,Spinner } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const Repos = ({repoUrl}) => {
    const toast = useToast();
    const [repos,setRepos] = useState([]);
    const [loading,setLoading] = useState(false);
    const [showMore,setShowMore] = useState(false);
    console.log("Repos is here",repos);

    useEffect(()=>{
        const fetchRepos = async ()=>{
            try {
                const res = await fetch(repoUrl);
                const data = await res.json();
                if(data.message) throw new Error(data.message);
                setRepos(data);
            } catch (error) {
                toast({
                    title: "Error",
                    description: error.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                })
            }
        }

        fetchRepos();
    },[repoUrl,toast])
  return (
    <>
     <Text 
     textAlign={'center'}
     letterSpacing={1.5}
     fontSize={'3xl'}
     fontWeight={'bold'}
     color={'green.400'}
     mt={4}>Repositories</Text> 
     {loading && (
        <Flex justifyContent={"center"}>
            <Spinner size={"xl"} my={4}/>
        </Flex>
     )}
     
    </>
  )
}

export default Repos
