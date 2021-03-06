import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react'

export const ItemProject = ({title,type, thumbnail, desc, year,link}) => {
  return (
    <LinkBox>
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        _hover={{
          transform: 'translateY(4px)',
          boxShadow: 'lg',
        }}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
              thumbnail
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {type}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            <LinkOverlay href={link}>
            {title}
            </LinkOverlay>
          </Heading>
          <Text color={'gray.500'}>
            {desc}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars.githubusercontent.com/u/58660377?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Thomas</Text>
            <Text color={'gray.500'}>
              {year}
              </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    </LinkBox>
  );
}
