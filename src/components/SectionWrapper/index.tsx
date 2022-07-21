import { chakra } from '@chakra-ui/react';

export const SectionWrapper = ({ children }: ChildrenTypes) => {
  return <chakra.section maxW="129rem">{children}</chakra.section>;
};
