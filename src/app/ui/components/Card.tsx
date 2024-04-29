'use client';

import { Character } from '@/app/common/types';
import { Heading, Text, Button, Flex } from '@chakra-ui/react';

interface CardProps {
  cardData: Character;
};

export default function Card({ cardData }: CardProps) {
  const {name, type, bio, wiki} = cardData;

  return (
    <Flex
      as='article'
      direction='column'
      alignItems='flex-start'
      boxSizing='border-box'
      basis='28%'
      padding='3rem 5rem'
      backgroundColor={type}
      color='white'
      borderRadius={{
        hero: ['8px 8px 0 0', null, '8px 0 0 8px'],
        villain: '',
        heroine: ['0 0 8px 8px', null, '0 8px 8px 0'],
      }[type] || '0'}
    >
      <Heading
        as='h2'
        size='3xl'
        fontWeight='700'
        textTransform='uppercase'
        mb='default'
      >
        {name}
      </Heading>

      <Text mb='6rem' flexGrow='1'>
        {bio}
      </Text>

      <Button
        as='a'
        href={wiki}
        padding='1rem 3rem'
        fontSize='inherit'
        boxSizing='content-box'
        borderRadius='2.4rem'
        color={type}
      >
        Learn more
      </Button>
    </Flex>
  );
}
