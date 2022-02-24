import ThreeBox from "../threejs/ThreeBox";
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
  SimpleGrid,
  Spacer
} from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { ItemProject } from '../components/ItemProject'
import { CalendarIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from '@chakra-ui/react';

export default function About() {
    //The weird pyramid stuff
  const canvas = useThree(ThreeBox);

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
      <Hero title={"BaryCubes."}/>

      <Main>
      <Center>
      <Footer>
        <Text>Made with love by Thomas ❤️ </Text>
      </Footer>
      </Center>
      </Main>
      <DarkModeSwitch />
    </Container>
  
      </>
    );
  }
