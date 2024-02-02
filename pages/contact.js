import ThreeTriangle from "../threejs/ThreeTriangle";
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
import { CalendarIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

export default function About() {
    //The argument for useThree is your threejs main class
    const canvas = useThree(ThreeTriangle);

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
      <Hero title={"contact."}/>
      <Main>
      <Center>   
       <Code fontSize='xl'>    <EmailIcon/><Link to='javascript:void(0)'
      onClick={() => window.location = 'contact@algobox.fr'}>--Mail: contact@algobox.fr</Link></Code>
      </Center>
      <Center>   
        <Code fontSize='xl'><CalendarIcon/><Link href="https://www.instagram.com/__shenyang/">--Instagram: @__shenyang</Link></Code>
      </Center>
      <Center>   
        <Code fontSize='xl'><PhoneIcon></PhoneIcon><Link href="tel:+886973624201">--Phone: +886973624201</Link></Code>
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
