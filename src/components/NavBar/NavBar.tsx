import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/images/logo.webp'

const Navbar = () => {
    return (
        <HStack >
            <Image boxSize='60px' src={logo} />
            <Text>Navbar</Text>
        </HStack>
    )
}

export default Navbar