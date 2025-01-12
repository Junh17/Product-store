import React from 'react';
import { Container, Flex, HStack, Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row",
          }}
        >
            <Text
                bgGradient='linear(to-l, #26C6DA, #2196F3)'
                bgClip='text'
                fontSize={{ base: '22', sm: '28' }}
                fontWeight='bold'
                textAlign='center'
                textTransform='uppercase'
            >
                <Link to={'/'}>Product Store 🛒</Link>
            </Text>  

            <HStack spacing={2} alignItems='center'>
                <Link to = {'/create'}>
                    <Button>
                        <CiSquarePlus fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <IoMoon/> : <LuSun size={20}/>}
                </Button>
            </HStack>      
        </Flex>
    </Container>
  );
};

export default Navbar;
