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
import Waterlogo from "../../assets/img/watericon.png";
const Schedule = () => {
  return (
    <>
      <Navbar />
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
      <Flex h="100vh" alignItems="center" justifyContent="center">
        {" "}
        <Accordion
          w="90%"
          allowToggle
          justifyContent="center"
          alignItems="center"
          // background="linear-gradient(to bottom, #0000ff88 0%, #ffff00ab 120%)"
        >
          <AccordionItem>
            <h2>
              <AccordionButton padding="5px " width="100%">
                <Box
                  color="black"
                  fontSize="20px"
                  fontWeight="700"
                  backgroundColor="white"
                  opacity="90%"
                  padding="5px"
                  flex="1"
                  justifyContent="center"
                  border="1px solid black"
                  borderRadius="15px"
                  _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
                >
                  Доросла група BJJ
                  <AccordionIcon />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="20px">
              <TableContainer left="5%">
                <Table
                  textAlign="center"
                  w="100%"
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
              <AccordionButton padding="5px " width="100%">
                <Box
                  color="black"
                  fontSize="20px"
                  fontWeight="700"
                  backgroundColor="white"
                  opacity="90%"
                  padding="5px"
                  flex="1"
                  justifyContent="center"
                  border="1px solid black"
                  borderRadius="15px"
                  _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
                >
                  Дитяча група BJJ (6-9 років)
                  <AccordionIcon />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="20px">
              <TableContainer left="5%">
                <Table
                  textAlign="center"
                  w="100%"
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
              <AccordionButton padding="5px " width="100%">
                <Box
                  color="black"
                  fontSize="20px"
                  fontWeight="700"
                  backgroundColor="white"
                  opacity="90%"
                  padding="5px"
                  flex="1"
                  justifyContent="center"
                  border="1px solid black"
                  borderRadius="15px"
                  _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
                >
                  Підліткова група BJJ (10-15 років)
                  <AccordionIcon />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="20px">
              <TableContainer left="5%">
                <Table
                  textAlign="center"
                  w="100%"
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
              <AccordionButton padding="5px " width="100%">
                <Box
                  color="black"
                  fontSize="20px"
                  fontWeight="700"
                  backgroundColor="white"
                  opacity="90%"
                  padding="5px"
                  flex="1"
                  justifyContent="center"
                  border="1px solid black"
                  borderRadius="15px"
                  _hover={{ backgroundColor: "rgba(47, 42, 214, 0.503)" }}
                >
                  ММА та Бойове самбо
                  <AccordionIcon />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="20px">
              <TableContainer left="5%">
                <Table
                  textAlign="center"
                  w="100%"
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
                      <Td border="1px solid black">Четвер</Td>
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
      </Flex>
    </>
  );
};
export default Schedule;
