import React from "react";
import { Flex } from "@chakra-ui/react";

function FlexContainer  ({ children, ...props }) {
  return (
    <Flex {...props} justifyContent={"center"} alignItems={"center"} >
      {children}
    </Flex>
  );
};
 
export default FlexContainer;
