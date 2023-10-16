import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void
}

const SearchBar = ({ onSearch }: Props) => {

    const ref = useRef<HTMLInputElement>(null)

    return (
        <form style={{ width: '100%' }} onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) onSearch(ref.current.value)

        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder='Game name' variant='filled' />
            </InputGroup>
        </form>
    )
}

export default SearchBar