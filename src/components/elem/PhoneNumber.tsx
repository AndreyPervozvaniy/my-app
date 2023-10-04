"use client";

import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaPhone } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

function PriceWrapper(props: Props) {
  const { children } = props;

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

export default function ThreeTierPricing() {
  const toast = useToast();
  const saveInClipBoard = (num) => {
    navigator.clipboard.writeText(num);
  };
  return (
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
  );
}
