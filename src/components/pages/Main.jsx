import React, { useState } from "react";
import Navbar from "../navigation/Nav";
import {
  Text,
  Flex,
  Box,
  Accordion,
  Center,
  Stack,
  List,
  ListItem,
  ListIcon,
  Heading,
  useBreakpointValue,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
  Container,
  AccordionIcon,
} from "@chakra-ui/react";
import { useScrollEvent } from "../../hooks";
import video from "../../assets/video/asd.mp4";
import { CheckIcon } from "@chakra-ui/icons";
import CarouselTemplate from "../elem/Carousel";
import Elevator from "../elem/Elevator";
import { Advantage } from "../../utils";
import { Class } from "../../utils";
import { Question } from "../../utils";
const Card = ({ heading, description, icon }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      bg={"white"}
      p={5}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading fontSize="xl" fontWeight={"bold"} textAlign={"center"}>
            {heading}
          </Heading>
          <Text mt={1} fontSize={"lg"} textAlign={"center"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
const Main = () => {
  const [isVisibleBottomButton] = useScrollEvent();
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  return (
    <>
      <Navbar />
      <Elevator />
      <Flex fontFamily="Sofia Sans Condensed " color="#000" flexDir={"column"}>
        <Flex
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
          </video>
          <Flex
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            pos="absolute"
            opacity="90%"
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
            <Flex
              h="100%"
              p={12}
              flexDirection="column"
              justifyContent="center"
              alignContent="center"
            >
              <Stack spacing={6} as={Container} maxW={"5xl"}>
                <Heading
                  fontSize={{ base: "2xl", sm: "3xl" }}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  Чому саме Yamasaki Academy?
                </Heading>
                <Text
                  color={"gray.600"}
                  fontSize={{ base: "lg", sm: "xl" }}
                  textAlign={"center"}
                >
                  Практикуючи джиу-джитсу у стінах нашої академії, ви отримаєте:
                </Text>
              </Stack>
              <Container maxW={"5xl"} mt={12}>
                <Flex flexWrap="wrap" gridGap={6} justify="center">
                  {Advantage.map((card, index) => (
                    <Card
                      key={index}
                      heading={card.heading}
                      icon={card.icon}
                      description={card.description}
                    />
                  ))}
                </Flex>
              </Container>
            </Flex>
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
            <Center py={6} w={"100%"}>
              <Flex flexWrap="wrap" justify="center">
                {Class.map((card, index) => (
                  <Box
                    key={index}
                    margin={"0 2rem"}
                    maxW={"330px"}
                    w={"full"}
                    bg={"white"}
                    rounded={"md"}
                    overflow={"hidden"}
                  >
                    <Stack
                      textAlign={"center"}
                      p={6}
                      color={"gray.800"}
                      align={"center"}
                    >
                      <Text
                        fontSize={"md"}
                        fontWeight={"bold"}
                        bg={"blue.50"}
                        p={2}
                        px={3}
                        color={"#3f48cc"}
                        rounded={"full"}
                      >
                        {card.heading}
                      </Text>
                      <Stack
                        direction={"row"}
                        align={"center"}
                        justify={"center"}
                      >
                        <Text fontSize={"2xl"} fontWeight={800}>
                          {card.title}
                          <Text color={"#3f48cc"} fontSize={"lg"}>
                            {card.age}
                          </Text>
                        </Text>
                      </Stack>
                    </Stack>
                    <Box bg={"gray.50"} px={6} py={10} borderRadius={"15px"}>
                      <List spacing={3}>
                        {card.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex}>
                            <ListIcon as={CheckIcon} color="#3f48cc" mr={2} />
                            {feature}
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </Center>
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
            <Accordion
              w="90%"
              allowToggle
              justifyContent="center"
              alignItems="center"
            >
              {Question.map((faq, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton padding="5px" width="100%">
                      <Flex
                        color="black"
                        fontSize="22px"
                        fontWeight="500"
                        backgroundColor="white"
                        padding="5px"
                        justifyContent="space-between"
                        alignItems="center"
                        flex="1"
                        borderBottom="1px solid grey"
                      >
                        <Text padding="10px">{faq.question}</Text>
                        <AccordionIcon />
                      </Flex>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text padding="0 10px" fontSize="18px">
                      {faq.answer}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
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
        </Flex>{" "}
      </Flex>
    </>
  );
};

export default Main;
