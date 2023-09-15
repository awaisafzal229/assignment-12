import { Box, Flex, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'} py={3} height={100} alignItems={"center"}>
      <Box position={'relative'} aspectRatio={10/3} minHeight={5}>
    <Image src={"/logo2.png"} fill alt='github logo' sx={{filter: "invert(1)"}} boxSize="auto" height={"100px"} width={"200px"} justifyContent={'flex-start'}  />
      </Box>
      <Box>
        <Button size="md" colorScheme='whatsapp'>Search History</Button>
      </Box>
    </Flex>
  )
}

export default Navbar
