import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from '../GameCard/GameCard';
import SkeletonCard from '../GameCard/SkeletonCard';
import CardContainer from '../GameCard/CardContainer';
import { Genre } from '../../hooks/useGenres';

interface Props {
    selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: Props) => {
    const { error, data, isLoading } = useGames();

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} spacing={3} >
                {data.map(game => (
                    <CardContainer key={game.id}>
                        <GameCard game={game} />
                    </CardContainer>))}
                {isLoading && skeletons.map(s =>
                    <CardContainer key={s}>
                        <SkeletonCard key={s} />
                    </CardContainer>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid