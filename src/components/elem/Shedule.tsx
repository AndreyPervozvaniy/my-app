import * as React from "react";
import { Container, Text, SimpleGrid, Box, Heading } from "@chakra-ui/react";

const statData = [
  {
    id: 1,
    label: "Дитяча група BJJ : 15:30 - 17:00",
    label2: "Підліткова група BJJ : 17:00 - 18:30",
    label3: "Доросла група BJJ: 18:45 - 20:45",
    score: "Понеділок",
  },
  {
    id: 2,
    label: "Підліткова група MMA : 17:00 - 18:30",
    score: "Вівторок",
  },
  {
    id: 3,
    label: "Дитяча група BJJ : 15:30 - 17:00",
    label2: "Підліткова група BJJ : 17:00 - 18:30",
    label3: "Доросла група BJJ: 18:45 - 20:45",
    score: "Середа",
  },
  {
    id: 4,
    label: "Підліткова група MMA : 17:00 - 18:30",
    score: "Четвер",
  },
  {
    id: 5,
    label: "Дитяча група BJJ : 15:30 - 17:00",
    label2: "Підліткова група BJJ : 17:00 - 18:30",
    label3: "Доросла група BJJ: 18:45 - 20:45",
    score: "П'ятниця",
  },
  {
    id: 6,
    label: "Доросла група BJJ: 09:00 - 11:00",
    score: "Субота",
  },
];

const BlogStats = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }} textAlign={"center"}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={5}
        mt={12}
        mb={4}
      >
        {statData.map((data) => (
          <Box key={data.id} p={5} boxShadow="md" rounded="lg" borderWidth={2}>
            <Text fontWeight="extrabold" fontSize="x-large">
              {data.score}
            </Text>
            <Text>{data.label}</Text>
            <Text>{data.label2}</Text> <Text>{data.label3}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default BlogStats;
