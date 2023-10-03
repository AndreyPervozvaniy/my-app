"use client";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function ContactTemplate() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        textAlign={{ base: "center", sm: "center", md: "center", lg: "left" }}
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
            Маршрути автобусів: A153, 124A, A115, A149, A64Г, А31, А177, А107,
            А136, А88, А38, А43,А158 <br /> Маршрути тролейбусів: 20, 7, 17, 3,
            15
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
              Get started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              How It Works
            </Button>{" "}
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
              How It Works
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
        </Flex>
      </Stack>
    </Container>
  );
}
