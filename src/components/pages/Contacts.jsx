import React from "react";
import Navbar from "../navigation/Navbar";
import {
  Flex,
  Text,
  Tooltip,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Link,
  Container,
  Stack,
  Box,
  Heading,
} from "@chakra-ui/react";
import Waterlogo from "../../assets/img/watericon.png";
import QrPhoneNikolay from "../../assets/img/Дядь коля номер.png";
import QrPhoneValentin from "../../assets/img/номер валентина.png";
import QrPhoneVlad from "../../assets/img/номер влада.png";
import instaQR from "../../assets/img/insta bjj kids.png";
import faceQR from "../../assets/img/qr face.png";
import QRyoutube from "../../assets/img/QRtube.png";
import QRinstaDnipro from "../../assets/img/QR insta bjj.png";
import GoogleMap from "../../assets/img/google map.png";
import QRTelega from "../../assets/img/QR telegram.png";
import ContactTemplate from "../elem/ContactTemplates.tsx";
import FooterTemplate from "../elem/FooterTemplate.tsx";
const Contacts = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSecondOpen,
    onOpen: onSecondOpen,
    onClose: onSecondClose,
  } = useDisclosure();
  const {
    isOpen: isThirdOpen,
    onOpen: onThirdOpen,
    onClose: onThirdClose,
  } = useDisclosure();
  return (
    <>
      <Navbar />
      <Flex alignItems="center" justifyContent="center" flexDir={"column"}>
        {" "}
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
              <Text color={"gray.500"}>
                Зупинка: вулиця Богдана Хмельницького <br />
                Маршрути автобусів: A153, 124A, A115, A149, A64Г, А31, А177,
                А107, А136, А88, А38, А43,А158 <br /> Маршрути тролейбусів: 20,
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
                >
                  Контакты
                </Button>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                >
                  Соцсети
                </Button>{" "}
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                >
                  Как нас найти?
                </Button>
              </Stack>
            </Stack>
            <Flex
              // flex={1}
              justify={"center"}
              align={"center"}
              // position={"relative"}
              w={"full"}
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
              </Box>
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
            А далі куди?
          </Text>
          <br />
          <Text as={"span"} color={"red.400"}>
            Ознайомся!
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
                  Останній крок та
                </Text>
                <br />
                <Text as={"span"} color={"red.400"}>
                  фінішна пряма!
                </Text>
              </Heading>
              <Text color={"gray.500"}>
                Snippy is a rich coding snippets app that lets you create your
                own code snippets, categorize them, and even sync them in the
                cloud so you can use them anywhere. All that is free!
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
                  bg={"red.400"}
                  _hover={{ bg: "red.500" }}
                >
                  Get started
                </Button>
                <Button
                  rounded={"full"}
                  size={"lg"}
                  fontWeight={"normal"}
                  px={6}
                >
                  How It Works
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Flex>
      {/* <Flex
        position="absolute"
        opacity="50%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        h="100vh"
        w="100vw"
        zIndex="-1"
      />{" "}
      <Flex
        h="100vh"
        flexDirection="column"
        justifyContent="center"
        border="3px solid red"
      >
        {" "}
        <Flex
          // h="92vh"
          justifyContent="center"
          alignItems="center"
          padding="40px"
          fontFamily="Roboto"
        >
          <Flex fontSize="22px">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1321.7486555802132!2d35.0736516!3d48.5045306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe393edb25bcb%3A0xe91e1f026da0b37e!2sYamasaki%20Academy%20Jiu%20Jitsu!5e0!3m2!1sru!2sua!4v1694594361759!5m2!1sru!2sua"
              width="800"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>

            <Flex
              justifyContent="space-between"
              textAlign="center"
              padding="20px"
            >
              <Flex flexDir="column" padding="20px" alignItems="center">
                {" "}
                <Tooltip
                  hasArrow
                  label="Чекаємо на тебе!)"
                  cursor="pointer"
                  fontSize="xl"
                  color="black"
                  placement="top"
                >
                  <Image cursor="pointer" w="150px" src={GoogleMap}></Image>
                </Tooltip>
                <Text padding="10px">Yamasaki Google Maps</Text>
                <Text padding="5px" backgroundColor="white" opacity="80%">
                  Зупинка: вулиця Богдана Хмельницького
                </Text>
                <Text
                  padding="5px"
                  backgroundColor="white"
                  borderRadius="20px"
                  opacity="80%"
                >
                  Маршрути автобусів: A153, 124A, A115, A149, A64Г, А31, А177,
                  А107, А136, А88, А38, А43,А158{" "}
                </Text>
                <Text padding="5px" backgroundColor="white" opacity="80%">
                  Маршрути тролейбусів: 20, 7, 17, 3, 15
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent="space-between">
          <Button
            background="white"
            border="1px solid grey"
            borderRadius="20px"
            className="fa fa-phone"
            w="300px"
            onClick={() => {
              onOpen();
            }}
          >
            <Text padding="10px">Контакти</Text>
          </Button>{" "}
          <Button
            className="fa fa-instagram"
            background="white"
            border="1px solid grey"
            borderRadius="20px"
            w="300px"
            onClick={() => {
              onSecondOpen();
            }}
          >
            <Text padding="5px">Соціальні мережі</Text>
          </Button>{" "}
          <Button
            className="fa fa-video-camera"
            background="white"
            border="1px solid grey"
            borderRadius="20px"
            w="300px"
            onClick={() => {
              onThirdOpen();
            }}
          >
            <Text padding="5px">Де нас знайти!</Text>
          </Button>{" "}
        </Flex>
        <Modal isCentered isOpen={isThirdOpen} onClose={onThirdClose}>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(0deg)"
          >
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalBody>
                <Flex
                  h="92vh"
                  justifyContent="center"
                  alignItems="center"
                  padding="40px"
                  fontFamily="Roboto"
                >
                  <Flex fontSize="22px">
                    <iframe
                      width="900"
                      height="415"
                      src="https://www.youtube.com/embed/XyQ27GXavDM?si=ixaPX6BKhdyfrQ8b"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </Flex>
                </Flex>{" "}
              </ModalBody>

              <ModalFooter justifyContent="center" opacity="100%">
                <Button
                  bg="blackAlpha.300"
                  className="fa fa-sign-out"
                  onClick={onThirdClose}
                ></Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
        <Modal isCentered isOpen={isSecondOpen} onClose={onSecondClose}>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(0deg)"
          >
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalBody>
                <Flex
                  h="92vh"
                  justifyContent="center"
                  alignItems="center"
                  padding="40px"
                  fontFamily="Roboto"
                >
                  <Text fontSize="22px">
                    <Text padding="5px">
                      Instagram Dnipro Kids :
                      <Link
                        href=" https://www.instagram.com/bjj_kids_dnipro/"
                        isExternal
                      >
                        {" "}
                        Инстаграмм{" "}
                        <Text className="fa  fa-external-link" fontSize="16px">
                          {" "}
                        </Text>
                      </Link>
                    </Text>
                    <Text padding="5px">
                      Yamasaki Facebook :{" "}
                      <Link
                        href="  https://www.facebook.com/BrazilianJiuJitsuDnepr/"
                        isExternal
                      >
                        {" "}
                        Фейсбук{" "}
                        <Text className="fa  fa-external-link" fontSize="16px">
                          {" "}
                        </Text>
                      </Link>
                    </Text>
                    <Text padding="5px">
                      {" "}
                      Yamasaki Telegram:{" "}
                      <Link
                        href="  https://t.me/YamasakiAcademyDnipro"
                        isExternal
                      >
                        {" "}
                        Телеграмм{" "}
                        <Text className="fa  fa-external-link" fontSize="16px">
                          {" "}
                        </Text>
                      </Link>
                    </Text>
                    <Flex
                      justifyContent="space-between"
                      textAlign="center"
                      padding="20px"
                    >
                      <Flex flexDir="column" padding="20px" alignItems="center">
                        <Tooltip
                          hasArrow
                          label="Скануй та приєднуйся!)"
                          cursor="pointer"
                          fontSize="xl"
                          color="black"
                          placement="top"
                        >
                          <Image
                            cursor="pointer"
                            w="150px"
                            src={instaQR}
                          ></Image>
                        </Tooltip>
                        <Text padding="10px">Yamasaki Dnipro Kids</Text>
                      </Flex>
                      <Flex flexDir="column" padding="20px" alignItems="center">
                        {" "}
                        <Tooltip
                          hasArrow
                          label="Скануй та приєднуйся!)"
                          cursor="pointer"
                          fontSize="xl"
                          color="black"
                          placement="top"
                        >
                          <Image
                            cursor="pointer"
                            w="150px"
                            src={faceQR}
                          ></Image>
                        </Tooltip>
                        <Text padding="10px"> Yamasaki Academy Facebook</Text>{" "}
                      </Flex>
                      <Flex flexDir="column" padding="20px" alignItems="center">
                        {" "}
                        <Tooltip
                          hasArrow
                          label="Скануй та приєднуйся!)"
                          cursor="pointer"
                          fontSize="xl"
                          color="black"
                          placement="top"
                        >
                          <Image
                            cursor="pointer"
                            w="150px"
                            src={QRyoutube}
                          ></Image>
                        </Tooltip>
                        <Text padding="10px">Yamasaki Youtube</Text>
                      </Flex>
                      <Flex flexDir="column" padding="20px" alignItems="center">
                        {" "}
                        <Tooltip
                          hasArrow
                          label="Скануй та приєднуйся!)"
                          cursor="pointer"
                          fontSize="xl"
                          color="black"
                          placement="top"
                        >
                          <Image
                            cursor="pointer"
                            w="150px"
                            src={QRTelega}
                          ></Image>
                        </Tooltip>
                        <Text padding="10px">Yamasaki Telegram</Text>
                      </Flex>
                      <Flex flexDir="column" padding="20px" alignItems="center">
                        {" "}
                        <Tooltip
                          hasArrow
                          label="Скануй та приєднуйся!)"
                          cursor="pointer"
                          fontSize="xl"
                          color="black"
                          placement="top"
                        >
                          <Image
                            cursor="pointer"
                            w="150px"
                            src={QRinstaDnipro}
                          ></Image>
                        </Tooltip>
                        <Text padding="10px">Yamasaki Dnipro</Text>
                      </Flex>
                    </Flex>
                  </Text>
                </Flex>{" "}
              </ModalBody>

              <ModalFooter justifyContent="center" opacity="100%">
                <Button
                  bg="blackAlpha.300"
                  className="fa fa-sign-out"
                  onClick={onSecondClose}
                ></Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(0deg)"
          >
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalBody>
                <Flex
                  h="92vh"
                  justifyContent="center"
                  alignItems="center"
                  padding="40px"
                  fontFamily="Roboto"
                >
                  <Text fontSize="22px">
                    <Text padding="5px">
                      Микола Шерстюк - Тренер дитячої групи BJJ : +380 73 203 76
                      64
                    </Text>
                    <Text padding="5px">
                      Мирошников Владислав - Тренер з ММА та Бойового самбо :
                      +380 95 507 33 70
                    </Text>
                    <Text padding="5px">
                      {" "}
                      Косенко Валентин - Тренер дорослої групи BJJ : +380 50 535
                      09 61
                    </Text>
                    <Flex
                      justifyContent="space-between"
                      textAlign="center"
                      padding="20px"
                    >
                      <Flex flexDir="column" padding="20px" alignItems="center">
                        <Tooltip
                          hasArrow
                          label="Скануй та дзвони!)"
                          cursor="pointer"
                          fontSize="xl"
                          color="black"
                          placement="top"
                        >
                          <Image
                            cursor="pointer"
                            w="150px"
                            src={QrPhoneNikolay}
                          ></Image>
                        </Tooltip>
                        <Text padding="10px">Микола Шерстюк</Text>
                      </Flex>
                      <Flex flexDir="column" padding="20px" alignItems="center">
                        {" "}
                        <Tooltip
                          hasArrow
                          label="Скануй та дзвони!)"
                          cursor="pointer"
                          fontSize="xl"
                          color="black"
                          placement="top"
                        >
                          <Image
                            cursor="pointer"
                            w="150px"
                            src={QrPhoneVlad}
                          ></Image>
                        </Tooltip>
                        <Text padding="10px"> Мирошников Владислав</Text>{" "}
                      </Flex>
                      <Flex flexDir="column" padding="20px" alignItems="center">
                        {" "}
                        <Tooltip
                          hasArrow
                          label="Скануй та дзвони!)"
                          cursor="pointer"
                          fontSize="xl"
                          color="black"
                          placement="top"
                        >
                          <Image
                            cursor="pointer"
                            w="150px"
                            src={QrPhoneValentin}
                          ></Image>
                        </Tooltip>
                        <Text padding="10px">Косенко Валентин</Text>
                      </Flex>
                    </Flex>
                  </Text>
                </Flex>{" "}
              </ModalBody>

              <ModalFooter justifyContent="center" opacity="100%">
                <Button
                  bg="blackAlpha.300"
                  className="fa fa-sign-out"
                  onClick={onClose}
                ></Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </Flex> */}
    </>
  );
};

export default Contacts;
