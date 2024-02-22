import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={1}
      m={1}
      size="sm"
      variant="solid"
      bgColor="blue.300"
      color="white"
      {...props}
    >
      {children}
    </CTag>
  );
};
