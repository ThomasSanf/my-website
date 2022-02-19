import ThreeApp from "../threejs/ThreeApp";
import { useLayoutEffect } from "react";
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


export default function Home() {
  //The argument for useThree is your threejs main class
  const canvas = useThree(ThreeApp);

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
    <Center><Hero></Hero></Center>
    <Main>
    <Center>   
      <Text>Website made using <Code>Next.js</Code> + <Code>chakra-ui</Code> + <Code>Three.js</Code>.</Text>
      </Center>
    <Center>
    <Footer>
      <Text>Made with love by Thomas ❤️</Text>
    </Footer>
    </Center>
    </Main>
    <DarkModeSwitch />
  </Container>

    </>
  );
}
