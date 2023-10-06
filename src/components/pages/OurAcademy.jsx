import React from "react";
import Navbar from "../navigation/Nav";
import Waterlogo from "../../assets/img/watericon.png";
import { Box, Text, Flex } from "@chakra-ui/react";

const OurAcademy = () => {
  return (
    <>
      <Navbar />{" "}
      <Box
        position="absolute"
        opacity="20%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        h="100vh"
        w="100vw"
        zIndex="-1"
      />
      <Flex
        fontFamily="Roboto"
        fontWeight="500"
        color="#000"
        background="#222"
        padding="0"
        margin="0"
      >
        <Flex
          fontSize="18px"
          color="#000"
          top="0"
          zIndex="1"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          pos="absolute"
          w="100%"
          h="100vh"
          letterSpacing="2px"
          overflow="hidden"
          clip="rect(0, auto, auto, 0)"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            pos="fixed"
            opacity="90%"
          >
            <Text>
              Yamasaki Academy Jiu Jitsu Dnipro є представництвом міжнародної
              школи вивчення бразильського джиу-джитсу.
              <br />
              <br />В даний час академія Ямасакі має кілька шкіл джиу-джитсу і
              філій академій єдиноборств у Сполучених Штатах, Бразилії,
              Домініканській Республіці, Іспанії, Швеції та Україні.
              <br />
              <br /> Yamasaki Academy є одним з провідних клубів бразильського
              джиу-джитсу в світі. Заснована у 1981 році, Yamasaki Academy
              виховала багато відомих чемпіонів у світі бойових мистецтв. Клуби
              Yamasaki Academy працюють за певним підходом до тренувань, який
              включає в себе розвиток фізичної та ментальної сили, техніки
              бойового мистецтва, спаринги та інші елементи.
              <br />
              <br /> Yamasaki Academy має офіційний статус члена міжнародних
              федерацій бразильського джиу-джитсу IBJJF, AJP та української
              федерації UFBJJ.
              <br />
              <br /> Основними цілями нашої академії є розвиток та популяризація
              бразильського джиу-джитсу в Україні, всебічне вивчення всіх
              аспектів даного бойового мистецтва, а також популяризація
              здорового способу життя серед молоді та дорослих.
              <br />
              <br /> Бразильський джиу-джитсу - це високоінтенсивний вид спорту,
              який допомагає розвивати фізичну та ментальну витривалість,
              впевненість та самодисципліну. Якщо ви цікавитеся бразильським
              джиу-джитсу, то Yamasaki Academy може бути одним з варіантів для
              початку тренувань.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default OurAcademy;
