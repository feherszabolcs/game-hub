import { useState } from 'react'
import './App.css'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import Navbar from './components/NavBar/NavBar'
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector/SortSelector'
import GameHeading from './components/GameHeading/GameHeading'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
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
        <Navbar onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })} />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={GameQuery.genre} onSelectedGenre={genre => setGameQuery({ ...GameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main' >
        <Box marginLeft='10'>
          <GameHeading gameQuery={GameQuery} />
          <HStack spacing='2' marginBottom='5' >
            <PlatformSelector onSelectPlatform={platform => setGameQuery({ ...GameQuery, platform })} selectedPlatform={GameQuery.platform} />
            <SortSelector selectedOrder={GameQuery.sortOrder} onSelectOrder={(sortOrder) => setGameQuery({ ...GameQuery, sortOrder })} />
          </HStack>
        </Box>
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </ Grid>
  )
}

export default App
