import { chakra, Container } from '@chakra-ui/react';

export const SectionWrapper = ({ children }: ChildrenTypes) => {
  return (
    <chakra.section w="100%">
      <Container maxW="140rem" centerContent>
        {children}
      </Container>
    </chakra.section>
  );
};
