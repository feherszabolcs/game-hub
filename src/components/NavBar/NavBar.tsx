import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from '../ModeSwitch/ColorModeSwitch'
import logo from '../../assets/images/logo.webp'

const Navbar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image boxSize='60px' src={logo} />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default Navbar