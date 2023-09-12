import React from "react";
import Navbar from "../navigation/Navbar";
import { Image, Box } from "@chakra-ui/react";
import vlad from "../../assets/img/vlados.jpg";
import Mikola from "../../assets/img/Mikola.jpg";
import Coach from "../../assets/img/coach1.png";
import Icon from "../../assets/img/icon.png";
import Waterlogo from "../../assets/img/watericon.png";
import Smile from "../../assets/img/try1.jpg";
import PhotoKolya from "../../assets/img/Dyadya Kolya.jpg";
const Instructors = () => {
  return (
    <>
      <Navbar />{" "}
      <Box
        backgroundImage={Waterlogo}
        backgroundSize="contain"
        h="100vh"
        position="absolute"
        opacity="60%"
      />
      <div className="wrapper">
        <div className="card">
          <div className="front">
            <Image
              w="100%"
              h="100%"
              display="block"
              objectFit="cover"
              src={Coach}
            />
          </div>
          <div className="back">
            <div className="logo">
              <Image src={Icon} />
            </div>
            <div className="content">
              <h1>
                Косенко Валентин Михайлович
                <span>
                  Тренер дорослої групи. Коричневий пасок з Бразильського
                  джиу-джитсу. Суддя турнірів з Бразильського джиу-джитсу в
                  Україні.
                </span>
              </h1>
              <ul className="socials">
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-vk"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="front1">
            <Image w="100%" h="100%" src={Smile} />
          </div>
          <div className="back1">
            <div className="logo">
              <Image src={Icon} />
            </div>
            <div className="content1">
              <h1>
                Шерстюк Микола Васильович
                <span>
                  Пурпурний пасок. Тренер дитячої групи з Бразильського джиу
                  джитсу.
                </span>
              </h1>
              <ul className="socials1">
                <li>
                  <a href="https://www.youtube.com/@user-dm4bx3gv8l">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bjj_kids_dnipro/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/BrazilianJiuJitsuDnepr/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fa fa-vk"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="front2">
            <Image w="100%" h="100%" src={vlad} />
          </div>
          <div className="back2">
            {" "}
            <div className="logo">
              <Image src={Icon} />
            </div>
            <div className="content2">
              <h1>
                Мирошников Владислав
                <span>
                  Досвідчений тренер з ММА та "Бойового самбо". Практитує
                  бразильське джиу-джитсу.
                </span>
              </h1>
              <ul className="socials2">
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-vk"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructors;
