import { HStack, Image } from '@chakra-ui/react'
import ColorModeSwitch from '../ModeSwitch/ColorModeSwitch'
import logo from '../../assets/images/logo.webp'
import SearchBar from '../SearchBar/SearchBar'

interface Props {
    onSearch: (searchText: string) => void
}

const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image boxSize='60px' src={logo} />
            <SearchBar onSearch={onSearch} />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    )
}

export default Navbar