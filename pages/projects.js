import ThreeTetra from "../threejs/ThreeTetra";
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
  const canvas = useThree(ThreeTetra);

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
      <Hero title={"my projects."}/>

      <Main>
      <SimpleGrid columns={{base:1,  lg: 2}} spacing={10}>
      <ItemProject title={"Tampopo"} 
      thumbnail={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
      type="Restaurant Website"
      year={2022}
      desc={"A website made for one of the best sushi chef in France :) "}></ItemProject>
      <ItemProject title={"Chapardeurs"} 
      thumbnail={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
      type={"Cat-Hotel Website"}
      year={2021}
      desc={"I had to watch 300 different cat pictures to build this cat hotel website"}></ItemProject>
      <ItemProject title={"FeelLing"}
       thumbnail={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
       type={"Restaurant Website"}
       year={2021}
       desc={"A website for the best cantonese restaurant of Paris (They're the best)"}>
       </ItemProject>
       <ItemProject title={"JungleWorks"}
       thumbnail={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
       type={"Ticket System"}
       year={2020}
       desc={"A handmade javascript ticketing system made for a food delivery app"}>
       </ItemProject>
       <ItemProject title={"Montekana"}
       thumbnail={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
       type={"Tea Shop Website"}
       year={2020}
       desc={"A website for a very cosy Tea Shop in Bayonne (They're so kind)"}>
       </ItemProject>
      <ItemProject title={"ArthurNathalie"} 
      thumbnail={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
      type={"Eye-Wear Website"}
      year={2019}
      desc={"A website designed for a super kind and joyful glasses seller called Arthur"}
      ></ItemProject>
      </SimpleGrid>
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
