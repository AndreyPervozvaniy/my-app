import React from "react";
import Navbar from "../navigation/Nav";
import { Box, Container, SimpleGrid, Text,Stack } from "@chakra-ui/react";
import { statData } from "../../utils";
import CustomHeading from "../elem/HeadingTemplate";
import FlexContainer from "../elem/FlexContainer";
import Elevator from "../elem/Elevator";
import InstructorsNumbersTemplate from "../elem/InstructorsNumber";
import SmallCentered from "../elem/Footer";
import { buttonShedule } from "../../utils";
import ButtonBlock from "../elem/ButtonTemplate";
import { useContactsHooks } from "../../hooks";
const Schedule = () => { const { handleButtonClick } = useContactsHooks();
  return (
    <>
      <Navbar />
      <Elevator/>
      <FlexContainer padding={"10%"} >
        <Container maxW="7xl" p={{ base: 5, md: 10 }} textAlign={"center"} flexdir={'column'}>
          <CustomHeading text={"Розклад наших класів"} />
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
            spacing={5}
            mt={12}
            mb={4}
          >
            {statData.map((data) => (
              <Box
                key={data.id}
                p={5}
                boxShadow="md"
                rounded="lg"
                borderWidth={2}
              >
                <Text fontWeight="extrabold" fontSize="x-large">
                  {data.score}
                </Text>
                <Text>{data.label}</Text>
                <Text>{data.label2}</Text> <Text>{data.label3}</Text>
              </Box>
            ))}{" "}
          </SimpleGrid> 
          <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={{ base: "column", sm: "row" }}
                  justifyContent={{
                    base: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  }}
                >
                  {buttonShedule.map((button, index) => (
                    <ButtonBlock
                      key={index}
                      label={button.label}
                      onClick={() => {
                        if (button.id === "telegram") {
                      
                          window.open("https://t.me/YamasakiAcademyDnipro", "_blank");
                        } else {
                          handleButtonClick(button.id);
                        }
                      }}
                    
                      colorScheme={button.colorScheme || "gray"}
                      bgColor={button.bgColor || "gray.100"}
                      
                    />
                  ))}
                </Stack>
      
        </Container>
      </FlexContainer>   
       <InstructorsNumbersTemplate/>
      <SmallCentered/>
    </>
  );
};
export default Schedule;
