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
  import imgMontekana from '../public/images/projects/montekana.png'
  
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
                'https://www.bayonneshopping.com/wp-content/uploads/2021/08/montekana-568x568.jpg'
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
                Montekana
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                <Code>September 2020</Code>
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
                          A website created for a furniture store located in Bayonne in the city of Biarritz,
             it was made in 2020. It was
            built using wordpress. I did it as a volunteering project for one of my family member. The website can no longer be viewed.
                </Text>
              </VStack>
      
            </Stack>
            <Text>Platform</Text>
              <Code>Wordpress</Code>
  
              <Text>Languages used</Text>
              <Code>HTML - CSS - JavaScript - SQL - PHP</Code>

  
            <NextLink href='projects' passHref>
            <Button
              rounded={'none'}
              w={'full'}
              mt={0}
              size={'lg'}
              py={'7'}
              bgGradient="linear(to-l, #7928CA, #000000)"
              
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
  
                Check my other projects <ArrowBackIcon mx='2px' />
            </Button>
            </NextLink>
  
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }
