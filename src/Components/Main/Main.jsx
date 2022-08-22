import { Footer } from '../Footer/Footer'
import { Box, Text, Tooltip } from '@chakra-ui/react'

export const Main = () => {
  const getWeekDay = (weekDay) => {
    return weekDay === new Date().getDay()
      ? 'hsl(186, 34%, 60%)'
      : 'hsl(10, 79%, 65%)'
  }
  getWeekDay()

  return (
    <Box
      backgroundColor='hsl(33, 100%, 98%)'
      borderRadius='10'
      marginTop='1rem'
      padding='1.2rem'
    >
      <Text as='h2' fontWeight='700' fontSize='1.8rem'>
        Spending - Last 7 days
      </Text>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='flex-end'
        my='1rem'
      >
        <Box>
          <Tooltip
            backgroundColor='hsl(25, 47%, 15%)'
            borderRadius='5px'
            padding='5px'
            placement='top'
            label='$52.36'
            aria-label='A tooltip'
          >
            <Box
              tabIndex='1'
              cursor='pointer'
              _hover={{ opacity: '0.8' }}
              px='1rem'
              py='15px'
              borderRadius='5px'
              backgroundColor={getWeekDay(1)}
            ></Box>
          </Tooltip>
          <Text
            as='p'
            textAlign='center'
            fontSize='0.8rem'
            color='hsl(28, 10%, 53%)'
          >
            mon
          </Text>
        </Box>
        <Box>
          <Tooltip
            backgroundColor='hsl(25, 47%, 15%)'
            borderRadius='5px'
            padding='5px'
            placement='top'
            label='$52.36'
            aria-label='A tooltip'
          >
            <Box
              tabIndex='2'
              cursor='pointer'
              _hover={{ opacity: '0.8' }}
              px='1rem'
              py='30px'
              borderRadius='5px'
              backgroundColor={getWeekDay(2)}
            ></Box>
          </Tooltip>
          <Text
            as='p'
            textAlign='center'
            fontSize='0.8rem'
            color='hsl(28, 10%, 53%)'
          >
            tue
          </Text>
        </Box>
        <Box>
          <Tooltip
            backgroundColor='hsl(25, 47%, 15%)'
            borderRadius='5px'
            padding='5px'
            placement='top'
            label='$52.36'
            aria-label='A tooltip'
          >
            <Box
              tabIndex='3'
              cursor='pointer'
              _hover={{ opacity: '0.8' }}
              px='1rem'
              py='45px'
              borderRadius='5px'
              backgroundColor={getWeekDay(3)}
            ></Box>
          </Tooltip>
          <Text
            as='p'
            textAlign='center'
            fontSize='0.8rem'
            color='hsl(28, 10%, 53%)'
          >
            wed
          </Text>
        </Box>
        <Box>
          <Tooltip
            backgroundColor='hsl(25, 47%, 15%)'
            borderRadius='5px'
            padding='5px'
            placement='top'
            label='$52.36'
            aria-label='A tooltip'
          >
            <Box
              tabIndex='4'
              cursor='pointer'
              _hover={{ opacity: '0.8' }}
              px='1rem'
              py='26px'
              borderRadius='5px'
              backgroundColor={getWeekDay(4)}
            ></Box>
          </Tooltip>
          <Text
            as='p'
            textAlign='center'
            fontSize='0.8rem'
            color='hsl(28, 10%, 53%)'
          >
            thu
          </Text>
        </Box>
        <Box>
          <Tooltip
            backgroundColor='hsl(25, 47%, 15%)'
            borderRadius='5px'
            padding='5px'
            placement='top'
            label='$52.36'
            aria-label='A tooltip'
          >
            <Box
              tabIndex='5'
              cursor='pointer'
              _hover={{ opacity: '0.8' }}
              px='1rem'
              py='20px'
              borderRadius='5px'
              backgroundColor={getWeekDay(5)}
            ></Box>
          </Tooltip>
          <Text
            as='p'
            textAlign='center'
            fontSize='0.8rem'
            color='hsl(28, 10%, 53%)'
          >
            fri
          </Text>
        </Box>
        <Box>
          <Tooltip
            backgroundColor='hsl(25, 47%, 15%)'
            borderRadius='5px'
            padding='5px'
            placement='top'
            label='$52.36'
            aria-label='A tooltip'
          >
            <Box
              tabIndex='6'
              cursor='pointer'
              _hover={{ opacity: '0.8' }}
              px='1rem'
              py='40px'
              borderRadius='5px'
              backgroundColor={getWeekDay(6)}
            ></Box>
          </Tooltip>
          <Text
            as='p'
            textAlign='center'
            fontSize='0.8rem'
            color='hsl(28, 10%, 53%)'
          >
            sat
          </Text>
        </Box>
        <Box>
          <Tooltip
            backgroundColor='hsl(25, 47%, 15%)'
            borderRadius='5px'
            padding='5px'
            placement='top'
            label='$52.36'
            aria-label='A tooltip'
          >
            <Box
              tabIndex='7'
              cursor='pointer'
              _hover={{ opacity: '0.8' }}
              px='1rem'
              py='25px'
              borderRadius='5px'
              backgroundColor={getWeekDay(0)}
            ></Box>
          </Tooltip>
          <Text
            as='p'
            textAlign='center'
            fontSize='0.8rem'
            color='hsl(28, 10%, 53%)'
          >
            sun
          </Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
