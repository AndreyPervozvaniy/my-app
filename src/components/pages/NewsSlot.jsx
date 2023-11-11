import React from "react";
import Navbar from "../navigation/Nav";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import { useNewsSlotHooks } from "../../hooks";
import FlexContainer from "../elem/FlexContainer";
import { Link } from "react-router-dom";

const NewsSlot = () => {
  const {
    router,
    text,
    img,
    img2,url,
    isImageExpanded,
    setIsImageExpanded,
    showDownloadButton,
    handleDownload,
  } = useNewsSlotHooks();
  return (
    <>
      <Navbar />{" "}
      <FlexContainer h="100vh" w="100%">
        <Box
          w="90%"
          h="calc(100vh - 70px)"
          marginTop="70px"
          mb="20px"
          cursor="pointer"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FlexContainer
            borderRadius="15px"
            p="10px"
            mb="10px"
            cursor="pointer"
            flexDirection="column"
          >
            <Image w="80%" h="auto" src={img}></Image>
            <Text
              fontSize="18px"
              padding="10px"
              backgroundColor="white"
              opacity="80%"
            >
              {text}
            </Text>
            <Image
              padding="10px"
              w={isImageExpanded ? "110%" : "80%"}
              h="auto"
              src={img2}
              onClick={() => setIsImageExpanded(!isImageExpanded)}
            ></Image>
            <Button
              background="white"
              border="1px solid grey"
              borderRadius="20px"
              className="fa fa-arrow-left"
              padding="10px"
              marginBottom="20px"
              onClick={() => router("/news")}
            >
              <Text padding="10px">Повернутися</Text>
            </Button>{" "}
            {showDownloadButton && (
              <Button
                background="white"
                border="1px solid grey"
                borderRadius="20px"
                padding="10px"
                marginBottom="20px"
                onClick={handleDownload}
              >
                <Text padding="10px">Завантажити результат</Text>
              </Button>
            )}
            {showDownloadButton && (
              <Link to={url}> <Button
                background="white"
                border="1px solid grey"
                borderRadius="20px"
                padding="10px"
                marginBottom="20px"
                 
              >
                <Text padding="10px">Відвідати подію</Text>
              </Button></Link>
             
            )}
          </FlexContainer>{" "}
        </Box>
      </FlexContainer>
    </>
  );
};

export default NewsSlot;
