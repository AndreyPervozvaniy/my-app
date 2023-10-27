import React from "react";
import Navbar from "../navigation/Nav";
import { Flex } from "@chakra-ui/react";
import {
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
} from "@chakra-ui/react";
import { GiTeacher, GiSandsOfTime } from "react-icons/gi";
import Elevator from "../elem/Elevator";
import { InstructorsInfo } from "../../utils";
import SmallCentered from "../elem/Footer";
const Feature = ({ text, icon, iconBg }) => {
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
const Instructors = () => {
  return (
    <>
      <Navbar /> <Elevator />
      <Flex
        alignItems="center"
        justifyContent="center"
        padding="5%"
        flexDir="column"
      >
        <Container maxW={"5xl"} py={12}>
          {InstructorsInfo.map((instructor, index) => (
            <SimpleGrid
              key={index}
              columns={{ base: 1, md: 2 }}
              spacing={10}
              padding={"20px"}
            >
              <Stack spacing={4}>
                <Text
                  textTransform={"uppercase"}
                  color={"blue.400"}
                  fontWeight={600}
                  fontSize={"md"}
                  bg={"blue.50"}
                  p={2}
                  alignSelf={"flex-start"}
                  rounded={"md"}
                >
                  {instructor.title}
                </Text>
                <Heading fontWeight="bold">{instructor.name}</Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  {instructor.description}
                </Text>
                <Stack
                  spacing={4}
                  divider={<StackDivider borderColor={"gray.100"} />}
                >
                  <Feature
                    icon={instructor.icon}
                    iconBg={instructor.belt}
                    text={instructor.beltColor}
                  />
                  <Feature
                    icon={
                      <Icon as={GiTeacher} color={"green.500"} w={8} h={8} />
                    }
                    iconBg={"green.100"}
                    text={instructor.role}
                  />
                  <Feature
                    icon={
                      <Icon
                        as={GiSandsOfTime}
                        color={"purple.500"}
                        w={8}
                        h={8}
                      />
                    }
                    iconBg={"purple.100"}
                    text={instructor.experience}
                  />
                </Stack>
              </Stack>
              <Flex>
                <Image
                  rounded={"xl"}
                  alt={"feature image"}
                  src={instructor.imageSrc}
                  objectFit={"cover"}
                  w="350px"
                  h="450px"
                />
              </Flex>
            </SimpleGrid>
          ))}
        </Container>
      </Flex>
      <SmallCentered />
    </>
  );
};

export default Instructors;
