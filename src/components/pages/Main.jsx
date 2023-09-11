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
} from "@chakra-ui/react";
import { useScrollEvent } from "../../hooks";
const Main = () => {
  const [isVisibleTopButton] = useScrollEvent();
  return (
    <>
      <Navbar />
      <Fade in={isVisibleTopButton}>
        <Button
          aria-lavel="topButton"
          zIndex="12"
          position="fixed"
          right={{ base: "5px", xl: "10" }}
          bottom="55px"
          w={50}
          h={50}
          borderRadius="full"
          colorScheme="gray"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {" "}
          UP
        </Button>
      </Fade>
      <Box className="bodys">
        <div class="section">
          <div class="oop"></div>
          <div class="fixed">
            <h1 class="large">YAMASAKI ACADEMY DNIPRO</h1>
            <br />
            <p> Почни свій шлях у світ Джіу-Джітсу разом з нами!</p>
          </div>
        </div>
        <div class="section">
          <div class="fixed">
            <h1>
              Місто Дніпро - це динамічний центр України, де здоровий спосіб
              життя, фізична активність та здоров'я стають дедалі більш
              важливими. Бразильське джиу-джитсу, або просто джиу-джитсу є
              прекрасним варіантом для тих, хто прагне розвивати своє тіло та
              розум, покращити самодисципліну та вміння працювати в команді.
              Інструктори Yamasaki academy Dnipro з багаторічним досвідом
              допоможуть вам зануритися в атмосферу BJJ та досягти нових висот у
              своєму розвитку.
            </h1>
            <p></p>
          </div>
        </div>
        <div class="section">
          <div class="p fixed">
            <h1>Сергей Глотов: </h1>
            <p>"Берите доллар в банках!!!"©</p>
          </div>
        </div>
        <div class="section">
          <div class="p fixed">Цитата : Валентина Михайловича</div>
        </div>
        <div class="section">
          <div class="p fixed">Цитата : Фернандо Ямасаки</div>
        </div>
      </Box>
    </>
  );
};

export default Main;
