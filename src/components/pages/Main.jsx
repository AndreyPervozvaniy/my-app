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
        >
          {" "}
        </Button>
      </Fade>
      <Box className="bodys">
        <div class="section">
          <div class="oop"></div>
          <div class="fixed">
            <h1 class="large">YAMASAKI ACADEMY DNIPRO</h1>
            <br />
            <p> Почни свій шлях у світ Джіу-Джітсу разом з нами!</p>
            <br />
            <Flex
              className="fa fa-arrow-down"
              justifyContent="center"
              alignSelf="flex-end"
              color="black"
            >
              {" "}
            </Flex>
          </div>
        </div>
        <div class="section">
          <div class="fixed">
            <h1>
              Yamasaki Academy Dnipro - одна з філій академії з бразильського
              джиу-джитсу.Це дуже потужне ком'юніті спортсменів, а також тих
              людей, котрі захоплені цим. Люди в очах яких горить цей вид
              спорту. Ми впевнені в тому, що цим видом спорту може займатися
              кожен незалежно від віку, комплекції, статі, тому на нашому татамі
              ви побачите і дітей, і підлітків, і дорослих, хто вже роками
              практикує наш вид спорту!
            </h1>
          </div>{" "}
        </div>{" "}
        <div class="section">
          <div class="p fixed">
            <h1>
              Філософія нашої школи звучить досить просто, але це фундаментальні
              речі, без яких ваше джіу-джитсу не працюватиме належним чином! А
              саме, важливість: роботи з рівновагою опонента, дотримання кутів
              при виконанні техніки, ключовий аспект роботи тазом та принцип
              роботи важеля!
            </h1>
          </div>
        </div>
        <div class="section">
          <div class="p fixed">
            На шляху становлення вас, як джитсера, ви обов'язково зіткнетеся з
            труднощами та питаннями, які будуть ламати Вам голову. Вирішити
            будь-яке Ваше питання, допоможуть наші інструктори! Люди, які багато
            років практикують джиу-джитсу, а також інші види спорту!
          </div>
        </div>
        <div class="section">
          <div class="p fixed">
            Почни і ти свій шлях! До зустрічі на татамі, Oss!
          </div>
        </div>
      </Box>
    </>
  );
};

export default Main;
