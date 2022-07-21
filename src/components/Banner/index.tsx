import { Box, chakra, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SectionWrapper } from '../SectionWrapper';
import bgCss from '../../assets/images/css-logo.png';

export const Banner = () => {
  return (
    <SectionWrapper>
      <Flex w="100%" justifyContent="center">
        <Box h="100%" py="5rem" pl="6rem">
          <Heading fontSize="5rem">
            House <br /> Of
            <br /> Inspiration
          </Heading>
          <Flex maxW="30rem" mt="10vh" gap="0.5rem" alignItems="start">
            <chakra.span h="0.15rem" w="3rem" bg="gray.100" mt="0.5rem" />
            <Heading as="h3" size="md" fontWeight="normal">
              Css animation repository.
              <br />
              The purpose of this website is to accumulate relevant css content found on the web
            </Heading>
          </Flex>
        </Box>
        <Box maxW="40rem" w="100%" h="100vh" transform="rotate(15deg)">
          <Box
            sx={{
              h: '100%',
              w: '80%',
              bg: `url(${bgCss.src}) no-repeat`,
              bgSize: '110%',
              bgPos: 'left center',
              boxShadow: 'inset 0 0 10rem 10rem',
              color: 'gray.800',
            }}
          />
        </Box>
      </Flex>
    </SectionWrapper>
  );
};
