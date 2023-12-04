import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/img/Logo.png";
import { BiChevronDown } from "react-icons/bi";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

export default function Navbar() {
  const navLinks = [
    { name: "Програма тренувань", path: "/programms" },
    { name: "Інструктори", path: "/instructors" },
    { name: "Розклад", path: "/schedule" },
    { name: "Новини", path: "/news" },
    { name: "Контакти", path: "/contacts" },
  ];

  const dropdownLinks = [
    { name: "Наша академія", path: "/ourAcademy" },
    // { name: "Наша команда", path: "/ourBelts" },
  ];
  const { onClose } = useDisclosure();
  const [showShadow, setShowShadow] = useState(false);

  const [issOpen, setIsOpen] = useState(false);

  const onnClose = () => {
    setIsOpen(false);
  };

  const onnOpen = () => {
    setIsOpen(true);
  };
  const router = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      if (window.scrollY > scrollThreshold) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      justifyContent="space-between"
      pos="fixed"
      w="100%"
      top="0"
      left="0"
      background="white"
      alignItems="center"
      padding="0 5%"
      fontWeight={"bold"}
      zIndex="11"
      boxShadow={showShadow ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none"}
    >
      <Flex h={16} alignItems="center"  justifyContent="space-between" mx="auto"   px={{base:6, md:2, lg:0}} >
        <Image
          w={{base:'150px',md:'170px',lg:"200px"}}
          src={Logo}
          onClick={(e) => {
            e.preventDefault();  
            router("/");
          }}
          transition="all 0.7s"
          cursor="pointer"
          // _hover={{ transform: "scale(1.2)" }}
        />

        <HStack
          spacing={3}
          alignItems="center"
          fontSize={"lg"}
          display={{ base: "none", lg: "flex" }}
        >
          {" "}
          <Menu autoSelect={false} isLazy>
            {({ isOpen, onClose }) => (
              <>
                <MenuButton
                  _hover={{ color: "black.400", textDecoration: "underline" }}
                >
                  <Flex alignItems="center">
                    <Text fontWeight={"bold"}>Про нас </Text>
                    <Icon
                      as={BiChevronDown}
                      h={5}
                      w={5}
                      ml={1}
                      transition="all .25s ease-in-out"
                      transform={isOpen ? "rotate(180deg)" : ""}
                    />
                  </Flex>
                </MenuButton>
                <MenuList zIndex={5}>
                  {dropdownLinks.map((link, index) => (
                    <MenuLink
                      key={index}
                      name={link.name}
                      path={link.path}
                      onClose={onClose}
                    />
                  ))}
                </MenuList>{" "}
              </>
            )}
          </Menu>
          <HStack
            as="nav"
            spacing={6}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {navLinks.map((link, index) => (
              <Box
                key={link.name}
                cursor={"pointer"}
                onClick={() => router(link.path)}
                onClose={onClose}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                {link.name}
              </Box>
              // <NavLink key={index} {...link} onClose={onClose} />
            ))}

            {/* Dropdown Menu */}
          </HStack>
        </HStack>

        <IconButton
          size="sm"
          icon={<GiHamburgerMenu />}
          aria-label="Open Menu"
          display={{ base: "inherit", lg: "none" }}
          onClick={issOpen ? onnClose : onnOpen}
        />
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={issOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Меню</DrawerHeader>
            <DrawerBody
              bgColor={"white"}
              h={"100%"}
              textAlign={"center"}
              padding={"7%"}
              fontSize={"lg"}
              overflowY="auto"
              fontWeight={"bold"}
            >
              <Stack as="nav" spacing={2}>
                {navLinks.map((link, index) => (
                  <Box
                    p={2}
                    key={link.name}
                    onClick={() => router(link.path)}
                    onClose={onClose}
                  >
                    {link.name}
                  </Box>
                  // <NavLink key={index} {...link} onClose={onClose} />
                ))}
                {/* <Text fontWeight="bold" color={"grey"}>
                  Про нас :{" "}
                </Text> */}

                <Stack pl={2} spacing={1} mt={"0 !important"}>
                  {dropdownLinks.map((link, index) => (
                    <Box
                      key={link.name}
                      onClick={() => router(link.path)}
                      onClose={onClose}
                      p={2}
                    >
                      {link.name}
                    </Box>
                    // <NavLink key={index} {...link}  />
                  ))}
                </Stack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

// NavLink Component

// const NavLink = ({ name, path, onClose }) => {
//   return (
//     <Link
//       href={path}
//       lineHeight="inherit"
//       _hover={{
//         textDecoration: "underline",
//         color: useColorModeValue("black.500", "black.200"),
//       }}
//       onClick={() => onClose()}
//     >
//       {name}
//     </Link>
//   );
// };
// Dropdown MenuLink Component
const MenuLink = ({ name, path, onClose }) => {
  return (
    <Link href={path} onClick={() => onClose()}>
      <MenuItem
        _hover={{
          textDecoration: "underline",
          color: useColorModeValue("black.500", "black.200"),
        }}
      >
        <Text>{name}</Text>
      </MenuItem>
    </Link>
  );
};
