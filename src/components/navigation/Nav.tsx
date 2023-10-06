import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Icon,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { RiFlashlightFill } from "react-icons/ri";
import React from "react";

const navLinks = [
  //   { name: "Про нас", isMenu: true },
  { name: "Програма тренувань", path: "/programms" },
  { name: "Інструктори", path: "/instructors" },
  { name: "Розклад", path: "/shedule" },
  { name: "Новини", path: "/news" },
  { name: "Контакти", path: "/contacts" },
];

const dropdownLinks = [
  { name: "Наша академия", path: "/ourAcademy" },
  { name: "Наша команда", path: "/ourBelts" },
];
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={4} bg={"white"}>
      <Flex h={16} alignItems="center" justifyContent="space-around" mx="auto">
        <Icon as={RiFlashlightFill} h={8} w={8} />

        <HStack spacing={3} alignItems="center" fontSize={"lg"}>
          {" "}
          <Menu autoSelect={false} isLazy>
            {({ isOpen, onClose }) => (
              <>
                {" "}
                <MenuButton
                  _hover={{ color: "black.400", textDecoration: "underline" }}
                >
                  <Flex alignItems="center">
                    <Text>Про нас </Text>
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
              <NavLink key={index} {...link} onClose={onClose} />
            ))}

            {/* Dropdown Menu */}
          </HStack>
        </HStack>

        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={{ base: "inherit", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Screen Links */}
      {isOpen ? (
        <Box pb={4} display={{ base: "inherit", md: "none" }}>
          <Stack as="nav" spacing={2}>
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} onClose={onClose} />
            ))}
            <Text fontWeight="semibold" color="gray.500">
              Про нас
            </Text>
            <Stack pl={2} spacing={1} mt={"0 !important"}>
              {dropdownLinks.map((link, index) => (
                <NavLink key={index} {...link} onClose={onClose} />
              ))}
            </Stack>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

// NavLink Component

const NavLink = ({ name, path, onClose }) => {
  return (
    <Link
      href={path}
      lineHeight="inherit"
      _hover={{
        textDecoration: "underline",
        color: useColorModeValue("black.500", "black.200"),
      }}
      onClick={() => onClose()}
    >
      {name}
    </Link>
  );
};
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
