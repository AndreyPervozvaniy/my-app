import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Box,
  useColorModeValue,
  Text,
  Container,
  AccordionIcon,
} from "@chakra-ui/react";

import React from "react";

export default function AccordionTemplate() {
  return (
    <>
      {" "}
      <Accordion
        w="90%"
        allowToggle
        justifyContent="center"
        alignItems="center"
        // background="linear-gradient(to bottom, #0000ff88 0%, #ffff00ab 120%)"
      >
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " width="100%">
              <Flex
                color="black"
                fontSize="20px"
                fontWeight="500"
                backgroundColor="white"
                padding="5px"
                justifyContent="space-between"
                alignItems="center"
                flex="1"
                borderBottom="1px solid grey"
                // borderRadius="15px"
                // _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                <Text> Хто може займатися?</Text>
                <AccordionIcon />
              </Flex>{" "}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="16px">
              Кожен, хто старше 6 років, не має протипоказань, а має бажання!
              Зв'яжіться з нами будь-яким зручним для Вас способом і попередьте
              про візит.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " width="100%">
              <Flex
                color="black"
                fontSize="20px"
                fontWeight="500"
                backgroundColor="white"
                padding="5px"
                justifyContent="space-between"
                alignItems="center"
                flex="1"
                borderBottom="1px solid grey"
                // borderRadius="15px"
                // _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                {" "}
                <Text> Що потрібно для першого тренування?</Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {" "}
            <Text padding="0 10px" fontSize="16px">
              Для першого тренування, Вам знадобиться: змінне взуття, футболка
              та шорти без змійок, за наявності рашгард, легінси та Гі (кімоно),
              також душове приладдя та гарний настрій. Також з метою безпеки, як
              своєї, так і партнерів, перед тренуванням знімайте особисті
              прикраси, кільця, сережки, пірсинг або подібне.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " width="100%">
              <Flex
                color="black"
                fontSize="20px"
                fontWeight="500"
                backgroundColor="white"
                padding="5px"
                justifyContent="space-between"
                alignItems="center"
                flex="1"
                borderBottom="1px solid grey"
                // borderRadius="15px"
                // _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                {" "}
                <Text> Чи є душ ?</Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="16px">
              Звичайно, у кожній роздягальні є душ. Тому не забудьте засоби
              особистої гігієни.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " width="100%">
              <Flex
                color="black"
                fontSize="20px"
                fontWeight="500"
                backgroundColor="white"
                padding="5px"
                justifyContent="space-between"
                alignItems="center"
                flex="1"
                borderBottom="1px solid grey"
                // borderRadius="15px"
                // _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                {" "}
                <Text>Що являє собою перше пробне заняття?</Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="16px">
              Перше заняття – ознайомче. Ви познайомитеся з командою та
              інструкторами, програмою навчання, спробуєте повторити основні
              вправи та техніки. Ви можете не турбуватися за травми, хоч BJJ і
              виглядає як небезпечний вид спорту, але у нас чудовий і дружний
              колектив, який з розумінням ставиться до новачків!
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " width="100%">
              <Flex
                color="black"
                fontSize="20px"
                fontWeight="500"
                backgroundColor="white"
                padding="5px"
                justifyContent="space-between"
                alignItems="center"
                flex="1"
                borderBottom="1px solid grey"
                // borderRadius="15px"
                // _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                {" "}
                <Text>Чи є якісь правила відвідування?</Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="16px">
              Як таких правил немає, ми раді всім і кожному, хто вирішив
              відвідати нас. Ми з повагою ставимося до всіх, поважаємо стіни
              нашої академії та наших інструкторів, стежимо за чистотою, як на
              татамі, так і за особистою гігієною, завжди раді допомогти чи дати
              пораду, у стінах нашої академії немає місця сорому чи страху перед
              питаннями, ми завжди раді відповісти чи підказати. Власне, раді
              зустрічати і від Вас таке саме ставлення.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
