import React, { useState } from "react";
import Navbar from "../navigation/Nav";
import { Button, Text, Fade, Flex, Box } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { useScrollEvent } from "../../hooks";
import video from "../../assets/video/asd.mp4";

import { CheckIcon } from "@chakra-ui/icons";
import {
  FcGraduationCap,
  FcBullish,
  FcConferenceCall,
  FcLike,
  FcChargeBattery,
  FcHome,
} from "react-icons/fc";

import Waterlogo from "../../assets/img/watericon.png";
import CarouselTemplate from "../elem/CarouselTemplate.tsx";

import {
  Accordion,
  Center,
  Stack,
  List,
  ListItem,
  ListIcon,
  Heading,
  Icon,
  Slider,
  useBreakpointValue,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
  Container,
  AccordionIcon,
} from "@chakra-ui/react";
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
  // const [slider, setSlider] = useState < Slider || null > null;

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
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
                  <Card
                    heading={"Професійність"}
                    icon={<Icon as={FcGraduationCap} w={10} h={10} />}
                    description={
                      "Ми відповідально ставимося до навчання та ставимо у пріоритет пояснення ключових принципів!"
                    }
                  />
                  <Card
                    heading={"Товариство"}
                    icon={<Icon as={FcConferenceCall} w={10} h={10} />}
                    description={
                      "Вперше вступивши на татамі, ви приєднуєтеся до найпотужнішого спортивного ком'юніті!"
                    }
                  />{" "}
                  <Card
                    heading={"Розвиток"}
                    icon={<Icon as={FcBullish} w={10} h={10} />}
                    description={
                      "BJJ є одним з найкращих інструментів для саморозвитку та становлення особистості!"
                    }
                  />
                  <Card
                    heading={"Самозахист"}
                    icon={<Icon as={FcLike} w={10} h={10} />}
                    description={
                      "Ви освоїте навички та техніки одного з найкращих засобів самозахисту!"
                    }
                  />
                  <Card
                    heading={"Джерело енергії"}
                    icon={<Icon as={FcChargeBattery} w={10} h={10} />}
                    description={
                      "Ви відкриєте для себе найефективніше джерело антистресу та нового заряду енергії!"
                    }
                  />
                  <Card
                    heading={"Велика родина"}
                    icon={<Icon as={FcHome} w={10} h={10} />}
                    description={
                      "Yamasaki -це сімейний вид спорту в дружній атмосфері, де батьки тренуюся з дітьми пліч-о-пліч!"
                    }
                  />
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
                <Box
                  margin={"0 2rem"}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  // boxShadow={"2xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Stack
                    textAlign={"center"}
                    p={6}
                    color={useColorModeValue("gray.800", "white")}
                    align={"center"}
                  >
                    <Text
                      fontSize={"md"}
                      fontWeight={"bold"}
                      bg={useColorModeValue("blue.50", "blue.900")}
                      p={2}
                      px={3}
                      color={"blue.500"}
                      rounded={"full"}
                    >
                      BJJ / MMA
                    </Text>
                    <Stack
                      direction={"row"}
                      align={"center"}
                      justify={"center"}
                    >
                      <Text fontSize={"2xl"} fontWeight={800}>
                        Діти
                        <Text color={"gray.500"} fontSize={"lg"}>
                          6-9 років
                        </Text>
                      </Text>
                    </Stack>
                  </Stack>

                  <Box
                    bg={useColorModeValue("gray.50", "gray.900")}
                    px={6}
                    py={10}
                    borderRadius={"15px"}
                  >
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Формати Gi/No-Gi
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Вивчення базових технік та основ BJJ/MMA
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Вивчення теорії, drill сесії, спаринги
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Розвиток дисципліни, поваги та самовпевненості
                      </ListItem>
                    </List>
                  </Box>
                </Box>
                <Box
                  margin={"0 2rem"}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Stack
                    textAlign={"center"}
                    p={6}
                    color={useColorModeValue("gray.800", "white")}
                    align={"center"}
                  >
                    <Text
                      fontSize={"md"}
                      fontWeight={"bold"}
                      bg={useColorModeValue("blue.50", "blue.900")}
                      p={2}
                      px={3}
                      color={"blue.500"}
                      rounded={"full"}
                    >
                      BJJ/MMA
                    </Text>
                    <Stack
                      direction={"row"}
                      align={"center"}
                      justify={"center"}
                    >
                      <Text fontSize={"2xl"} fontWeight={800}>
                        Підлітки
                        <Text color={"gray.500"} fontSize={"lg"}>
                          10-15 років
                        </Text>
                      </Text>
                    </Stack>
                  </Stack>

                  <Box
                    bg={useColorModeValue("gray.50", "gray.900")}
                    px={6}
                    py={10}
                    borderRadius={"15px"}
                  >
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Формати Gi/No-Gi
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Вивчення просунутих технік BJJ/MMA
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Роз'яснення деталей, вільні та позиційні спаринги.
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Пояснення ключових цінностей
                      </ListItem>
                    </List>
                  </Box>
                </Box>{" "}
                <Box
                  margin={"0 2rem"}
                  maxW={"330px"}
                  w={"full"}
                  bg={useColorModeValue("white", "gray.800")}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Stack
                    textAlign={"center"}
                    p={6}
                    color={useColorModeValue("gray.800", "white")}
                    align={"center"}
                  >
                    <Text
                      fontSize={"md"}
                      fontWeight={"bold"}
                      bg={useColorModeValue("blue.50", "blue.900")}
                      p={2}
                      px={3}
                      color={"blue.500"}
                      rounded={"full"}
                    >
                      BJJ
                    </Text>
                    <Stack
                      direction={"row"}
                      align={"center"}
                      justify={"center"}
                    >
                      <Text fontSize={"2xl"} fontWeight={800}>
                        Дорослі
                        <Text color={"gray.500"} fontSize={"lg"}>
                          Раді всім
                        </Text>
                      </Text>
                    </Stack>
                  </Stack>

                  <Box
                    bg={useColorModeValue("gray.50", "gray.900")}
                    px={6}
                    py={10}
                    borderRadius={"15px"}
                  >
                    <List spacing={3}>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Формати Gi/No-Gi
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Вивчення концепцій та методів змагального BJJ.
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Вільні спаринги, drill сесії,боротьба за завданням
                      </ListItem>
                      <ListItem>
                        <ListIcon as={CheckIcon} color="blue.700" mr={2} />
                        Сесії питання - відповідь
                      </ListItem>
                    </List>
                  </Box>
                </Box>
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
                    Звичайно, якщо ви старше 6 років, не маєте протипоказань, а
                    маєте бажання! Зв'яжіться з нами будь-яким зручним для Вас
                    способом і попередьте про візит.
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
                    Для першого тренування, Вам знадобиться: змінне взуття,
                    футболка та шорти без змійок, за наявності рашгард, легінси
                    та Гі (кімоно), також душове приладдя та гарний настрій.
                    Також з метою безпеки, як своєї, так і партнерів, перед
                    тренуванням знімайте особисті прикраси, кільця, сережки,
                    пірсинг або подібне.
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
                    Звичайно, у кожній роздягальні є душ. Тому не забудьте
                    засоби особистої гігієни.
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
                    інструкторами, програмою навчання, спробуєте повторити
                    основні вправи та техніки. Ви можете не турбуватися за
                    травми, хоч BJJ і виглядає як небезпечний вид спорту, але у
                    нас чудовий і дружний колектив, який з розумінням та
                    відповідальністю ставиться до новачків!
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
                        Чи є якісь правила, які я маю знати?
                      </Text>
                      <AccordionIcon />
                    </Flex>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text padding="0 10px" fontSize="18px">
                    Як таких правил немає, ми раді всім і кожному, хто вирішив
                    відвідати нас. Ми з повагою ставимося до всіх, поважаємо
                    стіни нашої академії та наших інструкторів, стежимо за
                    чистотою, як на татамі, так і за особистою гігієною, завжди
                    раді допомогти чи дати пораду, у стінах нашої академії немає
                    місця сорому чи страху перед питаннями, ми завжди раді
                    відповісти чи підказати. Власне, будемо раді Вам!
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
                        Мені обов'язково одразу купувати Гі?
                      </Text>
                      <AccordionIcon />
                    </Flex>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text padding="0 10px" fontSize="18px">
                    Відразу купувати необов'язково, якщо ми матимемо вільний
                    комплект, ми надамо Вам його для тренування.
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
