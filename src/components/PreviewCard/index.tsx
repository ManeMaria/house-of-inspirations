import { Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react';
import { AiFillInstagram } from 'react-icons/ai';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type PreviewCardType = {
  pathGif?: string;
  title?: string;
  description?: string;
  linkSocialMedia?: string;
};
export const PreviewCard: React.FC<PreviewCardType> = ({
  pathGif = '/',
  description,
  title = 'Título, se houver',
  linkSocialMedia = '',
}) => {
  return (
    <Grid
      templateRows="60% 5% 10% 5%"
      borderRadius={10}
      boxShadow="10px 10px 20px"
      color="blue.600"
      rowGap="1rem"
      p="3rem"
      h="45rem"
      w="40rem"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '0px 0px 30px',
      }}
      transition="all 0.3s"
    >
      <GridItem border="solid 1px" borderColor="#3E4C69" borderRadius={10}>
        <Image src={pathGif} alt="gif" width="100%" height="100%" />
      </GridItem>
      <GridItem>
        <Heading as="h3" size="lg">
          {title}
        </Heading>
      </GridItem>
      <GridItem>{description && <Text>{description}</Text>}</GridItem>
      <GridItem>
        <Link href={linkSocialMedia}>
          <Icon as={AiFillInstagram} color="blue.500" />
        </Link>
      </GridItem>
    </Grid>
  );
};
