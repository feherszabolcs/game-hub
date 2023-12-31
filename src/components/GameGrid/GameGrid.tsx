import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from '../GameCard/GameCard';
import SkeletonCard from '../GameCard/SkeletonCard';
import CardContainer from '../GameCard/CardContainer';
import { GameQuery } from '../../App';

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const { error, data, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    if (error) return <Text>{error}</Text>
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} spacing={5} >
            {data.map(game => (
                <CardContainer key={game.id}>
                    <GameCard game={game} />
                </CardContainer>))}
            {isLoading && skeletons.map(s =>
                <CardContainer key={s}>
                    <SkeletonCard />
                </CardContainer>)}
        </SimpleGrid>
    )
}

export default GameGrid