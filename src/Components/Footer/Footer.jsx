import { Box, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Box
      borderTop='1px'
      borderTopColor='hsl(27, 66%, 92%)'
      margin='2rem 0 1rem 0'
      paddingTop='2rem'
      display='flex'
      justifyContent='space-between'
      alignItems='flex-end'
    >
      <Box>
        <Text fontSize='0.9rem' color='hsl(28, 10%, 53%)' as='span'>
          Total this month
        </Text>
        <Text fontSize='2rem' fontWeight='700' as='p'>
          $478.33
        </Text>
      </Box>
      <Box>
        <Text textAlign='right' fontWeight='700'>
          +2.4%
        </Text>
        <Text fontSize='0.9rem' color='hsl(28, 10%, 53%)' as='span'>
          from last month
        </Text>
      </Box>
    </Box>
  )
}
