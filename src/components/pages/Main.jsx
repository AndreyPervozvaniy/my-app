import React from "react";
import Navbar from "../navigation/Navbar";
import { Button, Text, Fade, Flex, Box } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { useScrollEvent } from "../../hooks";
import video from "../../assets/video/video.mp4";
import AdvantageTemplate from "../elem/AdvantageTemplate.tsx";
import CardTemplate from "../elem/CardTemplate.tsx";
import AccordionTemplate from "../elem/AccordionTemplate";
import Waterlogo from "../../assets/img/watericon.png";
import CarouselTemplate from "../elem/CarouselTemplate.tsx";
import FooterTemplate from "../elem/FooterTemplate.tsx";
const Main = () => {
  const [isVisibleBottomButton] = useScrollEvent();
  return (
    <>
      <Navbar />
      <Fade in={isVisibleBottomButton}>
        <Button
          className="fa fa-arrow-up"
          aria-lavel="topButton"
          zIndex="12"
          position="fixed"
          right={{ base: "5px", xl: "10" }}
          bottom="55px"
          w={50}
          opacity="40%"
          h={50}
          borderRadius="full"
          colorScheme="gray"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        ></Button>
      </Fade>{" "}
      {/* <Box
        position="fixed"
        opacity="10%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        h="100vh"
        w="100vw"
        zIndex="-1"
      /> */}
      <Flex
        fontFamily="Sofia Sans Condensed "
        color="#000"
        // background="#222"
        // padding="0"
        // margin="0"
      >
        <Flex
          // // backgroundColor="#fff"
          // color="#000"
          top="0"
          zIndex="1"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          pos="absolute"
          w="100%"
          h="100vh"
          // overflow="hidden"
          // clip="rect(0, auto, auto, 0)"
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={video} type="video/mp4" />
            {/* Дополнительные источники для поддержки разных браузеров */}
          </video>
          <Flex
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            pos="absolute"
            opacity="70%"
          >
            <Text
              fontSize="30px"
              color="white"
              fontWeight="500"
              letterSpacing="4px"
            >
              YAMASAKI ACADEMY DNIPRO <br />
              Почни свій шлях у світ Джіу-Джітсу разом з нами!
            </Text>
          </Flex>{" "}
          {/* <ArrowDownIcon
            boxSize={8}
            justifyContent="center"
            alignSelf="flex-end"
          /> */}
        </Flex>
        <Flex top="100vh" zIndex="2" pos="absolute" w="100%" h="100vh">
          <Flex
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <AdvantageTemplate />
          </Flex>{" "}
        </Flex>{" "}
        <Flex
          top="200vh"
          zIndex="4"
          alignItems="center"
          textAlign="center"
          padding="100px"
          pos="absolute"
          w="100%"
          h="100vh"
          justifyContent="center"
        >
          <Flex
            overflow="hidden"
            fontSize="20px"
            fontWeight="500"
            letterSpacing="4px"
            justifyContent="space-between"
            w="100%"
            textTransform="uppercase"
            flexDirection="column"
          >
            <Text textTransform="uppercase" fontSize="30px" fontWeight="bold">
              Наші класи
            </Text>
            <CardTemplate />
          </Flex>
        </Flex>
        <Flex
          top="300vh"
          zIndex="6"
          pos="absolute"
          w="100%"
          h="100vh"
          overflow="hidden"
        >
          <Flex
            overflow="hidden"
            fontSize="20px"
            fontWeight="500"
            alignItems="center"
            flexDirection="column"
            w="100%"
          >
            <Flex justifyContent="center">
              <Text letterSpacing="4px" fontSize="30px" fontWeight="bold">
                Ваші запитання – наші відповіді!
              </Text>
            </Flex>
            <AccordionTemplate />
          </Flex>
        </Flex>
        <Flex
          // backgroundColor="black"
          // color="rgb(255, 255, 255)"
          top="400vh"
          zIndex="7"
          alignItems="center"
          // textAlign="center"
          // padding="100px"
          justifyContent="center"
          pos="absolute"
          w="100%"
          h="100vh"
          overflow="hidden"
          flexDirection="column"
          // clip="rect(0, auto, auto, 0)"
          // boxShadow="inset 0 1px 80px rgba(0, 0, 0, 0.14)"
        >
          <Flex overflow="hidden" w="100%">
            <CarouselTemplate />
          </Flex>{" "}
          <FooterTemplate />
        </Flex>{" "}
      </Flex>
    </>
  );
};

export default Main;
