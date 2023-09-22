import React, { useState } from "react";
import { Box, Text, Link, Flex, Center } from "@chakra-ui/react";

const SlideshowGallery = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  const slideStyles = [
    { background: "red" },
    { background: "blue" },
    { background: "green" },
    { background: "yellow" },
  ];

  const renderSlides = () => {
    return slideStyles.map((style, index) => (
      <Box
        key={`slide-${index}`}
        h="100%"
        w="100%"
        background={style.background}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontSize="3em"
          fontWeight="200"
          letterSpacing="-0.06em"
          wordSpacing="0.2em"
        >
          {index === 0 ? "PURE " : `Slide ${index + 1}`}
          <b>CSS</b> SLIDESHOW
        </Text>
        {index === 0 && (
          <Text>
            Responsive Slideshow Gallery created using CSS only
            <br />
            by Roko
          </Text>
        )}
      </Box>
    ));
  };

  const renderBullets = () => {
    return slideStyles.map((style, index) => (
      <Link
        key={`bullet-${index}`}
        href={`#s${index + 1}`}
        fontSize="2em"
        mx="2"
        borderRadius="50%"
        color="rgba(0,0,0,0.8)"
        textDecoration="none"
        onClick={() => handleSlideChange(index + 1)}
        bg={
          activeSlide === index + 1
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0.5)"
        }
        _hover={{ bg: "rgba(255, 255, 255, 0.7)" }}
      >
        {index + 1}
      </Link>
    ));
  };

  const renderPrevNextLinks = () => {
    const prevSlide = activeSlide === 1 ? slideStyles.length : activeSlide - 1;
    const nextSlide = activeSlide === slideStyles.length ? 1 : activeSlide + 1;

    return (
      <Center pos="absolute" bottom="5%">
        <Flex>
          <Link
            href={`#s${prevSlide}`}
            fontSize="2em"
            mx="2"
            borderRadius="50%"
            color="rgba(0,0,0,0.8)"
            textDecoration="none"
            bg="white"
            lineHeight="60px"
            textAlign="center"
            opacity="0.7"
            transition="0.3s"
            transform="translateY(-50%)"
            _hover={{ opacity: 1 }}
          >
            &lt;
          </Link>
          <Link
            href={`#s${nextSlide}`}
            fontSize="2em"
            mx="2"
            borderRadius="50%"
            color="rgba(0,0,0,0.8)"
            textDecoration="none"
            bg="white"
            lineHeight="60px"
            textAlign="center"
            opacity="0.7"
            transition="0.3s"
            transform="translateY(-50%)"
            _hover={{ opacity: 1 }}
          >
            &gt;
          </Link>
        </Flex>
      </Center>
    );
  };

  return (
    <Box pos="relative" h="100vh" overflow="hidden">
      <Box
        h="100%"
        whiteSpace="nowrap"
        fontSize="0"
        transition="0.8s"
        overflow="hidden"
      >
        {renderSlides()}
      </Box>
      {renderPrevNextLinks()}
      <Box pos="absolute" bottom="5%" w="100%" textAlign="center">
        {renderBullets()}
      </Box>
    </Box>
  );
};

export default SlideshowGallery;
