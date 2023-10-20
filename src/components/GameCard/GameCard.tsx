import { Game } from '../../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../../services/image-url'
import Emoji from './Emojis'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {

    let platforms = undefined;
    if (game.parent_platforms != undefined) platforms = game.parent_platforms.map(p => p.platform)

    return (
        <Card >
            <Image src={getCroppedImageUrl(game.background_image) || '/src/assets/images/no-image-placeholder-6f3882e0.webp'} />
            <CardBody>
                <PlatformIconsList platforms={platforms} />
                <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /></Heading>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard