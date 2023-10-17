import React, { useState } from "react";
import Navbar from "../navigation/Nav";
import { useLocation } from "react-router-dom";
import Waterlogo from "../../assets/img/watericon.png";
import { Flex, Box, Image, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const NewsSlot = () => {
  const router = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { text, img, img2 } = state;
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(!!img2);

  // Функция для обработки скачивания при нажатии кнопки "Скачать"
  const handleDownload = () => {
    // Создаем элемент-якорь для запуска скачивания
    const a = document.createElement("a");
    a.href = img2;
    a.download = "Result.jpg"; // Вы можете настроить имя файла здесь
    a.click();
  };
  return (
    <>
      <Navbar />{" "}
      <Box
        position="fixed"
        opacity="60%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        h="100vh"
        w="100vw"
        zIndex="-1"
      />
      <Flex justifyContent="center" alignItems="center" h="100vh" w="100%">
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
          <Flex
            borderRadius="15px"
            p="10px"
            mb="10px"
            cursor="pointer"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
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
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default NewsSlot;
