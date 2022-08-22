import { Box } from '@chakra-ui/react'

import { Header } from '../Header/Header'
import { Main } from '../Main/Main'

function App() {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >
      <Box width='25rem' margin='1rem'>
        <Header />
        <Main />
      </Box>
    </Box>
  )
}

export default App
