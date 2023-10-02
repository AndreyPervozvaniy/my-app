"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ReactElement } from "react";
import {
  FcGraduationCap,
  FcBullish,
  FcConferenceCall,
  FcLike,
  FcChargeBattery,
  FcHome,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
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

export default function AdvantageTemplate() {
  return (
    <Flex justifyContent="center" alignContent="center" w="100%">
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
    </Flex>
  );
}
