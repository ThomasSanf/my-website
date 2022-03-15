import { Flex, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const Hero = ({ title }) => (
  <motion.div initial="hidden" animate="visible" variants={{
    hidden:{
      scale: .8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: .2
      }
    },
  }}>
  <Flex justifyContent="" alignItems="center" height="100vh">
    <Heading
      fontSize="10vw"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
    >
      {title}
    </Heading>
  </Flex>
  </motion.div>

)

Hero.defaultProps = {
  title: 'Sanfourche.',
}
