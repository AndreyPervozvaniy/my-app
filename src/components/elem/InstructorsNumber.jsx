 
import {
  Text,
  Button,
  
  Stack,
  Box,
   
  useColorModeValue,
  HStack,
  VStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";import { FaPhone } from "react-icons/fa";
import SmallHeading from "./SmallHeadingTemplate";
import { InstructorsPhone } from "../../utils";
import { useCallPhoneNumber } from "../../hooks";
function PriceWrapper({ children }) {
    return (
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: "center", lg: "flex-start" }}
        borderColor={useColorModeValue("gray.200", "gray.500")}
        borderRadius={"xl"}
      >
        {children}
      </Box>
    );
  }
const InstructorsNumbersTemplate = () => {
    const callPhone = useCallPhoneNumber();
  return (
    <Box py={2} id="InstructorContact">
    <VStack spacing={2} textAlign="center" p={2}>
      <SmallHeading text={" Контакти наших інструкторів"} />
    </VStack>
    <Stack
      direction={{ base: "column", md: "column", lg: "row" }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
      py={10}
      p={4}
      flexWrap={"wrap"}
    >
      {InstructorsPhone.map((instructor, index) => (
        <PriceWrapper key={index}>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="xl">
              {instructor.category}
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="xl " fontWeight="600">
                {instructor.name}
              </Text>
            </HStack>
          </Box>
          <VStack bg={"gray.50"} py={4} borderBottomRadius={"xl"}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaPhone} color="green.500" mr={2} />
                {instructor.phone}
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button
                w="full"
                colorScheme="blue"
                variant="outline"
                onClick={() => callPhone(instructor.phone)}
              >
                Подзвонити
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      ))}
    </Stack>
  </Box>
  );
};
export default InstructorsNumbersTemplate;
