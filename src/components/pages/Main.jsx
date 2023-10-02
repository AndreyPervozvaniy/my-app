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
      <Flex fontFamily="Sofia Sans Condensed " color="#000" flexDir={"column"}>
        <Flex
          // // top="0"
          // zIndex="1"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          w="100%"
          h="100vh"
        >
          <video
            autoPlay
            loop
            muted
            style={{
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
        </Flex>
        <Flex w="100%" justifyContent="center" alignItems="center">
          <Flex overflow="hidden">
            <AdvantageTemplate />
          </Flex>{" "}
        </Flex>{" "}
        <Flex
          alignItems="center"
          textAlign="center"
          w="100%"
          justifyContent="center"
        >
          <Flex
            overflow="hidden"
            fontSize="20px"
            fontWeight="500"
            letterSpacing="4px"
            justifyContent="space-between"
            w="100%"
            flexDirection="column"
          >
            <Text textTransform="uppercase" fontSize="30px" fontWeight="bold">
              Наші класи
            </Text>
            <CardTemplate />
          </Flex>
        </Flex>
        <Flex w="100%" overflow="hidden">
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
          alignItems="center"
          justifyContent="center"
          w="100%"
          overflow="hidden"
          flexDirection="column"
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
