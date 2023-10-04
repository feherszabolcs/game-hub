import './App.css'
import Navbar from './components/NavBar/NavBar'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {


  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`

    }}>
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' >Aside</GridItem>
      </Show>
      <GridItem area='main' >Main</GridItem>
    </Grid>
  )
}

export default App
