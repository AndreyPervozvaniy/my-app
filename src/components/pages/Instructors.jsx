import React from "react";
import Navbar from "../navigation/Navbar";
import { Image, Box, Text } from "@chakra-ui/react";
import vlad from "../../assets/img/vlados.jpg";
import Mikola from "../../assets/img/Mikola.jpg";
import Coach from "../../assets/img/coach1.png";
import Icon from "../../assets/img/icon.png";
import Waterlogo from "../../assets/img/watericon.png";
import Smile from "../../assets/img/try1.jpg";
import PhotoKolya from "../../assets/img/Dyadya Kolya.jpg";
const Instructors = () => {
  return (
    <>
      <Navbar />{" "}
      <Box
        backgroundImage={Waterlogo}
        backgroundSize="contain"
        h="100vh"
        position="absolute"
        opacity="60%"
      />
      <Box h="100vh" overflow="hidden">
        <Box
          className="card"
          w="350px"
          h="480px"
          cursor="pointer"
          position="absolute"
          top="20%"
          left="35s%"
          _hover={{
            "#front": {
              transform: "perspective(600px) rotateY(-180deg)",
            },
            "#back": {
              transform: "perspective(600px) rotateY(0)",
            },
          }}
        >
          <Box
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
              src={Coach}
            />
          </Box>
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
            <Box top="15%" opacity="15%" pos="absolute">
              <Image src={Icon} />
            </Box>
            <Box>
              <Text color="#444" fontSize="24px">
                Косенко Валентин Михайлович
              </Text>
              <Text
                display="block"
                fontSize="18px"
                fontWeight="700"
                margin="5px 0 10px"
              >
                Тренер дорослої групи. Коричневий пасок з Бразильського
                джиу-джитсу. Суддя турнірів з Бразильського джиу-джитсу в
                Україні.
              </Text>
            </Box>
          </Box>
        </Box>{" "}
        <Box
          className="card"
          w="350px"
          h="480px"
          cursor="pointer"
          position="absolute"
          top="20%"
          left="5%"
          _hover={{
            "#front": {
              transform: "perspective(600px) rotateY(-180deg)",
            },
            "#back": {
              transform: "perspective(600px) rotateY(0)",
            },
          }}
        >
          <Box
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
          </Box>
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
            <Box top="15%" opacity="15%" pos="absolute">
              <Image src={Icon} />
            </Box>
            <Box>
              <Text color="#444" fontSize="24px">
                Шерстюк Микола Васильович
              </Text>
              <Text
                display="block"
                fontSize="18px"
                fontWeight="700"
                margin="5px 0 10px"
              >
                Пурпурний пасок. Тренер дитячої групи з Бразильського джиу
                джитсу.
              </Text>
            </Box>
          </Box>
        </Box>{" "}
        <Box
          className="card"
          w="350px"
          h="480px"
          cursor="pointer"
          position="absolute"
          top="20%"
          left="65%"
          _hover={{
            "#front": {
              transform: "perspective(600px) rotateY(-180deg)",
            },
            "#back": {
              transform: "perspective(600px) rotateY(0)",
            },
          }}
        >
          <Box
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
          </Box>
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
            <Box top="15%" opacity="15%" pos="absolute">
              <Image src={Icon} />
            </Box>
            <Box>
              <Text color="#444" fontSize="24px">
                Мирошников Владислав
              </Text>
              <Text
                display="block"
                fontSize="18px"
                fontWeight="700"
                margin="5px 0 10px"
              >
                Досвідчений тренер з ММА та Бойового самбо . Практитує
                бразильське джиу-джитсу.
              </Text>
            </Box>
          </Box>
        </Box>
        {/* <div className="card" id="t">
          <div className="front">
            <Image w="100%" h="100%" src={Smile} />
          </div>
          <div className="back">
            <div className="logo">
              <Image src={Icon} />
            </div>
            <div className="content">
              <h1>
                Шерстюк Микола Васильович
                <span>
                  Пурпурний пасок. Тренер дитячої групи з Бразильського джиу
                  джитсу.
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="card" id="f">
          <div className="front">
            <Image w="100%" h="100%" src={vlad} />
          </div>
          <div className="back">
            {" "}
            <div className="logo">
              <Image src={Icon} />
            </div>
            <div className="content">
              <h1>
                Мирошников Владислав
                <span>
                  Досвідчений тренер з ММА та "Бойового самбо". Практитує
                  бразильське джиу-джитсу.
                </span>
              </h1>
            </div>
          </div>
        </div> */}
      </Box>
    </>
  );
};

export default Instructors;
