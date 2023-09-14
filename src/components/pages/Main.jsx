import React from "react";
import Navbar from "../navigation/Navbar";
import {
  Box,
  Button,
  Text,
  ButtonGroup,
  Container,
  AbsoluteCenter,
  Fade,
  Flex,
} from "@chakra-ui/react";
import { useScrollEvent } from "../../hooks";
const Main = () => {
  const [isVisibleTopButton] = useScrollEvent();
  return (
    <>
      <Navbar />
      <Fade in={isVisibleTopButton}>
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
      </Fade>
      <Flex
        fontFamily="Roboto"
        fontWeight="300"
        textTransform="uppercase"
        color="#000"
        background="#222"
        padding="0"
        margin="0"
      >
        <Flex
          backgroundColor="#fff"
          fontSize="30px"
          color="#000"
          top="0"
          zIndex="1"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          pos="absolute"
          w="100%"
          h="100vh"
          letterSpacing="4px"
          overflow="hidden"
          clip="rect(0, auto, auto, 0)"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            pos="fixed"
            opacity="50%"
          >
            <Text>
              YAMASAKI ACADEMY DNIPRO <br />
              Почни свій шлях у світ Джіу-Джітсу разом з нами!
            </Text>
          </Flex>{" "}
          <Flex
            className="fa fa-arrow-down"
            justifyContent="center"
            alignSelf="flex-end"
            color="black"
            opacity="50%"
            padding="10px"
          ></Flex>
        </Flex>
        <Flex
          backgroundColor="rgb(57, 2, 255)"
          fontSize="16px"
          color="rgb(255, 255, 255)"
          top="100vh"
          zIndex="2"
          alignItems="center"
          textAlign="center"
          padding="100px"
          pos="absolute"
          w="100%"
          h="100vh"
          letterSpacing="4px"
          overflow="hidden"
          clip="rect(0, auto, auto, 0)"
          boxShadow="inset 0 1px 80px rgba(0, 0, 0, 0.14)"
        >
          <Flex overflow="hidden" opacity="50%">
            <Text>
              Yamasaki Academy Dnipro - одна з філій академії з бразильського
              джиу-джитсу.Це дуже потужне ком'юніті спортсменів, а також тих
              людей, котрі захоплені цим. Люди в очах яких горить цей вид
              спорту. Ми впевнені в тому, що цим видом спорту може займатися
              кожен незалежно від віку, комплекції, статі, тому на нашому татамі
              ви побачите і дітей, і підлітків, і дорослих, хто вже роками
              практикує наш вид спорту!
            </Text>
          </Flex>{" "}
        </Flex>{" "}
        <Flex
          backgroundColor="rgb(94, 0, 94)"
          fontSize="16px"
          color="rgb(255, 255, 255)"
          top="200vh"
          zIndex="4"
          alignItems="center"
          textAlign="center"
          padding="100px"
          pos="absolute"
          w="100%"
          h="100vh"
          letterSpacing="4px"
          overflow="hidden"
          clip="rect(0, auto, auto, 0)"
          boxShadow="inset 0 1px 80px rgba(0, 0, 0, 0.14)"
        >
          <Flex overflow="hidden" opacity="50%">
            <Text>
              Філософія нашої школи звучить досить просто, але це фундаментальні
              речі, без яких ваше джіу-джитсу не працюватиме належним чином! А
              саме, важливість: роботи з рівновагою опонента, дотримання кутів
              при виконанні техніки, ключовий аспект роботи тазом та принцип
              роботи важеля!
            </Text>
          </Flex>
        </Flex>
        <Flex
          backgroundColor="rgb(67, 27, 27)"
          fontSize="16px"
          color="rgb(255, 255, 255)"
          top="300vh"
          zIndex="6"
          alignItems="center"
          textAlign="center"
          padding="100px"
          pos="absolute"
          w="100%"
          h="100vh"
          letterSpacing="4px"
          overflow="hidden"
          clip="rect(0, auto, auto, 0)"
          boxShadow="inset 0 1px 80px rgba(0, 0, 0, 0.14)"
        >
          <Flex overflow="hidden" opacity="50%">
            На шляху становлення вас, як джитсера, ви обов'язково зіткнетеся з
            труднощами та питаннями, які будуть ламати Вам голову. Вирішити
            будь-яке Ваше питання, допоможуть наші інструктори! Люди, які багато
            років практикують джиу-джитсу, а також інші види спорту!
          </Flex>
        </Flex>
        <Flex
          backgroundColor="black"
          fontSize="16px"
          color="rgb(255, 255, 255)"
          top="400vh"
          zIndex="7"
          alignItems="center"
          textAlign="center"
          padding="100px"
          justifyContent="center"
          pos="absolute"
          w="100%"
          h="100vh"
          letterSpacing="4px"
          overflow="hidden"
          clip="rect(0, auto, auto, 0)"
          boxShadow="inset 0 1px 80px rgba(0, 0, 0, 0.14)"
        >
          <Flex overflow="hidden" opacity="50%">
            Почни і ти свій шлях! До зустрічі на татамі, Oss!
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Main;
