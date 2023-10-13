import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    onSelectOrder: (order: string) => void,
    selectedOrder: string
}

const SortSelector = ({ onSelectOrder, selectedOrder }: Props) => {

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-date', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Avarage Rating' },
    ]

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order By: {sortOrders.find(o => o.value == selectedOrder)?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(order => <MenuItem onClick={() => onSelectOrder(order.value)} key={order.label} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector