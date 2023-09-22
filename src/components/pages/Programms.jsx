import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../navigation/Navbar";
import Waterlogo from "../../assets/img/watericon.png";
import { Box, Flex, Stack, Image, Text, HStack } from "@chakra-ui/react";
import { slides } from "../../content/slidescontent";
const Programms = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      // bg: "black",
    },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 37) {
        prevSlide();
      } else if (event.keyCode === 39) {
        nextSlide();
      }
    },
    [prevSlide, nextSlide]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  // const SLIDES_INTERVAL_TIME = 5000;
  // const ANIMATION_DIRECTION = "right";
  // useEffect(() => {
  //   const prevSlide = () => {
  //     setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  //   };

  //   const nextSlide = () => {
  //     setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  //   };

  //   const automatedSlide = setInterval(() => {
  //     ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
  //   }, SLIDES_INTERVAL_TIME);
  //   return () => clearInterval(automatedSlide);
  // }, [slidesCount]);
  return (
    <>
      <Navbar />
      <Box
        position="absolute"
        opacity="50%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        h="100vh"
        w="100vw"
        zIndex="-1"
      />{" "}
      <Flex
        h="100vh"
        // w="full"
        // bg="#edf3f8"
        // _dark={{
        //   bg: "#3e3e3e",
        // }}
        // p={10}
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" pos="relative" overflow="hidden" h="100vh">
          <Flex h="400px" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box
                key={`slide-${sid}`}
                boxSize="full"
                shadow="md"
                flex="none"
                h="100vh"
              >
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
                <Stack
                  p="8px 12px"
                  pos="absolute"
                  bottom="24px"
                  textAlign="center"
                  w="full"
                  backgroundColor="rgba(0, 0, 0, 0.8)"
                  mb="8"
                  color="white"
                >
                  <Text fontSize="2xl">{slide.label}</Text>
                  <Text fontSize="lg">{slide.description}</Text>
                </Stack>
              </Box>
            ))}
          </Flex>
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({
              length: slidesCount,
            }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={["7px", null, "15px"]}
                m="0 2px"
                bg={
                  currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                }
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{
                  bg: "blackAlpha.800",
                }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

export default Programms;
