import React from "react";
import { Button } from "@chakra-ui/react";

function ButtonBlock({
  label,
  onClick,
  colorScheme = "gray",
  bgColor = "gray.100",
}) {
  return (
    <Button
      rounded="full"
      size="lg"
      fontWeight="normal"
      px={6}
      colorScheme={colorScheme}
      bg={bgColor}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default ButtonBlock;
