import { Game } from '../../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../../services/image-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card >
            <Image src={getCroppedImageUrl(game.background_image) || '/src/assets/images/no-image-placeholder-6f3882e0.webp'} />
            <CardBody>
                <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform) || null} />
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard