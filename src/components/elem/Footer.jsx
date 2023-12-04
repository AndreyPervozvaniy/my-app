import {
  Box,
  chakra,
  Container,
  Stack,
  Image,
  Link,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import Logo from "../../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";
import { socialButtonsData } from "../../utils";
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  const router = useNavigate();
  const handleRouteClick = (path) => {
    router(path);
  };
  const routes = [
    { label: "Програма тренувань", path: "/programms" },
    { label: "Інструктори", path: "/instructors" },
    { label: "Розклад", path: "/schedule" },
    { label: "Новини", path: "/news" },
    { label: "Контакти", path: "/contacts" },
  ];

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      boxShadow="0 -2px 4px rgba(0, 0, 0, 0.2)"
    >
      <Container
        as={Stack}
        maxW={"full"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image
          w="200px"
          src={Logo}
          onClick={() => router("/")}
          transition="all 0.7s"
          cursor="pointer"
          _hover={{ transform: "scale(1.2)" }}
        />
        <Stack
          direction={"row"}
          spacing={6}
          justify={"center"}
          align={"center"}
          flexWrap="wrap"
        >
          {routes.map((route, index) => (
            <Link
              cursor={"pointer"}
              key={index}
              onClick={() => handleRouteClick(route.path)}
            >
              {route.label}
            </Link>
          ))}
        </Stack>
      </Container>

      <Box>
        <Container
          as={Stack}
          maxW={"full"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-around" }}
          align={{ base: "center", md: "center" }}
          p={4}
        >
          <Text textAlign={{ base: "center" }}>
            © 2023 Yamasaki Academy. All rights reserved. Made with 🧡 by
            Andrew, Bulka, Serg, Yamasaki team.
          </Text>
          <Stack direction={"row"} spacing={6}>
            {socialButtonsData.map((button, index) => (
              <SocialButton key={index} label={button.label}>
                <Link href={button.href} isExternal>
                  {button.icon}
                </Link>
              </SocialButton>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
