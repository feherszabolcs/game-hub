import { useState } from 'react'
import './App.css'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import Navbar from './components/NavBar/NavBar'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector/SortSelector'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
}

function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (

    < Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '250px'
      }}>

      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={GameQuery.genre} onSelectedGenre={genre => setGameQuery({ ...GameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main' >
        <HStack spacing='2' marginBottom='5' marginLeft='10'>
          <PlatformSelector onSelectPlatform={platform => setGameQuery({ ...GameQuery, platform })} selectedPlatform={GameQuery.platform} />
          <SortSelector selectedOrder={GameQuery.sortOrder} onSelectOrder={(sortOrder) => setGameQuery({ ...GameQuery, sortOrder })} />
        </HStack>
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </ Grid>
  )
}

export default App
