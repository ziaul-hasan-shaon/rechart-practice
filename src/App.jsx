
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import './App.css'
import SimpleLineCharts from './Pages/SimpleLineChart'
import CompositeCharts from './Pages/CompositeCharts'
import BarCharts from './Pages/BarCharts'
import CustomShape from './Pages/CustomShape'

function App() {

  return (
    <Box my={5} px={5}>
      <Heading textAlign='center' my={4}>Unified Portal Dashboard</Heading>
      <Grid templateColumns= {{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}>
        <GridItem>
          <SimpleLineCharts></SimpleLineCharts>
        </GridItem>
        <GridItem>
          <CompositeCharts></CompositeCharts>
        </GridItem>
        <GridItem>
          <BarCharts></BarCharts>
        </GridItem>
        <GridItem>
          <CustomShape></CustomShape>
        </GridItem>
      </Grid>
    </Box>
    // <>

  )
}

export default App
