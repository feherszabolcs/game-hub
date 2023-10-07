import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from '../GameCard/GameCard';
import SkeletonCard from '../GameCard/SkeletonCard';



const GameGrid = () => {
    const { error, games, isLoading } = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={10} >
                {games.map(game => (<GameCard key={game.id} game={game} />))}
                {isLoading && skeletons.map(s => <SkeletonCard key={s} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid