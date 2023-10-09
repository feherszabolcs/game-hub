import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGenres, { Genre } from '../../hooks/useGenres'
import getCroppedImageUrl from '../../services/image-url'

interface Props {
    onSelectedGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY={1}>
                    <HStack >
                        <Image src={getCroppedImageUrl(genre.image_background)} boxSize='32px' borderRadius={8} />
                        <Button background='unset' onClick={() => onSelectedGenre(genre)} fontSize='lg'>{genre.name}</Button>
                    </HStack>
                </ListItem>))}
        </List>
    )
}

export default GenreList