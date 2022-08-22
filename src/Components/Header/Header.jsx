import { Box, Text, Image } from '@chakra-ui/react'

import logo from '../../images/logo.svg'

export const Header = () => {
  return (
    <Box
      as='header'
      display='flex'
      justifyContent='space-between'
      borderRadius='10'
      padding='1.2rem'
      backgroundColor='hsl(10, 79%, 65%)'
    >
      <Box color='hsl(27, 66%, 92%)'>
        <Text as='h1' fontSize='0.9rem'>
          My balance
        </Text>
        <Text fontWeight='500' fontSize='2rem'>
          $921.48
        </Text>
      </Box>
      <Image width='3rem' src={logo} alt='Logo' />
    </Box>
  )
}
