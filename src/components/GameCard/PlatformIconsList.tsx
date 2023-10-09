import { FaWindows, FaXbox, FaPlaystation, FaApple, FaAndroid, FaLinux } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {

    const IconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        android: FaAndroid,
        nintendo: SiNintendo,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,

    }

    return (
        <HStack marginY={2}>
            {platforms.map((platform) => <Icon key={platform.id} as={IconMap[platform.slug]} color='gray.500'>{platform.name}</Icon>)}
        </HStack>
    )
}

export default PlatformIconsList