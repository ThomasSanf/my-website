import { Flex, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.900', dark: 'gray.900' }

  const color = { light: 'white', dark: 'white' }
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
