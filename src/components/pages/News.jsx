import React, { useEffect, useMemo, useState } from "react";
import { Box, Flex, Text, Image, Button, Fade } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Navbar from "../navigation/Navbar";
import { useNavigate } from "react-router-dom";
import { newscontent } from "../../content/newscontent";
import Waterlogo from "../../assets/img/watericon.png";
import { useScrollEvent } from "../../hooks";
import { PATHS } from "../../routes";
function News() {
  const router = useNavigate();
  const [page, setPage] = useState(1);
  const [isVisibleTopButton] = useScrollEvent();
  const pagination = useMemo(() => {
    const pagesCount = Math.ceil(newscontent.length / 5);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return pages;
  }, []);

  const ourNews = useMemo(() => {
    return newscontent.slice((page - 1) * 5, page * 5);
  }, [page]);

  return (
    <>
      <Navbar />{" "}
      <Fade in={isVisibleTopButton}>
        <Button
          className="fa fa-arrow-up"
          aria-lavel="topButton"
          zIndex="12"
          position="fixed"
          right={{ base: "5px", xl: "10" }}
          bottom="55px"
          w={50}
          h={50}
          color="white"
          background="rgb(63, 72, 204)"
          borderRadius="full"
          colorScheme="gray"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        ></Button>
      </Fade>{" "}
      <Box
        position="fixed"
        opacity="60%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        // backgroundPosition="center center"
        h="100vh"
        w="100vw"
        zIndex="-1"
      />{" "}
      <Flex justifyContent="center" alignItems="center" h="100vh" w="100%">
        <Box w="90%" h="calc(100vh - 70px)" marginTop="70px">
          {ourNews.map((item, index) => (
            <Flex
              // border="1px solid gray"
              borderBottom="3px double black"
              // borderRadius="15px"
              p="10px"
              mb="10px"
              cursor="pointer"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              key={index}
              // onClick={() =>
              //   router("/NewsSlot", {
              //     state: { text: item.text, img: item.image },
              //   })
              // }
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
                // maxHeight="1rem"
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
            <Flex justify="space-between" w="100%">
              {pagination.map((item, index) => (
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  key={index}
                  border="1px solid black"
                  borderRadius="50%"
                  h="40px"
                  transition="all 0.5s ease"
                  w="40px"
                  cursor="pointer"
                  onClick={() => setPage(item)}
                  _hover={{ bg: "rgb(63, 72, 204)", transform: "scale(1.2)" }}
                >
                  {item}
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default News;
