import React from "react";
import Navbar from "../navigation/Nav";
import { Box, Container, SimpleGrid, Text  } from "@chakra-ui/react";
import { statData } from "../../utils";
import FlexContainer from "../elem/FlexContainer";
import Elevator from "../elem/Elevator";
import InstructorsNumbersTemplate from "../elem/InstructorsNumber";
import SmallCentered from "../elem/Footer";
import { buttonShedule } from "../../utils";
import SmallHeading from "../elem/SmallHeadingTemplate";
import ButtonStack from "../elem/ButtonsTemplate";
const Schedule = () => {  
  return (
    <>
      <Navbar />
      <Elevator/>
      <FlexContainer   >
        <Container maxW="7xl" p={{ base: 5, md: 10 }} textAlign={"center"} flexdir={'column'}>
          <SmallHeading text={"Розклад наших класів"} pt={{base:'15%', sm:'10%', md:'10%',lg:'5%'} }/>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
            spacing={5}
            mt={12}
            mb={4}
            p={4}
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
          <ButtonStack buttons={buttonShedule} label={buttonShedule}   justifyContent={{
        base: "center",
        sm: "center",
        md: "center",
        lg: "center",
      }}  />
     <InstructorsNumbersTemplate/>
        </Container>  
      </FlexContainer>   
      <SmallCentered/>
    </>
  );
};
export default Schedule;
