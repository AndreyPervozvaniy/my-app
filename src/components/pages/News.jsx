import React, { useEffect, useMemo, useState } from "react";
import { Box, Flex, Text, Image, Button, Fade } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Navbar from "../navigation/Nav";
import Waterlogo from "../../assets/img/watericon.png";
import { PATHS } from "../../routes";
import Elevator from "../elem/Elevator";
import SmallCentered from "../elem/Footer";
import { useNewsHooks } from "../../hooks";
function News() {
  const { router, page, setPage, pagination, ourNews } = useNewsHooks();

  return (
    <>
      <Navbar /> <Elevator />
      <Box
        position="fixed"
        opacity="60%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        h="100vh"
        w="100vw"
        zIndex="-1"
      />{" "}
      <Flex justifyContent="center" alignItems="center" h="100vh" w="100%">
        <Box w="full" h="calc(100vh - 70px)" marginTop="70px">
          {ourNews.map((item, index) => (
            <Flex
              p="10px"
              mb="10px"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              key={index}
            >
              <Image
                w="60%"
                src={item.image}
                onClick={() =>
                  router(PATHS.NEW_SLOT, {
                    state: {
                      text: item.text,
                      img: item.image,
                      img2: item.image2,
                    },
                  })
                }
              ></Image>
              <Text
                textAlign="center"
                w="100%"
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
                onClick={() =>
                  router(PATHS.NEW_SLOT, {
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
            </Flex>
          ))}
          <Flex justifyContent="center" padding="20px">
            <Flex justify="space-around" w="100%">
              {pagination.map((item, index) => (
                <Button
                  justifyContent="center"
                  alignItems="center"
                  key={index}
                  borderRadius="50%"
                  h="40px"
                  transition="all 0.5s ease"
                  w="40px"
                  cursor="pointer"
                  onClick={() => setPage(item)}
                  _hover={{ bg: "rgb(63, 72, 204)", transform: "scale(1.2)" }}
                >
                  {item}
                </Button>
              ))}
            </Flex>
          </Flex>{" "}
          <SmallCentered />
        </Box>{" "}
      </Flex>{" "}
    </>
  );
}

export default News;
