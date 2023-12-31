import Navbar from "../navigation/Nav";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ProgrammsInfo } from "../../content/ProgrammsContent";
import Elevator from "../elem/Elevator";
import { FcPlus } from "react-icons/fc";
import SmallCentered from "../elem/Footer";
import FlexContainer from "../elem/FlexContainer";
const Programms = () => {
  return (
    <>
      <Navbar />
      <Elevator />
      <FlexContainer>
        <Container maxW={"7xl"}>
          {ProgrammsInfo.map((product, index) => (
            <SimpleGrid
              key={index}
              columns={{ base: 1, lg: 1 }}
              spacing={{ base: 2, md: 2 }}
              py={{ base: 18, md: 6 }}
            >
              <Flex paddingTop={"5%"}>
                <Image
                loading="eager"
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
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
                    color={"#3f48cc"}
                    p={2}
                  >
                    {product.title}
                  </Heading>
                </Box>
                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={"column"}
                  divider={
                    <StackDivider borderColor={("gray.200", "gray.600")} />
                  }
                >
                  <VStack spacing={{ base: 4, sm: 6 }}>
                    <Text fontSize={"lg"} p={2}>
                      {product.description}
                    </Text>
                  </VStack>
                  <Box>
                    <Text
                      fontSize={{ base: "2xl", sm: "3xl", lg: "3xl" }}
                      color={"#3f48cc"}
                      fontWeight={"500"}
                      p={2}
                    >
                      Переваги
                    </Text>
                    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} p={2}>
                      {product.features.map((feature, featureIndex) => (
                        <List key={featureIndex}>
                          <ListItem
                            display="flex"
                            alignItems="center"
                            borderBottom={{
                              base: "0.1px solid grey",
                              sm: "0.1px solid grey",
                              md: "none",
                              lg: "none",
                            }}
                          >
                            <ListIcon as={FcPlus} color="#3f48cc" mr={1} />
                            {feature}
                          </ListItem>
                        </List>
                      ))}
                    </SimpleGrid>
                  </Box>
                  <Box></Box>
                </Stack>
              </Stack>
            </SimpleGrid>
          ))}
        </Container>
      </FlexContainer>
      <SmallCentered />
    </>
  );
};

export default Programms;
