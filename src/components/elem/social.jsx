import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Image } from "@chakra-ui/react";

const socialArr = [
  {
    href: "https://www.facebook.com/BrazilianJiuJitsuDnepr/",
    class: "fa fa-chrome",
  },
];
const router = useNavigate();
{
  socialArr.map((social) => (
    <li key={social.class} onClick={() => router(social.href)}>
      <p>{social.class}</p>
    </li>
  ));
}
