import { Flex } from '@chakra-ui/react';
import React from 'react';
import { PreviewCard } from '../PreviewCard';
import img1 from '../../assets/images/img-element-1.png';

export const ListCards: React.FC = () => {
  return (
    <Flex justifyContent="center" my="1rem">
      <PreviewCard
        title="First letter uppercase"
        href="/style-css/Element-1"
        linkSocialMedia="/"
        pathGif={img1}
      />
    </Flex>
  );
};
