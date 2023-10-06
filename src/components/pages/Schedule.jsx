import React from "react";
import Navbar from "../navigation/Navbar";
import {
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  TableContainer,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  Text,
  Tfoot,
  Flex,
} from "@chakra-ui/react";
import Waterlogo from "../../assets/img/watericon.png";
import schedule from "../../assets/img/schedule.png";
import rasp from "../../assets/img/zxc.png";
import BlogStats from "../elem/Shedule.tsx";
import FooterTemplate from "../elem/FooterTemplate";

const Schedule = () => {
  return (
    <>
      <Navbar />
      <Flex alignItems="center" justifyContent="center" padding={"10%"}>
        <BlogStats />{" "}
      </Flex>{" "}
    </>
  );
};
export default Schedule;
