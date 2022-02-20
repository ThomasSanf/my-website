import { Flex, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { dark: 'gray.900', light: 'gray.50'  }

  const color = { dark: 'white', light: 'black'  }
  return (

    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      color={color[colorMode]}
      opacity={1}
      {...props}
    />
  )
}
