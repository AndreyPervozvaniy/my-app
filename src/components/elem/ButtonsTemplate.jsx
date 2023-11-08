import React from "react";
import { Stack,Button} from "@chakra-ui/react";
import { useContactsHooks } from "../../hooks";

function ButtonStack({ buttons, ...props }) { const { handleButtonClick } = useContactsHooks();
  return (
    <Stack
      spacing={{ base: 4, sm: 6 }}
      direction={{ base: "column", sm: "row" }}
      {...props}
    
      p={4}
    >
      {buttons.map((button, index) => (
        <Button   
        rounded="full"
        size="lg"
        fontWeight="normal"
        px={6}
       key={index}
  
    onClick={() => {
            if (button.id === "telegram") {
              window.open("https://t.me/YamasakiAcademyDnipro"  );
            } else {
              handleButtonClick(button.id); // Предполагается, что у вас есть функция handleButtonClick
            }
          }}
   colorScheme={button.colorScheme || "gray"}
          bgColor={button.bgColor || "gray.100"}
        > 
        {button.label}
      </Button>
      ))}
    </Stack>
  );
}

export default ButtonStack;
