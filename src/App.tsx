import './App.css'
import GameGrid from './components/GameGrid/GameGrid'
import GenreList from './components/GenreList/GenreList'
import Navbar from './components/NavBar/NavBar'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {


  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px'
      }}>

      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main' >
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
