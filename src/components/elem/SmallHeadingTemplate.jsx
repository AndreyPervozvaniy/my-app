import React from "react";
import { Stack, Heading, Text, Container } from "@chakra-ui/react";
function SmallHeading({ text, text1, ...props }) {
  return (
    <Stack spacing={4} as={Container} maxW={"full"} textAlign={"center"}{...props}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        
      >
        {text}
      </Heading>
      <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
        {text1}
      </Text>
    </Stack>
  );
}
export default SmallHeading;
