import {
  Badge,
  Box,
  chakra,
  Code,
  Stack,
  Text,
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
import { CalendarIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";

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
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
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
              Arthur Et Nathalie
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              <Code>July 2019</Code>
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
                        A showcase website for a glasses store located in a charming city called <Badge>Périgueux</Badge>,
           it was made in 2020. I
          built it using wordpress. Got a traffic over <Badge>700</Badge>
          users per day.
              </Text>
            </VStack>
    
          </Stack>
          <Text>Platform</Text>
            <Code>Wordpress</Code>

            <Text>Languages used</Text>
            <Code>HTML - CSS - JavaScript - SQL - PHP</Code>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Visit their website
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}