'use client';

import Card from '@/app/ui/components/Card';
import { CharacterCollection, Character } from '@/app/common/types';
import { Flex } from '@chakra-ui/react';

interface CardsProps {
  characterCollection: CharacterCollection;
};

export default function Cards({ characterCollection }: CardsProps) {

  return (
    <Flex
      as='main'
      align='center'
      boxSizing='border-box'
      minH={'100%'}
      p={['50px', '70px', '20px']}
    >
      <Flex
        as='section'
        direction={['column', null, 'row']}
        align={['center', null, 'stretch']}
        justifyContent={[null, null, 'center']}
      >
        {
          characterCollection.map((character: Character) => (
            <Card key={character.id} cardData={character} />
          ))
        }
      </Flex>
    </Flex>
  );
}
