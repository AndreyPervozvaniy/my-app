"use client";

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";

export default function Pricing() {
  return (
    <Center py={6} w={"100%"}>
      <Flex justifyContent={"space-between"}>
        <Box
          margin={"0 1rem"}
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
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={3}
              color={"green.500"}
              rounded={"full"}
            >
              BJJ / MMA
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"4xl"} fontWeight={800}>
                Діти
              </Text>
              <Text color={"gray.500"} fontSize={"lg"}>
                6-9 років
              </Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                формати Gi/No-Gi
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Вивчення базових технік та основ BJJ/MMA
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Вивчення теорії, drill сесії, спаринги
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Розвиток дисципліни, поваги та самовпевненості
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          margin={"0 1rem"}
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
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={3}
              color={"green.500"}
              rounded={"full"}
            >
              BJJ/MMA
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"4xl"} fontWeight={800}>
                Підлітки
              </Text>
              <Text color={"gray.500"} fontSize={"lg"}>
                10-15 років
              </Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                формати Gi/No-Gi
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Вивчення просунутих технік BJJ/MMA
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Роз'яснення деталей, вільні та позиційні спаринги.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Пояснення ключових цінностей
              </ListItem>
            </List>
          </Box>
        </Box>{" "}
        <Box
          margin={"0 1rem"}
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
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("green.50", "green.900")}
              p={2}
              px={3}
              color={"green.500"}
              rounded={"full"}
            >
              BJJ
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"4xl"} fontWeight={800}>
                Дорослі
              </Text>
              <Text color={"gray.500"} fontSize={"lg"}>
                Раді всім
              </Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                формати Gi/No-Gi
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Вивчення концепцій та методів змагального BJJ.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Вільні спаринги, drill сесії,боротьба за завданням
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.400" />
                Сесії питання - відповідь
              </ListItem>
            </List>
          </Box>
        </Box>
      </Flex>
    </Center>
  );
}
