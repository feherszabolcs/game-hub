import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react'
import useGenres, { Genre } from '../../hooks/useGenres'
import getCroppedImageUrl from '../../services/image-url'
interface Props {
    onSelectedGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
    const { data } = useGenres()

    return (
        <>
            <Heading fontSize='2xl' marginY='3'>Genres</Heading>
            <List>
                {data.map(genre => (
                    <ListItem key={genre.id} paddingY={1}>
                        <HStack >
                            <Image objectFit='cover' src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={8} />
                            <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} variant='link' onClick={() => onSelectedGenre(genre)} fontSize='lg'>{genre.name}</Button>
                        </HStack>
                    </ListItem>))}
            </List>
        </>
    )
}

export default GenreList