"use client";

import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface PackageTierProps {
  title: string;
  work: string;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  work,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"md"}>{title}</Heading>
      <List spacing={3} textAlign="start">
        <ListItem>
          <Heading size={"md"}>
            <ListIcon as={FaCheckCircle} color="green.500" mr={2} />
            {work}
          </Heading>
        </ListItem>
      </List>
      <Heading size={"xl"}>{typePlan}</Heading>
      <Stack>
        <Button
          size="md"
          color={useColorModeValue(colorTextLight, colorTextDark)}
          bgColor={useColorModeValue(bgColorLight, bgColorDark)}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};
const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} width="full">
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              The Right Plan for <Text color="purple.400">Your Business</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quod in iure vero. Facilis magnam, sed officiis commodi labore
              odit.
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <PackageTier
          title={"Микола Шерстюк"}
          typePlan="+380 73 203 76
          64"
          work="Інструктор підліткової та дитячої групи"
        />
        <Divider />
        <PackageTier
          title={"Косенко Валентин"}
          typePlan="+380 50 535
          09 61"
          work="Інструктор дорослої групи BJJ  "
        />
        <Divider />
        <PackageTier
          title={"Мирошников Владислав"}
          typePlan=" +380 95 507 33 70"
          work="Інструктор з ММА та Бойового самбо"
        />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
