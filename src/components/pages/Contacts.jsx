import React from "react";
import Navbar from "../navigation/Navbar";
import {
  Flex,
  Text,
  Tooltip,
  Image,
  Button,
  Link,
  Fade,
  Container,
  Stack,
  Box,
  Heading,
  useColorModeValue,
  Icon,
  HStack,
  VStack,
  List,
  ListItem,
  ListIcon,
  useToast,
} from "@chakra-ui/react";
import Elevator from "../elem/Elevator";
import { FaPhone, FaTelegram, FaInstagram } from "react-icons/fa";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

import { useScrollEvent } from "../../hooks";
import FooterTemplate from "../elem/FooterTemplate";
function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}
const Card = ({ heading, description, icon, href }) => {
  //---------------------------------------------- кнопки соцсетей-----------------------------------
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"center"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          // color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2} textAlign={"center"}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Приєднуйся
        </Button>
      </Stack>
    </Box>
  );
};
const Contacts = () => {
  const toast = useToast();
  const saveInClipBoard = (num) => {
    navigator.clipboard.writeText(num);
  };
  const [isVisibleBottomButton] = useScrollEvent();

  return (
    <>
      <Navbar />
      <Elevator />
      {/* =====================================окна с гугл картой и ютубом ================================*/}
      <Flex alignItems="center" justifyContent="center" flexDir={"column"}>
        <Container maxW={"7xl"}>
          <Stack
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "left",
            }}
            align={"center"}
            justify="center"
            spacing={{ base: 8, md: 10 }}
            py={{ base: 24, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.400",
                    zIndex: -1,
                  }}
                >
                  Твій шлях
                </Text>
                <br />
                <Text as={"span"} color={"blue.400"}>
                  - до нас!
                </Text>
              </Heading>
              <Text color={"black"}>
                Зупинка: вулиця Богдана Хмельницького <br />
                Маршрути автобусів: A153, 124A, A115, A149, A64Г, А31, А177,
                А107, А136, А88, А38, А43, А158 <br /> Маршрути тролейбусів: 20,
                7, 17, 3, 15
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
                justifyContent={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "left",
                }}
              >
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  colorScheme={"red"}
                  bg={"blue.400"}
                  _hover={{ bg: "blue.500" }}
                  onClick={() => {
                    const InstructorContact =
                      document.getElementById("InstructorContact");
                    if (InstructorContact) {
                      InstructorContact.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Контакти
                </Button>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  onClick={() => {
                    const Society = document.getElementById("Society");
                    if (Society) {
                      Society.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Соцмережі
                </Button>{" "}
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  bg="red.400"
                  onClick={() => {
                    const videoBlock = document.getElementById("videoBlock");
                    if (videoBlock) {
                      videoBlock.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Як нас знайти ?
                </Button>
              </Stack>
            </Stack>
            <Flex
              // flex={1}
              justify={"center"}
              align={"center"}
              // position={"relative"}
              w={"full"}
              flexDir={"column"}
            >
              <Box
                // position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1321.7486555802132!2d35.0736516!3d48.5045306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe393edb25bcb%3A0xe91e1f026da0b37e!2sYamasaki%20Academy%20Jiu%20Jitsu!5e0!3m2!1sru!2sua!4v1694594361759!5m2!1sru!2sua"
                  width="100%"
                  height="100%"
                  loading="lazy"
                ></iframe>
              </Box>{" "}
            </Flex>{" "}
          </Stack>{" "}
        </Container>{" "}
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDir={"column"}
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "blue.400",
              zIndex: -1,
            }}
          >
            Останній крок та
          </Text>
          <br />
          <Text as={"span"} color={"red.400"} id="videoBlock">
            фінішна пряма!
          </Text>
        </Flex>
        <Container maxW={"7xl"}>
          <Stack
            textAlign={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "left",
            }}
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            {" "}
            <Flex
              flex={1}
              justify={"center"}
              align={"center"}
              position={"relative"}
              w={"full"}
            >
              <Box
                position={"relative"}
                height={"300px"}
                rounded={"2xl"}
                boxShadow={"2xl"}
                width={"full"}
                overflow={"hidden"}
                id="videoBlock"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/XyQ27GXavDM?si=ixaPX6BKhdyfrQ8b"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  loading="lazy"
                ></iframe>
              </Box>
            </Flex>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              >
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "red.400",
                    zIndex: -1,
                  }}
                >
                  Якщо загубився
                </Text>
                <br />
                <Text as={"span"} color={"red.400"}>
                  – подивися!
                </Text>
              </Heading>
              <Text color={"black"}>
                Нас не так просто знайти, як здається! Тому ми спеціально для
                тебе записали відеомаршрут! Якщо виникнуть запитання, ви можете
                зв'язатися з одним із інструкторів для уточнення інформації.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: "column", sm: "row" }}
              >
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  colorScheme={"red"}
                  id="InstructorContact"
                  bg={"blue.400"}
                  _hover={{ bg: "blue.500" }}
                  onClick={() => {
                    const InstructorContact =
                      document.getElementById("InstructorContact");
                    if (InstructorContact) {
                      InstructorContact.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Контакти
                </Button>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                  onClick={() => {
                    const Society = document.getElementById("Society");
                    if (Society) {
                      Society.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Соцмережі
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        {/*============================= бокс с номерами ===================================== */}
        <Box py={12}>
          <VStack spacing={2} textAlign="center">
            <Heading as="h1" fontSize="4xl">
              Контакти наших інструкторів
            </Heading>
            <Text fontSize="lg" color={"gray.500"}>
              {/* Start with 14-day free trial. No credit card needed. Cancel at
          anytime. */}
            </Text>
          </VStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            textAlign="center"
            justify="center"
            spacing={{ base: 4, lg: 10 }}
            py={10}
          >
            <PriceWrapper>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="xl">
                  Інструктор підліткової та
                  <br /> дитячої групи BJJ
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="xl" fontWeight="600">
                    Шерстюк Микола
                  </Text>
                  {/* <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text> */}
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaPhone} color="green.500" mr={2} />
                    +380 73 203 76 64
                  </ListItem>
                  {/* <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem> */}
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => saveInClipBoard("+380 73 203 76 64")}
                  >
                    Копіювати номер
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>

            <PriceWrapper>
              <Box position="relative">
                <Box
                  position="absolute"
                  top="-16px"
                  left="50%"
                  style={{ transform: "translate(-50%)" }}
                >
                  <Text
                    textTransform="uppercase"
                    bg={useColorModeValue("blue.400", "blue.700")}
                    px={3}
                    py={1}
                    color={useColorModeValue("gray.900", "gray.300")}
                    fontSize="sm"
                    fontWeight="600"
                    rounded="xl"
                  >
                    Професор
                  </Text>
                </Box>
                <Box py={4} px={12}>
                  <Text fontWeight="500" fontSize="2xl">
                    Професор академії <br />
                    та інструктор дорослої групи BJJ
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      Косенко Валентин
                    </Text>
                    {/* <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text> */}
                  </HStack>
                </Box>
                <VStack
                  bg={useColorModeValue("gray.50", "gray.700")}
                  py={4}
                  borderBottomRadius={"xl"}
                >
                  <List spacing={3} textAlign="start" px={12}>
                    <ListItem>
                      <ListIcon as={FaPhone} color="green.500" mr={2} />
                      +380 50 535 09 61
                    </ListItem>
                    {/* <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem> */}
                  </List>
                  <Box w="80%" pt={7}>
                    <Button
                      w="full"
                      colorScheme="blue"
                      variant="outline"
                      onClick={() => saveInClipBoard("+380 50 535 09 61")}
                    >
                      Копіювати номер
                    </Button>
                  </Box>
                </VStack>
              </Box>
            </PriceWrapper>
            <PriceWrapper>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="xl">
                  Інструктор з ММА та <br />
                  Бойового самбо
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="xl" fontWeight="600">
                    Мирошников Владислав
                  </Text>
                  {/* <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text> */}
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaPhone} color="green.500" mr={2} />
                    +380 95 507 33 70
                  </ListItem>
                  {/* <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem> */}
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="blue"
                    variant="outline"
                    onClick={() => saveInClipBoard(" +380 95 507 33 70")}
                  >
                    Копіювати номер
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
          </Stack>
        </Box>
        {/*======================================= бокс с соцсетями====================================== */}
        <Box p={4}>
          <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
            <Heading
              fontSize={{ base: "2xl", sm: "4xl" }}
              fontWeight={"bold"}
              id="Society"
            >
              Yamasaki у соцмережах!
            </Heading>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
              Слідкуйте за новинами та подіями життя нашої академії, також
              завжди раді новим людям у наших лавах! Підписуйся, питай,
              приєднуйся!
            </Text>
          </Stack>

          <Container maxW={"5xl"} mt={12}>
            <Flex flexWrap="wrap" gridGap={6} justify="center">
              <Link href="https://t.me/+JZvRQ-LtbyU1OWEy" isExternal>
                {" "}
                <Card
                  heading={"Yamasaki News"}
                  icon={<Icon as={FaTelegram} w={10} h={10} />}
                  description={"Наша група з новинами та оголошеннями."}
                  href={"https://t.me/+JZvRQ-LtbyU1OWEy"}
                />
              </Link>
              <Link
                href="https://instagram.com/bjj_kids_dnipro?igshid=MzRlODBiNWFlZA=="
                isExternal
              >
                {" "}
                <Card
                  heading={"Yamasaki Dnipro Kids"}
                  icon={<Icon as={FaInstagram} w={10} h={10} />}
                  description={"Сторінка дитячої та підліткової групи."}
                  href={"#"}
                />
              </Link>
              <Link href="https://t.me/YamasakiAcademyDnipro" isExternal>
                {" "}
                <Card
                  heading={"Yamasaki FAQ"}
                  icon={<Icon as={FaTelegram} w={10} h={10} />}
                  description={
                    "Якщо у вас є питання, можете поставити їх особисто!"
                  }
                  href={"#"}
                />
              </Link>
              {/* <Link href="https://instagram.com/bjj_dnipro?igshid=MzRlODBiNWFlZA==">
                {" "}
                <Card
                  heading={"Yamasaki Dnipro"}
                  icon={<Icon as={FaInstagram} w={10} h={10} />}
                  description={"Сторінка старшої групи"}
                  href={"#"}
                />
              </Link> */}

              {/* <Card
                heading={"Heading"}
                icon={<Icon as={FcAbout} w={10} h={10} />}
                description={
                  "Lorem ipsum dolor sit amet catetur, adipisicing elit."
                }
                href={"#"}
              /> */}
            </Flex>
          </Container>
        </Box>
        <FooterTemplate />
      </Flex>
    </>
  );
};

export default Contacts;
