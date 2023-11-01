import React from "react";
import { Heading, Text } from "@chakra-ui/react";

function CustomHeading({
  text,
  text2,
  headingFontSize,
  textFontSize,
  textFontWeight,
  headingFontWeight,
  color,
  ...props
}) {
  return (
    <Heading
      fontWeight={500}
      fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
      lineHeight={"110%"}
      textAlign={"center"}
      textTransform="uppercase"
      p={2}
      {...props}
    >
      {text}
      <br />
      <Text
        as={"span"}
        color={color || "#3f48cc"}
        fontSize={textFontSize || { base: "2xl", sm: "4xl", md: "6xl" }}
        fontWeight={textFontWeight || 400}
      >
        {text2}
      </Text>
    </Heading>
  );
}

export default CustomHeading;
