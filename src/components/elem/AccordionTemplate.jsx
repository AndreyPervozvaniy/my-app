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
                fontSize="22px"
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
                <Text padding="10px"> Я можу займатися?</Text>
                <AccordionIcon />
              </Flex>{" "}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="18px">
              Звичайно, якщо ви старше 6 років, не маєте протипоказань, а маєте
              бажання! Зв'яжіться з нами будь-яким зручним для Вас способом і
              попередьте про візит.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " width="100%">
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
                // borderRadius="15px"
                // _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                {" "}
                <Text padding="10px">
                  Що мені потрібно для першого тренування?
                </Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {" "}
            <Text padding="0 10px" fontSize="18px">
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
                fontSize="22px"
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
                <Text padding="10px">
                  {" "}
                  Чи можу я прийняти душ після тренування?
                </Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="18px">
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
                fontSize="22px"
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
                <Text padding="10px">
                  Що я отримаю від першого пробного тренування?
                </Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="18px">
              Перше заняття – ознайомче. Ви познайомитеся з командою та
              інструкторами, програмою навчання, спробуєте повторити основні
              вправи та техніки. Ви можете не турбуватися за травми, хоч BJJ і
              виглядає як небезпечний вид спорту, але у нас чудовий і дружний
              колектив, який з розумінням та відповідальністю ставиться до
              новачків!
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " width="100%">
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
                // borderRadius="15px"
                // _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                {" "}
                <Text padding="10px">Чи є якісь правила, які я маю знати?</Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="18px">
              Як таких правил немає, ми раді всім і кожному, хто вирішив
              відвідати нас. Ми з повагою ставимося до всіх, поважаємо стіни
              нашої академії та наших інструкторів, стежимо за чистотою, як на
              татамі, так і за особистою гігієною, завжди раді допомогти чи дати
              пораду, у стінах нашої академії немає місця сорому чи страху перед
              питаннями, ми завжди раді відповісти чи підказати. Власне, будемо
              раді Вам!
            </Text>
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " width="100%">
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
                // borderRadius="15px"
                // _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                {" "}
                <Text padding="10px">Мені обов'язково одразу купувати Гі?</Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="18px">
              Відразу купувати необов'язково, якщо ми матимемо вільний комплект,
              ми надамо Вам його для тренування.
            </Text>
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " width="100%">
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
                // borderRadius="15px"
                // _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                {" "}
                <Text padding="10px">
                  Чи можна прийти з другом/подругою, чи можна дівчатам?
                </Text>
                <AccordionIcon />
              </Flex>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text padding="0 10px" fontSize="18px">
              Звісно, ​​будемо раді бачити Вас у стінах нашої академії!
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
