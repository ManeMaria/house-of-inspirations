import { Flex } from '@chakra-ui/react';
import React from 'react';
import { PreviewCard } from '../PreviewCard';

export const ListCards: React.FC = () => {
  return (
    <Flex justifyContent="center" my="1rem">
      <PreviewCard />
    </Flex>
  );
};
