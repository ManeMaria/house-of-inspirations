import Head from 'next/head';
import React from 'react';
import { chakra } from '@chakra-ui/react';

export const Layout = ({ children }: ChildrenTypes) => {
  return (
    <>
      <Head>
        <title>House of inspiration</title>
        <meta name="description" content="Repo of styles" />
      </Head>
      <chakra.main w="100%">{children}</chakra.main>
    </>
  );
};
