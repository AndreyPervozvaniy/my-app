import React from "react";
import Navbar from "../navigation/Navbar";
import { Image, Box, Text, Flex } from "@chakra-ui/react";
import vlad from "../../assets/img/vlados.jpg";
import Coach from "../../assets/img/coach1.png";
import Icon from "../../assets/img/icon.png";
import Waterlogo from "../../assets/img/watericon.png";
import Smile from "../../assets/img/try1.jpg";

const Instructors = () => {
  return (
    <>
      <Navbar />{" "}
      <Box
        position="absolute"
        opacity="50%"
        backgroundImage={`url(${Waterlogo})`}
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        h="100vh"
        w="100vw"
        zIndex="-1"
      />
      <Flex
        h="100vh"
        overflow="hidden"
        alignItems="center"
        justifyContent="space-between"
        padding="5%  "
      >
        <Flex
          className="card"
          w="350px"
          h="480px"
          cursor="pointer"
          position="relative"
          _hover={{
            "#front": {
              transform: "perspective(600px) rotateY(-180deg)",
            },
            "#back": {
              transform: "perspective(600px) rotateY(0)",
            },
          }}
        >
          <Flex
            id="front"
            w="100%"
            h="100%"
            overflow="hidden"
            position="absolute"
            transition="transform 0.5s ease"
            borderRadius="10px"
            background="linear-gradient(#d6d6d6, #f2f2f2)"
            transform="perspective(600px) rotateY(0)"
          >
            <Image
              w="100%"
              h="100%"
              display="block"
              objectFit="cover"
              src={Smile}
            />
          </Flex>
          <Box
            w="100%"
            h="100%"
            overflow="hidden"
            position="absolute"
            transition="transform 0.5s ease"
            borderRadius="10px"
            background="linear-gradient(#d6d6d6, #f2f2f2)"
            id="back"
            transform="perspective(600px) rotateY(180deg)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Box top="15%" opacity="10%" pos="absolute">
              <Image src={Icon} />
            </Box>
            <Box>
              <Text color="#444" fontWeight="700" fontSize="24px">
                Шерстюк Микола Васильович
              </Text>
              <Text
                display="block"
                fontSize="18px"
                fontWeight="600"
                padding="10px"
              >
                Пурпурний пасок. Тренер дитячої групи з Бразильського джиу
                джитсу.
              </Text>
            </Box>
          </Box>
        </Flex>
        <Flex
          className="card"
          w="350px"
          h="480px"
          cursor="pointer"
          position="relative"
          _hover={{
            "#front": {
              transform: "perspective(600px) rotateY(-180deg)",
            },
            "#back": {
              transform: "perspective(600px) rotateY(0)",
            },
          }}
        >
          <Flex
            id="front"
            w="100%"
            h="100%"
            overflow="hidden"
            position="absolute"
            transition="transform 0.5s ease"
            borderRadius="10px"
            background="linear-gradient(#d6d6d6, #f2f2f2)"
            transform="perspective(600px) rotateY(0)"
            css={{
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              w="100%"
              h="100%"
              display="block"
              objectFit="cover"
              src={Coach}
            />
          </Flex>
          <Flex
            w="100%"
            h="100%"
            overflow="hidden"
            position="absolute"
            transition="transform 0.5s ease"
            borderRadius="10px"
            background="linear-gradient(#d6d6d6, #f2f2f2)"
            id="back"
            transform="perspective(600px) rotateY(180deg)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            css={{
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
          >
            <Box top="15%" opacity="10%" pos="absolute">
              <Image src={Icon} />
            </Box>
            <Box>
              <Text color="#444" fontWeight="700" fontSize="24px">
                Косенко Валентин Михайлович
              </Text>
              <Text
                display="block"
                fontSize="18px"
                fontWeight="600"
                padding="10px"
              >
                Тренер дорослої групи. Коричневий пасок з Бразильського
                джиу-джитсу. Суддя турнірів з Бразильського джиу-джитсу в
                Україні.
              </Text>
            </Box>
          </Flex>
        </Flex>{" "}
        <Flex
          className="card"
          w="350px"
          h="480px"
          cursor="pointer"
          position="relative"
          _hover={{
            "#front": {
              transform: "perspective(600px) rotateY(-180deg)",
            },
            "#back": {
              transform: "perspective(600px) rotateY(0)",
            },
          }}
        >
          <Flex
            id="front"
            w="100%"
            h="100%"
            overflow="hidden"
            position="absolute"
            transition="transform 0.5s ease"
            borderRadius="10px"
            background="linear-gradient(#d6d6d6, #f2f2f2)"
            transform="perspective(600px) rotateY(0)"
          >
            <Image
              w="100%"
              h="100%"
              display="block"
              objectFit="cover"
              src={vlad}
            />
          </Flex>
          <Flex
            w="100%"
            h="100%"
            overflow="hidden"
            position="absolute"
            transition="transform 0.5s ease"
            borderRadius="10px"
            background="linear-gradient(#d6d6d6, #f2f2f2)"
            id="back"
            transform="perspective(600px) rotateY(180deg)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Box top="15%" opacity="10%" pos="absolute">
              <Image src={Icon} />
            </Box>
            <Box>
              <Text color="#444" fontWeight="700" fontSize="24px">
                Мирошников Владислав
              </Text>
              <Text
                display="block"
                fontSize="18px"
                fontWeight="600"
                padding="10px"
              >
                Досвідчений тренер з ММА та Бойового самбо . Практитує
                бразильське джиу-джитсу.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Instructors;
