import {
    Badge,
    Box,
    chakra,
    Code,
    Stack,
    Text,
    Link,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import { Hero } from '../components/Hero'
  import { Container } from '../components/Container'
  import { Main } from '../components/Main'
  import { DarkModeSwitch } from '../components/DarkModeSwitch'
  import { Footer } from '../components/Footer'
  import { ArrowBackIcon, CalendarIcon, EmailIcon, PhoneIcon, ExternalLinkIcon } from "@chakra-ui/icons";
  import { IconButton } from '@chakra-ui/react'
  import NextLink from "next/link"
  
  export default function Simple() {
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://www.restaurant-tampopo.fr/wp-content/uploads/2012/06/DSC00323.jpg'
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text">
                Tampopo タンポポ
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                <Code>January 2022</Code>
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('white.500', 'white.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                          Still on progress...
                </Text>
              </VStack>
      
            </Stack>
            <Text>Platform</Text>
              <Code>Wordpress</Code>
  
              <Text>Languages used</Text>
              <Code>HTML - CSS - JavaScript - SQL - PHP</Code>
  
            <NextLink href='projects' passHref>
            <IconButton
             aria-label='Go back'
             icon={<ArrowBackIcon/>} />
            </NextLink>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }