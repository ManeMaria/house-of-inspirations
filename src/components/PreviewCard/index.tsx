import { Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react';
import { AiFillInstagram } from 'react-icons/ai';
import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import bgCss from '../../assets/images/css-logo.png';

type PreviewCardType = {
  pathGif?: StaticImageData;
  title: string;
  description?: string;
  linkSocialMedia?: string;
  href: string;
};
export const PreviewCard: React.FC<PreviewCardType> = ({
  pathGif,
  description,
  title = 'Título, se houver',
  linkSocialMedia = '',
  href = '/',
}) => {
  const { push } = useRouter();
  return (
    <Grid
      templateRows="60% auto auto auto"
      borderRadius={10}
      boxShadow="10px 10px 20px"
      color="primary.600"
      rowGap="1rem"
      p="3rem"
      minH="35rem"
      w="30rem"
      _hover={{
        transform: 'translateY(-5px)',
        color: 'white',
        boxShadow: '0px 0px 30px #475778',
      }}
      transition="all 0.3s"
      onClick={() => push(href)}
      cursor="pointer"
    >
      <GridItem border="solid 1px" borderRadius={10} overflow="hidden" placeItems="center">
        <Image src={pathGif || bgCss} alt="gif" layout="responsive" placeholder="blur" priority />
      </GridItem>
      <GridItem>
        <Heading as="h3" size="md">
          {title}
        </Heading>
      </GridItem>
      {description && (
        <GridItem maxW="100%">
          <Text fontSize="1.4rem">{description}</Text>
        </GridItem>
      )}
      <GridItem>
        <Link href={linkSocialMedia}>
          <Icon w="3rem" h="3rem" as={AiFillInstagram} />
        </Link>
      </GridItem>
    </Grid>
  );
};
