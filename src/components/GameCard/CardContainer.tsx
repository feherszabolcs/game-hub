import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const CardContainer = ({ children }: Props) => {
    return (
        <Box borderEndRadius={10} overflow={'hidden'}>
            {children}
        </Box>
    )
}

export default CardContainer