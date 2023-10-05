import { Fade, Button } from "@chakra-ui/react";
import { useScrollEvent } from "../../hooks";
const Elevator = () => {
  const [isVisibleBottomButton] = useScrollEvent();
  return (
    <Fade in={isVisibleBottomButton}>
      {/* =============================================кнопка всплытия================================*/}
      <Button
        className="fa fa-arrow-up"
        aria-lavel="topButton"
        zIndex="12"
        position="fixed"
        right={{ base: "5px", xl: "10" }}
        bottom="55px"
        w={50}
        opacity="80%"
        h={50}
        borderRadius="full"
        colorScheme="gray"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      ></Button>
    </Fade>
  );
};
export default Elevator;
