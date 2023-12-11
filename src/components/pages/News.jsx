import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Navbar from "../navigation/Nav";
import { PATHS } from "../../routes";
import Elevator from "../elem/Elevator";
import SmallCentered from "../elem/Footer";
import { useNewsHooks } from "../../hooks";
import FlexContainer from "../elem/FlexContainer";

function News() {
  const { router, setPage, pagination, ourNews, page } = useNewsHooks();

  return (
    <>
      <Navbar /> <Elevator />
      <FlexContainer h="100vh" w="100%">
        <Box w="full" h="calc(100vh - 70px)" marginTop="70px">
          {ourNews.map((item, index) => (
            <FlexContainer
              p="10px"
              mb="10px"
              flexDirection="column"
              key={index}
            >
              <Image
                w="50%"
                cursor="pointer"
                rounded={"md"}
                src={item.image}
                onClick={() =>
                  router(PATHS.NEWS_SLOT.replace(":id", `id=${item.id}`), {
                    state: {
                      text: item.text,
                      img: item.image,
                      img2: item.image2,
                      url: item.url,
                    },
                  })
                }
              ></Image>
              <Text
                textAlign="center"
                w="80%"
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                backgroundColor="white"
                opacity="80%"
                padding="20px"
              >
                {item.text}
              </Text>
              <Button
                background={"white"}
                onClick={() =>
                  router(PATHS.NEWS_SLOT.replace(":id", `id=${item.id}`), {
                    state: {
                      text: item.text,
                      img: item.image,
                      img2: item.image2,
                    },
                  })
                }
              >
                <Text padding="5px">Дізнатися більше</Text> <Search2Icon />
              </Button>
            </FlexContainer>
          ))}
          <FlexContainer padding="20px">
            <Flex justify="space-around" w="30%">
              {pagination.map((item, index) => (
                <Button
                  justifyContent="center"
                  alignItems="center"
                  key={index}
                  border={"none"}
                  background={"white"}
                  borderRadius="50%"
                  h="40px"
                  transition="all 0.5s ease"
                  w="40px"
                  cursor="pointer"
                  style={{
                    color: page === item ? "gold" : "black",
                  }}
                  onClick={() => setPage(item)}
                  _hover={{ bg: "rgb(63, 72, 204)" }}
                >
                  {item}
                </Button>
              ))}
            </Flex>
          </FlexContainer>{" "}
          <SmallCentered />
        </Box>{" "}
      </FlexContainer>{" "}
    </>
  );
}

export default News;
