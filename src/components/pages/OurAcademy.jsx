import React from "react";
import Navbar from "../navigation/Nav";
import Waterlogo from "../../assets/img/watericon.png";
import {
  Box,
  Text,
  Flex,
  Heading,
  Container,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import SmallCentered from "../elem/Footer";
import { testimonialsData } from "../../utils";
const OurAcademy = () => {
  const Testimonial = (props) => {
    const { children } = props;

    return <Box>{children}</Box>;
  };

  const TestimonialContent = (props) => {
    const { children } = props;

    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        p={8}
        rounded={"xl"}
        align={"center"}
        pos={"relative"}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: "solid transparent",
          borderLeftWidth: 16,
          borderRight: "solid transparent",
          borderRightWidth: 16,
          borderTop: "solid",
          borderTopWidth: 16,
          borderTopColor: useColorModeValue("white", "gray.800"),
          pos: "absolute",
          bottom: "-16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {children}
      </Stack>
    );
  };

  const TestimonialHeading = (props) => {
    const { children } = props;

    return (
      <Heading as={"h3"} fontSize={"xl"}>
        {children}
      </Heading>
    );
  };

  const TestimonialText = (props) => {
    const { children } = props;

    return (
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize={"sm"}
      >
        {children}
      </Text>
    );
  };

  const TestimonialAvatar = ({ src, name, title }) => {
    return (
      <Flex align={"center"} mt={8} direction={"column"}>
        <Avatar src={src} mb={2} />
        <Stack spacing={-1} align={"center"}>
          <Text fontWeight={600}>{name}</Text>
          <Text
            fontSize={"sm"}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };
  return (
    <>
      <Navbar />{" "}
      <Container maxW={"full"} p={2}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Трохи про -
            <br />
            <Text as={"span"} color={"#3f48cc"}>
              нашу академію!
            </Text>
          </Heading>
          <Text
            color={"black"}
            fontSize={{ base: "lg", sm: "lg " }}
            // fontWeight={"bold"}
            textAlign={"center"}
          >
            Yamasaki Academy Jiu Jitsu Dnipro є представництвом міжнародної
            школи вивчення бразильського джиу-джитсу.
            <br />
            <br />В даний час академія Ямасакі має кілька шкіл джиу-джитсу і
            філій академій єдиноборств у Сполучених Штатах, Бразилії,
            Домініканській Республіці, Іспанії, Швеції та Україні.
            <br />
            <br /> Yamasaki Academy є одним з провідних клубів бразильського
            джиу-джитсу в світі. Заснована у 1981 році, Yamasaki Academy
            виховала багато відомих чемпіонів у світі бойових мистецтв. Клуби
            Yamasaki Academy працюють за певним підходом до тренувань, який
            включає в себе розвиток фізичної та ментальної сили, техніки
            бойового мистецтва, спаринги та інші елементи.
            <br />
            <br /> Yamasaki Academy має офіційний статус члена міжнародних
            федерацій бразильського джиу-джитсу IBJJF, AJP та української
            федерації UFBJJ.
            <br />
            <br /> Основними цілями нашої академії є розвиток та популяризація
            бразильського джиу-джитсу в Україні, всебічне вивчення всіх аспектів
            даного бойового мистецтва, а також популяризація здорового способу
            життя серед молоді та дорослих.
            <br />
            <br /> Бразильський джиу-джитсу - це високоінтенсивний вид спорту,
            який допомагає розвивати фізичну та ментальну витривалість,
            впевненість та самодисципліну. Якщо ви цікавитеся бразильським
            джиу-джитсу, то Yamasaki Academy може бути одним з варіантів для
            початку тренувань.
          </Text>
        </Stack>
      </Container>
      <Box bg={useColorModeValue("white", "gray.700")} p={4}>
        <Container maxW={"full"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} textAlign={"center"}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              Що про нас говорять -
              <br />
              <Text as={"span"} color={"#3f48cc"}>
                батьки, учні та гості.
              </Text>
            </Heading>
          </Stack>
          <SimpleGrid
            direction={{ base: "column", md: "column" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
            flexWrap={"wrap"}
            textAlign="center"
            justify="center"
          >
            {testimonialsData.map((testimonial, index) => (
              <Testimonial key={index}>
                <TestimonialContent>
                  <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                  <TestimonialText>{testimonial.text}</TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={testimonial.avatar.src}
                  name={testimonial.avatar.name}
                  title={testimonial.avatar.title}
                />
              </Testimonial>
            ))}
          </SimpleGrid>
        </Container>
      </Box>{" "}
      <SmallCentered />
    </>
  );
};

export default OurAcademy;
