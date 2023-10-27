import React from "react";
import { Flex } from "@chakra-ui/react";

const FlexContainer = ({ children, ...props }) => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} {...props}>
      {children}
    </Flex>
  );
};

export default FlexContainer;
