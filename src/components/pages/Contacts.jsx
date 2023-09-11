import React from "react";
import Navbar from "../navigation/Navbar";
import {
  Box,
  Card,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
  CardBody,
  Image,
  CardFooter,
  Button,
  Stack,
  StackDivider,
  Badge,
  Container,
} from "@chakra-ui/react";
import { DragControls } from "framer-motion";
import Waterlogo from "../../assets/img/watericon.png";
import { hover } from "@testing-library/user-event/dist/hover";
import { getActiveElement } from "@testing-library/user-event/dist/utils";

const Contacts = () => {
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
      {/* <div className="bbody">
        <div className="container123">
          <div className="circle circle1">
            <div className="content">
              <h2> Номер телефону для зв'язку:</h2>
              <p> Микола Шерстюк : +380 73 203 76 64</p>
              <p>Косенко Валентин : +380 50 535 09 61</p>
              <p>Мирошников Владислав : +380 95 507 33 70</p>
            </div>
          </div>
          <div className="circle circle2">
            <div className="content">
              <h2> Location</h2>
              <p>Адреса: м. Дніпро, вулиця Тимчасова, 2А</p>
              <p>Адреса: м. Дніпро, вулиця Тимчасова, 2А</p>
              <p>Адреса: м. Дніпро, вулиця Тимчасова, 2А</p>

              <iframe
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1111.4537061081612!2d35.07365161994874!3d48.50453061074607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe393edb25bcb%3A0xe91e1f026da0b37e!2sYamasaki%20Academy%20Jiu%20Jitsu!5e0!3m2!1sru!2sua!4v1694165404688!5m2!1sru!2sua"
              ></iframe>
            </div>
          </div>
          <div className="circle circle3">
            <div className="content">
              <h2> Item</h2>
              <p>Gi</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="body">
        <div className="container">
          <div className="box">
            <div className="icon">
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="contentC">
              <h3> Number</h3>
              <p>911</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3> Number</h3>
              <p>911</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="content">
              <h3> Number</h3>
              <p>911</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="body">
        <div className="box">
          <div className="content">
            <p> NUmber</p>
            <p>911</p>
          </div>
          <div className="details">
            <div className="image">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              ></img>
            </div>
            <h3> phone</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
