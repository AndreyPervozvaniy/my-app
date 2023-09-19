import React, { useEffect, useMemo, useState } from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import Navbar from "../navigation/Navbar";
import { newscontent } from "../elem/newscontent";

function News() {
  const [page, setPage] = useState(1);

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
      <Flex justifyContent="center" alignItems="center" h="100vh" w="100%">
        <Box w="90%" h="calc(100vh - 70px)" marginTop="70px">
          {ourNews.map((item) => (
            <Flex
              border="1px solid gray"
              p="10px"
              mb="10px"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Image w="60%" src={item.image}></Image>
              <Text
                textAlign="center"
                justifyContent="center"
                fontSize={{
                  base: "12px",
                  sm: "14px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
                }}
              >
                {item.text}
              </Text>
            </Flex>
          ))}
          <Flex justify="space-between">
            {pagination.map((item, index) => (
              <Box
                key={index}
                border="1px solid black"
                borderRadius="15%"
                p="10px"
                mr="5px"
                cursor="pointer"
                onClick={() => setPage(item)}
                _hover={{
                  bg: "green",
                }}
              >
                {item}
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default News;
