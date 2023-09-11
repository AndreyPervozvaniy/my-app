import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";
import Logo from "../../assets/img/LOGO.png";

const Navbar = () => {
  const navBarItems = [
    { name: "Про нас", path: "/about" },
    { name: "Програма тренувань", path: "/programms" },
    { name: "Інструктори", path: "/instructors" },
    { name: "Розклад", path: "/shedule" },
    { name: "Контакти", path: "/contacts" },
  ];
  const router = useNavigate();

  return (
    <headers>
      <p className="logo" onClick={() => router("/")}>
        <Box
          transition="all 0.7s"
          cursor="pointer"
          _hover={{ transform: "scale(1.2)" }}
        >
          <Image w="250px" src={Logo} />
        </Box>
      </p>
      <nav>
        <ul>
          {navBarItems.map((route) => (
            <li key={route.name} onClick={() => router(route.path)}>
              <p>{route.name}</p>
            </li>
          ))}
        </ul>
      </nav>
    </headers>
  );
};

export default Navbar;
