import { useState } from 'react'
import './App.css'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import Navbar from './components/NavBar/NavBar'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector/PlatformSelector'
import { Platform } from './hooks/useGames'

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
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
        <PlatformSelector onSelectPlatform={platform => setGameQuery({ ...GameQuery, platform })} selectedPlatform={GameQuery.platform} />
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </ Grid>
  )
}

export default App
