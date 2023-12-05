import React from "react";
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
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
  Container,
  AccordionIcon,
} from "@chakra-ui/react";
import video from "../../assets/video/newtitlelogo.MOV";
import { CheckIcon } from "@chakra-ui/icons";
import CarouselTemplate from "../elem/Carousel";
import Elevator from "../elem/Elevator";
import { Advantage } from "../../utils";
import { Class } from "../../utils";
import { Question } from "../../utils";
import SmallCentered from "../elem/Footer";

import FlexContainer from "../elem/FlexContainer";
import SmallHeading from "../elem/SmallHeadingTemplate";
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
        <FlexContainer
          w={16}
          h={16}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </FlexContainer>
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
  return (
    <>
      <Navbar />
      <Elevator />
      <Flex fontFamily="Sofia Sans Condensed " color="#000" flexDir={"column"}>
        <FlexContainer textAlign="center" w="100%" h="100vh">
          <video
            loading="eager"
            autoPlay
            title="title video"
            playsInline
            muted
            style={{
              width: "100%",
              height: "auto",
              
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </FlexContainer>
        <FlexContainer w="100%">
          <Flex overflow="hidden">
            <FlexContainer h="100%" p={12} flexDirection="column">
              <SmallHeading
                text={"Чому саме Yamasaki Academy?"}
                text1={
                  "Практикуючи джиу-джитсу у стінах нашої академії, ви отримаєте:"
                }
              />
              <Container maxW={"5xl"} mt={12}>
                <Flex justify={"center"} flexWrap="wrap" gridGap={6}>
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
            </FlexContainer>
          </Flex>{" "}
        </FlexContainer>{" "}
        <FlexContainer textAlign="center" w="100%" flexDir="column">
          {" "}
          <SmallHeading text={"Наші класи"} />
          <Flex
            overflow="hidden"
            fontSize="20px"
            fontWeight="500"
            justifyContent="space-between"
            w="100%"
            flexDirection="column"
          >
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
                        color={card.color}
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
                          <Text color={card.color} fontSize={"lg"}>
                            {card.age}
                          </Text>
                        </Text>
                      </Stack>
                    </Stack>
                    <Box bg={"gray.50"} px={6} py={10} borderRadius={"15px"}>
                      <List spacing={3}>
                        {card.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex}>
                            <ListIcon
                              as={CheckIcon}
                              color={card.color}
                              mr={2}
                            />
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
        </FlexContainer>
        <Flex w="100%" overflow="hidden">
          <FlexContainer
            overflow="hidden"
            fontSize="20px"
            fontWeight="500"
            flexDirection="column"
            w="100%"
          >
            <Flex justifyContent="center" textAlign={"center"}>
              <SmallHeading text={" Ваші запитання – наші відповіді!"} />
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
          </FlexContainer>
        </Flex>
        <FlexContainer
          w="100%"
          overflow="hidden"
          flexDirection="column"
          textAlign={"center"}
        >
          <SmallHeading text={" Наші спогади!"} p={4} />
          <Flex overflow="hidden" w="100%">
            <CarouselTemplate />
          </Flex>
        </FlexContainer>
      </Flex>
      <SmallCentered />
    </>
  );
};

export default Main;
