import ThreeDode from "../threejs/ThreeDode";
import { useThree } from "../hooks/useThree";
import {AbsoluteCenter, Heading, Link} from "@chakra-ui/react"
import { Center, Square, Circle } from '@chakra-ui/react'
import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'

export default function About() {
    //The argument for useThree is your threejs main class
    const canvas = useThree(ThreeDode);
    return (
      <>
          <div 
    ref={canvas} 
    style={{ 
      height: "100vh",
      width:"100vw",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: -1,
      }}
      ></div>
      <Container height="100vh">
      <Hero title={"about."}/>
      <Main>
      <Center>   
        <Text>I am a 22 years old full stack developer based in France 🇫🇷</Text>
      </Center>
      <Center>   
        <Text>I have been working as a freelance developer since 2019</Text>
      </Center>
      <Center>   
        <Text>I can talk with you in <Code>English 🇬🇧</Code> or <Code>Chinese 🇨🇳</Code> or <Code>French 🇫🇷</Code> or <Code>Spanish 🇪🇸</Code>.</Text>
      </Center>
      <Center>
      <Footer>
        <Text>Made with love by Thomas Sanfourche ❤️ </Text>
      </Footer>
      </Center>
      </Main>
      <DarkModeSwitch />
    </Container>
  
      </>
    );
  }
