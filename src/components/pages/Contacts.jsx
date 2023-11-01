import React from "react";
import Navbar from "../navigation/Nav";

import {
  Text,
  Button,
  Link,
  Container,
  Stack,
  Box,
  Heading,
  useColorModeValue,
  HStack,
  VStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import Elevator from "../elem/Elevator";
import { FaPhone } from "react-icons/fa";
import { buttons } from "../../utils";
import { ContainerData } from "../../utils";
import ButtonBlock from "../elem/ButtonTemplate";
import { InstructorsPhone, SocialLinksContacts } from "../../utils";
import SmallCentered from "../elem/Footer";
import { useContactsHooks } from "../../hooks";
import FlexContainer from "../elem/FlexContainer";
import CustomHeading from "../elem/HeadingTemplate";
import SmallHeading from "../elem/SmallHeadingTemplate";
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
        <FlexContainer
          w={16}
          h={16}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </FlexContainer>
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
  const { handleButtonClick } = useContactsHooks();
  const callPhoneNumber = (phoneNumber) => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return (
    <>
      <Navbar />
      <Elevator />
      {/* =====================================окна с гугл картой и ютубом ================================*/}
      <FlexContainer flexDir={"column"}>
        {ContainerData.map((container, index) => (
          <Container maxW={"7xl"} key={index} padding={2}>
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
              direction={{ base: "column", md: "column", lg: "row" }}
            >
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                {" "}
                <CustomHeading
                  text={container.headingText}
                  text2={container.headingText1}
                  lineHeight={1.1}
                  fontWeight={600}
                  textAlign={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "left",
                  }}
                />
                <Text color={"black"} padding={"5px"}>
                  {container.street}
                  <br />
                  {container.locationInfo} <br />
                  {container.bus}
                  <br /> {container.trolley}
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
                  {buttons.map((button, index) => (
                    <ButtonBlock
                      key={index}
                      label={button.label}
                      onClick={() => handleButtonClick(button.id)}
                      colorScheme={button.colorScheme || "gray"}
                      bgColor={button.bgColor || "gray.100"}
                    />
                  ))}
                </Stack>
              </Stack>
              <FlexContainer flex={1} w={"full"} flexDir={"column"}>
                <Box
                  height={"300px"}
                  rounded={"2xl"}
                  boxShadow={"2xl"}
                  width={"full"}
                  overflow={"hidden"}
                >
                  <iframe
                    src={container.mapEmbedURL}
                    width="100%"
                    height="100%"
                    title="Основное видео"
                    loading="lazy"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Box>{" "}
              </FlexContainer>{" "}
            </Stack>{" "}
          </Container>
        ))}

        {/*============================= бокс с номерами ===================================== */}
        <Box py={12} id="InstructorContact">
          <VStack spacing={2} textAlign="center" p={4}>
            <SmallHeading text={" Контакти наших інструкторів"} />
          </VStack>
          <Stack
            direction={{ base: "column", md: "column", lg: "row" }}
            textAlign="center"
            justify="center"
            spacing={{ base: 4, lg: 10 }}
            py={10}
            p={4}
            flexWrap={"wrap"}
          >
            {InstructorsPhone.map((instructor, index) => (
              <PriceWrapper key={index}>
                <Box py={4} px={12}>
                  <Text fontWeight="500" fontSize="xl">
                    {instructor.category}
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="xl " fontWeight="600">
                      {instructor.name}
                    </Text>
                  </HStack>
                </Box>
                <VStack bg={"gray.50"} py={4} borderBottomRadius={"xl"}>
                  <List spacing={3} textAlign="start" px={12}>
                    <ListItem>
                      <ListIcon as={FaPhone} color="green.500" mr={2} />
                      {instructor.phone}
                    </ListItem>
                  </List>
                  <Box w="80%" pt={7}>
                    <Button
                      w="full"
                      colorScheme="blue"
                      variant="outline"
                      onClick={() => callPhoneNumber(instructor.phone)}
                    >
                      Подзвонити
                    </Button>
                  </Box>
                </VStack>
              </PriceWrapper>
            ))}
          </Stack>
        </Box>
        {/*======================================= бокс с соцсетями====================================== */}
        <Box p={4}>
          <SmallHeading
            id="Society"
            text={"  Yamasaki у соцмережах!"}
            text1={
              "Слідкуйте за новинами та подіями життя нашої академії, також завжди раді новим людям у наших лавах! Підписуйся, питай, приєднуйся!"
            }
          />

          <Container maxW={"5xl"} mt={12} mb={12} p={4}>
            <FlexContainer flexWrap="wrap" gridGap={6} p={4}>
              {SocialLinksContacts.map((link, index) => (
                <Link href={link.href} isExternal key={index}>
                  <Card
                    heading={link.heading}
                    icon={link.icon}
                    description={link.description}
                  />
                </Link>
              ))}
            </FlexContainer>
          </Container>
        </Box>
      </FlexContainer>
      <SmallCentered />
    </>
  );
};

export default Contacts;
