import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import Logo from "../../assets/img/LOGO.png";

const Navbar = () => {
  const navBarItems = [
    { name: "Про нас", isMenu: true },
    { name: "Програма тренувань", path: "/programms" },
    { name: "Інструктори", path: "/instructors" },
    { name: "Розклад", path: "/shedule" },
    { name: "Контакти", path: "/contacts" },
  ];

  const menuItem = [
    { name: "Наша академия", path: "/ourAcademy" },
    { name: "Наши пояса", path: "/ourBelts" },
  ];

  const router = useNavigate();

  return (
    <Flex
      justifyContent="space-between"
      pos="absolute"
      w="100%"
      top="0"
      left="0"
      background="white"
      alignItems="center"
      padding="0 10%"
      boxShadow="0 0px 2px #000"
      zIndex="11"
    >
      <Flex onClick={() => router("/")}>
        <Box
          transition="all 0.7s"
          cursor="pointer"
          _hover={{ transform: "scale(1.2)" }}
        >
          <Image w="250px" src={Logo} />
        </Box>
      </Flex>
      <Flex>
        <Flex>
          <Flex
            padding="20px"
            justifyContent="space-between"
            pos="relative"
            fontSize="20px"
          >
            {navBarItems.map((route) => {
              if (route.isMenu) {
                return (
                  <Menu>
                    <MenuButton
                      cursor="pointer"
                      _hover={{ textDecoration: "underline" }}
                      background="white"
                      // className="fa fa-arrow-down"
                    >
                      <Flex
                        cursor="pointer"
                        _hover={{ textDecoration: "underline" }}
                        key={route.name}
                      >
                        {route.name}
                      </Flex>
                    </MenuButton>
                    <MenuList>
                      {menuItem.map((item) => (
                        <MenuItem onClick={() => router(item.path)}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                );
              } else {
                return (
                  <Flex
                    padding="0 15px"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                    key={route.name}
                    onClick={() => router(route.path)}
                  >
                    <Flex>{route.name}</Flex>
                  </Flex>
                );
              }
            })}
          </Flex>
        </Flex>{" "}
      </Flex>
    </Flex>
  );
};

export default Navbar;
