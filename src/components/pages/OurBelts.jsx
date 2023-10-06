import React from "react";

import Waterlogo from "../../assets/img/watericon.png";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../navigation/Nav";
const OurBelts = () => {
  return (
    <>
      <Navbar />
      {/* <Box
        position="absolute"
        opacity="50%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        // backgroundPosition="center center"
        h="100vh"
        w="100vw"
        zIndex="-1"
      />{" "} */}
      <Flex h={"100vh"}></Flex>
      <Flex h={"100vh"}></Flex>
    </>
  );
};

export default OurBelts;
