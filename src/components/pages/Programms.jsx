import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../navigation/Nav";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { MdLocalShipping } from "react-icons/md";
import { ProgrammsInfo } from "../../content/ProgrammsContent";
import Elevator from "../elem/Elevator";

const Programms = () => {
  return (
    <>
      <Navbar />
      <Elevator />
      <Flex alignItems="center" justifyContent="center">
        <Container maxW={"7xl"}>
          {ProgrammsInfo.map((product, index) => (
            <SimpleGrid
              key={index}
              columns={{ base: 1, lg: 1 }}
              spacing={{ base: 2, md: 2 }}
              py={{ base: 18, md: 6 }}
            >
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"product image"}
                  src={product.imageUrl}
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              </Flex>
              <Stack spacing={{ base: 6, md: 2 }}>
                <Box as={"header"}>
                  <Heading
                    padding={"2%"}
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                  >
                    {product.title}
                  </Heading>
                  {/* <Text
              color={("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              $350.00 USD
            </Text> */}
                </Box>

                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={"column"}
                  divider={
                    <StackDivider borderColor={("gray.200", "gray.600")} />
                  }
                >
                  <VStack spacing={{ base: 4, sm: 6 }}>
                    {/* <Text
                color={("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text> */}
                    <Text fontSize={"lg"} padding={"2%"}>
                      {product.description}
                    </Text>
                  </VStack>
                  <Box>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={("yellow.500", "yellow.300")}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      padding={"2%"}
                    >
                      Features
                    </Text>

                    <SimpleGrid columns={{ base: 1, md: 2 }} padding={"2%"}>
                      {product.features.map((feature, featureIndex) => (
                        <List key={featureIndex}>
                          <ListItem>{feature}</ListItem>
                        </List>
                      ))}
                    </SimpleGrid>
                  </Box>
                  <Box>
                    {/* <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={("yellow.500", "yellow.300")}
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                      padding={"2%"}
                    >
                      Product Details
                    </Text>

                    <List spacing={2} padding={"2%"}>
                      {product.details.map((detail, detailIndex) => (
                        <ListItem key={detailIndex}>
                          <Text as={"span"} fontWeight={"bold"}>
                            {detail.title}:
                          </Text>{" "}
                          {detail.value}
                        </ListItem>
                      ))}
                    </List> */}
                  </Box>
                </Stack>
              </Stack>
            </SimpleGrid>
          ))}
        </Container>
      </Flex>
    </>
  );
};

export default Programms;
