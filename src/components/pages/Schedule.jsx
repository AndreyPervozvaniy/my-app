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
  Tfoot,
  Flex,
} from "@chakra-ui/react";
import Logo from "../../assets/img/icon.png";
import Waterlogo from "../../assets/img/watericon.png";
import { color } from "framer-motion";
const Schedule = () => {
  return (
    <>
      <Navbar />
      <Box
        backgroundImage={Waterlogo}
        backgroundSize="contain"
        h="100vh"
        position="absolute"
        opacity="60%"
      />
      <Accordion
        h="100vh"
        allowToggle
        paddingTop="200px"
        // background="linear-gradient(to bottom, #0000ff88 0%, #ffff00ab 120%)"
      >
        {/* <Image src={Logo} h="190px" paddingLeft="41%" opacity="0.4" /> */}
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " paddingLeft="100px" width="90%">
              <Box
                color="black"
                fontSize="20px"
                fontWeight="700"
                backgroundColor="white"
                opacity="80%"
                padding="5px"
                as="span"
                flex="1"
                textAlign="center"
                border="1px solid black"
                borderRadius="15px"
                _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                Доросла група BJJ <AccordionIcon />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer left="5%">
              <Table
                textAlign="center"
                w="90%"
                border="1px solid black"
                backgroundColor="white"
              >
                <Thead border="1px solid black">
                  <Tr border="1px solid black">
                    <Th border="1px solid black">День тижня </Th>
                    <Th border="1px solid black" isNumeric>
                      Початок заняття{" "}
                    </Th>
                    <Th border="1px solid black" isNumeric>
                      Кінець заняття
                    </Th>
                    <Th border="1px solid black">Формат</Th>
                    <Th border="1px solid black">Тренер</Th>
                  </Tr>
                </Thead>
                <Tbody border="1px solid black">
                  <Tr>
                    <Td border="1px solid black">Понеділок</Td>
                    <Td border="1px solid black" isNumeric>
                      18:45{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      20:45{" "}
                    </Td>
                    <Td border="1px solid black">Gi / NO GI</Td>
                    <Td border="1px solid black">Косенко Валентин</Td>
                  </Tr>
                  <Tr>
                    <Td border="1px solid black">Середа</Td>
                    <Td border="1px solid black" isNumeric>
                      18:45{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      20:45{" "}
                    </Td>
                    <Td border="1px solid black">Gi / NO GI</Td>
                    <Td border="1px solid black">Косенко Валентин</Td>
                  </Tr>
                  <Tr>
                    <Td border="1px solid black">П'ятниця </Td>
                    <Td border="1px solid black" isNumeric>
                      18:45{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      20:45{" "}
                    </Td>
                    <Td border="1px solid black">Gi / NO GI</Td>
                    <Td border="1px solid black">Косенко Валентин</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Td border="1px solid black">Субота</Td>
                  <Td border="1px solid black" isNumeric>
                    09:00{" "}
                  </Td>
                  <Td border="1px solid black" isNumeric>
                    11:00{" "}
                  </Td>
                  <Td border="1px solid black">Gi / NO GI</Td>
                  <Td border="1px solid black">Косенко Валентин</Td>
                </Tfoot>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " paddingLeft="100px" width="90%">
              <Box
                color="black"
                fontSize="20px"
                background="transparent"
                fontWeight="700"
                backgroundColor="white"
                opacity="80%"
                padding="5px"
                as="span"
                flex="1"
                textAlign="center"
                border="1px solid black"
                borderRadius="15px"
                _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                Дитяча група BJJ (6-9 років)
                <AccordionIcon />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer left="5%">
              <Table
                backgroundColor="white"
                size="sm"
                textAlign="center"
                w="90%"
                border="1px solid black"
              >
                <Thead border="1px solid black">
                  <Tr border="1px solid black">
                    <Th border="1px solid black">День тижня </Th>
                    <Th border="1px solid black" isNumeric>
                      Початок заняття{" "}
                    </Th>
                    <Th border="1px solid black" isNumeric>
                      Кінець заняття
                    </Th>
                    <Th border="1px solid black">Формат</Th>
                    <Th border="1px solid black">Тренер</Th>
                  </Tr>
                </Thead>
                <Tbody border="1px solid black">
                  <Tr>
                    <Td border="1px solid black">Понеділок</Td>
                    <Td border="1px solid black" isNumeric>
                      15:30{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      17:00{" "}
                    </Td>
                    <Td border="1px solid black">Gi / NO GI</Td>
                    <Td border="1px solid black">Микола Шерстюк</Td>
                  </Tr>
                  <Tr>
                    <Td border="1px solid black">Середа</Td>
                    <Td border="1px solid black" isNumeric>
                      15:30{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      17:00{" "}
                    </Td>
                    <Td border="1px solid black">Gi / NO GI</Td>
                    <Td border="1px solid black">Микола Шерстюк</Td>
                  </Tr>
                  <Tr>
                    <Td border="1px solid black">П'ятниця </Td>
                    <Td border="1px solid black" isNumeric>
                      15:30{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      17:00{" "}
                    </Td>
                    <Td border="1px solid black">Gi / NO GI</Td>
                    <Td border="1px solid black">Микола Шерстюк</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " paddingLeft="100px" width="90%">
              <Box
                padding="5px"
                color="black"
                fontSize="20px"
                fontWeight="700"
                backgroundColor="white"
                opacity="80%"
                as="span"
                flex="1"
                textAlign="center"
                border="1px solid black"
                borderRadius="15px"
                _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                Дитяча група BJJ (10-15 років)
                <AccordionIcon />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer left="5%">
              <Table
                size="sm"
                textAlign="center"
                backgroundColor="white"
                w="90%"
                border="1px solid black"
              >
                <Thead border="1px solid black">
                  <Tr border="1px solid black">
                    <Th border="1px solid black">День тижня </Th>
                    <Th border="1px solid black" isNumeric>
                      Початок заняття{" "}
                    </Th>
                    <Th border="1px solid black" isNumeric>
                      Кінець заняття
                    </Th>
                    <Th border="1px solid black">Формат</Th>
                    <Th border="1px solid black">Тренер</Th>
                  </Tr>
                </Thead>
                <Tbody border="1px solid black">
                  <Tr>
                    <Td border="1px solid black">Понеділок</Td>
                    <Td border="1px solid black" isNumeric>
                      17:00{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      18:30{" "}
                    </Td>
                    <Td border="1px solid black">Gi / NO GI</Td>
                    <Td border="1px solid black">Микола Шерстюк</Td>
                  </Tr>
                  <Tr>
                    <Td border="1px solid black">Середа</Td>
                    <Td border="1px solid black" isNumeric>
                      17:00{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      18:30{" "}
                    </Td>
                    <Td border="1px solid black">Gi / NO GI</Td>
                    <Td border="1px solid black">Микола Шерстюк</Td>
                  </Tr>
                  <Tr>
                    <Td border="1px solid black">П'ятниця </Td>
                    <Td border="1px solid black" isNumeric>
                      17:00{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      18:30{" "}
                    </Td>
                    <Td border="1px solid black">Gi / NO GI</Td>
                    <Td border="1px solid black">Микола Шерстюк</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton padding="5px " paddingLeft="100px" width="90%">
              <Box
                padding="5px"
                as="span"
                flex="1"
                textAlign="center"
                color="black"
                fontSize="20px"
                fontWeight="700"
                backgroundColor="white"
                opacity="80%"
                border="1px solid black"
                borderRadius="15px"
                _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
              >
                ММА та Бойове самбо
                <AccordionIcon />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer left="5%">
              <Table
                textAlign="center"
                w="90%"
                border="1px solid black"
                backgroundColor="white"
              >
                <Thead border="1px solid black">
                  <Tr border="1px solid black">
                    <Th border="1px solid black">День тижня </Th>
                    <Th border="1px solid black" isNumeric>
                      Початок заняття{" "}
                    </Th>
                    <Th border="1px solid black" isNumeric>
                      Кінець заняття
                    </Th>
                    <Th border="1px solid black">Формат</Th>
                    <Th border="1px solid black">Тренер</Th>
                  </Tr>
                </Thead>
                <Tbody border="1px solid black">
                  <Tr>
                    <Td border="1px solid black">Вівторок</Td>
                    <Td border="1px solid black" isNumeric>
                      17:00{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      18:30{" "}
                    </Td>
                    <Td border="1px solid black">NO GI</Td>
                    <Td border="1px solid black">Мирошников Владислав</Td>
                  </Tr>
                  <Tr>
                    <Td border="1px solid black">Вівторок</Td>
                    <Td border="1px solid black" isNumeric>
                      17:00{" "}
                    </Td>
                    <Td border="1px solid black" isNumeric>
                      18:30{" "}
                    </Td>
                    <Td border="1px solid black">NO GI</Td>
                    <Td border="1px solid black">Мирошников Владислав</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default Schedule;
