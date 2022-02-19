import { Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const Main = (props) => (
  <motion.div initial="hidden" animate="visible" variants={{
    hidden:{
      scale: .8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: .6
      }
    },
  }}>
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    mt="-50vh"
    pt="8rem"
    px="1rem"
    {...props}
  />
  </motion.div>
)
