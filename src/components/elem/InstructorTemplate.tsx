"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import {
  GiBlackBelt,
  GiTeacher,
  GiSandsOfTime,
  GiPunchBlast,
} from "react-icons/gi";
import { ReactElement } from "react";
import React from "react";
import Smile from "../../assets/img/try1.jpg";
import Coach from "../../assets/img/coach1.png";
import vlad from "../../assets/img/vlados.jpg";
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={12}
        h={12}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function InstructorsTemplate() {
  return (
    <Container maxW={"5xl"} py={12}>
      {" "}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} padding={"20px"}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Інструктор
          </Text>
          <Heading fontWeight="bold">Косенко Валентин Михайлович</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Інструктор дорослої групи. Суддя турнірів з Бразильського
            джиу-джитсу в Україні.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={GiBlackBelt} color={"white"} w={8} h={8} />}
              iconBg={useColorModeValue("brown", "brown ")}
              text={"Коричневий пасок"}
            />
            <Feature
              icon={<Icon as={GiTeacher} color={"green.500"} w={8} h={8} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"  Інструктор дорослої групи"}
            />
            <Feature
              icon={
                <Icon as={GiSandsOfTime} color={"purple.500"} w={8} h={8} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Практикує джиу-джитсу 12 років"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"xl"}
            alt={"feature image"}
            src={Coach}
            objectFit={"cover"}
            w="350px"
            h="450px"
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} padding={"20px"}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Інструктор
          </Text>
          <Heading fontWeight={"bold"}> Шерстюк Микола Васильович</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Інструктор підліткової та дитячої групи з Бразильського джиу джитсу.
            Займається підготовкою молодших груп до змагань та турнірів.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={GiBlackBelt} color={"white "} w={8} h={8} />}
              iconBg={useColorModeValue("purple.700", "purple.900")}
              text={"  Пурпурний пасок"}
            />
            <Feature
              icon={<Icon as={GiTeacher} color={"green.500"} w={8} h={8} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={" Інструктор підліткової та дитячої групи"}
            />
            <Feature
              icon={
                <Icon as={GiSandsOfTime} color={"purple.500"} w={8} h={8} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Практикує джиу-джитсу 8 років"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"xl"}
            alt={"feature image"}
            src={Smile}
            objectFit={"fill"}
            w="350px"
            h="450px"
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} padding={"20px"}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Інструктор
          </Text>
          <Heading fontWeight="bold">Мирошников Владислав Ігорович</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Досвідчений тренер з ММА та Бойового самбо . Практитує бразильське
            джиу-джитсу.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={GiPunchBlast} color={"black"} w={8} h={8} />}
              iconBg={useColorModeValue("white", "white")}
              text={"Володіє навичками кількох дисциплін бойових мистецтв"}
            />
            <Feature
              icon={<Icon as={GiTeacher} color={"green.500"} w={8} h={8} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Інструктор підліткової та дитячої групи"}
            />
            <Feature
              icon={
                <Icon as={GiSandsOfTime} color={"purple.500"} w={8} h={8} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Практикує ММА та Бойове самбо 6 років"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"xl"}
            alt={"feature image"}
            src={vlad}
            objectFit={"cover"}
            w="350px"
            h="450px"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
