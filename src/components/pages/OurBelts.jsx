import React from "react";
import Navbar from "../navigation/Navbar";
import Waterlogo from "../../assets/img/watericon.png";
import { Box, Flex } from "@chakra-ui/react";

const OurBelts = () => {
  return (
    <>
      <Navbar />
      <Box
        position="absolute"
        opacity="50%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        // backgroundPosition="center center"
        h="100vh"
        w="100vw"
        zIndex="-1"
      />{" "}
    </>
  );
};

export default OurBelts;
