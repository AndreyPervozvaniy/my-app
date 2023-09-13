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
        <div className="card" id="o">
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
            </div>
          </div>
        </div>
        <div className="card" id="t">
          <div className="front">
            <Image w="100%" h="100%" src={Smile} />
          </div>
          <div className="back">
            <div className="logo">
              <Image src={Icon} />
            </div>
            <div className="content">
              <h1>
                Шерстюк Микола Васильович
                <span>
                  Пурпурний пасок. Тренер дитячої групи з Бразильського джиу
                  джитсу.
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="card" id="f">
          <div className="front">
            <Image w="100%" h="100%" src={vlad} />
          </div>
          <div className="back">
            {" "}
            <div className="logo">
              <Image src={Icon} />
            </div>
            <div className="content">
              <h1>
                Мирошников Владислав
                <span>
                  Досвідчений тренер з ММА та "Бойового самбо". Практитує
                  бразильське джиу-джитсу.
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructors;
