import { Box, chakra, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import bgCss from '../../assets/images/css-logo.png';

export const Banner = () => {
  return (
    <SectionWrapper>
      <Flex
        sx={{
          h: '100%',
          w: '100%',
          bg: `url(${bgCss.src}) no-repeat`,
          bgSize: ['60%', '40%'],
          bgPos: ['80% 30%', 'right'],
          boxShadow: 'inset 0 0 10rem 10rem',
          color: 'gray.800',
        }}
      >
        <Box h="100%" py="5rem" color="white" ml={['0', '20%']}>
          <Heading fontSize={['7rem', '8rem']}>
            House <br /> Of
            <br /> Inspiration
          </Heading>
          <Flex maxW="50rem" mt="10vh" gap="0.5rem" alignItems="start">
            <chakra.span h="0.15rem" w="3rem" bg="gray.100" mt="0.8rem" />
            <Heading as="h3" size="md" fontWeight="normal">
              Css animation repository.
              <br />
              The purpose of this website is to accumulate relevant css content found on the web
            </Heading>
          </Flex>
        </Box>
      </Flex>
    </SectionWrapper>
  );
};
