import { Fade, Button } from "@chakra-ui/react";
import { useScrollEvent } from "../../hooks";
const Elevator = () => {
  const [isVisibleBottomButton] = useScrollEvent();
  return (
    <Fade in={isVisibleBottomButton}>
      <Button
        className="fa fa-arrow-up"
        zIndex="12"
        position="fixed"
        right={{ base: "5px", xl: "10" }}
        bottom="55px"
        w={50}
        opacity="80%"
        h={50}
        borderRadius="full"
        color={"white"}
        bgColor={"#3f48cc"}
        _hover={{
          backgroundColor: "#2a2f7d", // Новый цвет фона при наведении 
          opacity: "50%"
        }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      ></Button>
    </Fade>
  );
};
export default Elevator;
