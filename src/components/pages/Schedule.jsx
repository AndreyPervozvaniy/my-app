import React from "react";
import Navbar from "../navigation/Nav";
import { Box, Container, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import { statData } from "../../utils";
import SmallCentered from "../elem/Footer";
import { BiTimer } from "react-icons/bi";
const Schedule = () => {
  return (
    <>
      <Navbar />
      <Flex alignItems="center" justifyContent="center" padding={"10%"}>
        <Container maxW="7xl" p={{ base: 5, md: 10 }} textAlign={"center"}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3 }}
            spacing={5}
            mt={12}
            mb={4}
          >
            {statData.map((data) => (
              <Box
                key={data.id}
                p={5}
                boxShadow="md"
                rounded="lg"
                borderWidth={2}
              >
                <Text fontWeight="extrabold" fontSize="x-large">
                  {data.score}
                </Text>
                <Text>{data.label}</Text>
                <Text>{data.label2}</Text> <Text>{data.label3}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Flex>{" "}
      <SmallCentered />
    </>
  );
};
export default Schedule;
