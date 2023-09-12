import React from "react";
import Navbar from "../navigation/Navbar";
import {
  Flex,
  Card,
  CardHeader,
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { DragControls } from "framer-motion";
import Waterlogo from "../../assets/img/watericon.png";
import { hover } from "@testing-library/user-event/dist/hover";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
// import Qr from "../../assets/img/qr-code (1).png";
import QrPhoneNikolay from "../../assets/img/Дядь коля номер.png";
import QrPhoneValentin from "../../assets/img/номер валентина.png";
import QrPhoneVlad from "../../assets/img/номер влада.png";
const Contacts = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(0deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <Navbar />{" "}
      <Flex
        backgroundImage={Waterlogo}
        backgroundSize="contain"
        h="100vh"
        position="absolute"
        opacity="60%"
      />{" "}
      <div className="body">
        <div className="Flex">
          <div className="content">
            <Flex
              h="100vh"
              // justifyContent="center"
              alignItems="center"
              padding="10%"
            >
              <Button
                className="fa fa-phone"
                w="100px"
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              ></Button>

              <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                  <ModalHeader></ModalHeader>
                  <ModalBody>
                    <Flex
                      h="92vh"
                      justifyContent="center"
                      alignItems="center"
                      padding="40px"
                    >
                      <Text fontSize="22px">
                        <Text padding="5px">
                          Микола Шерстюк - Тренер дитячої групи BJJ : +380 73
                          203 76 64
                        </Text>
                        <Text padding="5px">
                          Мирошников Владислав - Досвідчений тренер з ММА та
                          Бойового самбо : +380 95 507 33 70
                        </Text>
                        <Text padding="5px">
                          {" "}
                          Косенко Валентин - Тренер дорослої групи BJJ : +380 50
                          535 09 61
                        </Text>
                        <Flex
                          justifyContent="space-between"
                          textAlign="center"
                          padding="20px"
                        >
                          <Flex
                            flexDir="column"
                            padding="20px"
                            alignItems="center"
                          >
                            <Image w="150px" src={QrPhoneNikolay}></Image>{" "}
                            <Text padding="10px">Микола Шерстюк</Text>
                          </Flex>
                          <Flex
                            flexDir="column"
                            padding="20px"
                            alignItems="center"
                          >
                            <Image w="150px" src={QrPhoneVlad}></Image>
                            <Text padding="10px"> Мирошников Владислав</Text>
                          </Flex>
                          <Flex
                            flexDir="column"
                            padding="20px"
                            alignItems="center"
                          >
                            <Image w="150px" src={QrPhoneValentin}></Image>
                            <Text padding="10px">Косенко Валентин</Text>
                          </Flex>
                        </Flex>
                      </Text>
                    </Flex>{" "}
                  </ModalBody>

                  <ModalFooter justifyContent="center" opacity="100%">
                    <Button
                      bg="blackAlpha.300"
                      className="fa fa-sign-out"
                      onClick={onClose}
                    ></Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </div>
          <div className="details">
            {/* <Image w="100px" src={QrPhone}></Image> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
