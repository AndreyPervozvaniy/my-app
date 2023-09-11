import React from "react";
import Navbar from "../navigation/Navbar";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  ChakraProvider,
  SimpleGrid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  textDecoration,
} from "@chakra-ui/react";
import Icon from "../../assets/img/icon.png";
import Gi from "../../assets/img/Gi-removebg-preview (1).png";
import Rash from "../../assets/img/rash.png";
import Back from "../../assets/img/backg.jpg";
import { color } from "framer-motion";
import Waterlogo from "../../assets/img/watericon.png";

const Programms = () => {
  return (
    <>
      <Navbar />

      <Box
        backgroundImage={Waterlogo}
        backgroundSize="contain"
        h="100vh"
        position="absolute"
        opacity="60%"
      />
      <Box className="panelBox">
        {" "}
        <Box className="carcas" position="relative" p={12}>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing={12}>
            <GridItem>
              <Tabs className="Tabs" w="900px">
                <TabList>
                  <Tab
                    className="tabList"
                    color="black"
                    fontSize="20px"
                    background="transparent"
                  >
                    Що таке бразильське джиу-джитсу?
                  </Tab>
                  <Tab color="black" fontSize="20px" background="transparent">
                    Переваги тренувань BJJ!
                  </Tab>
                  <Tab color="black" fontSize="20px" background="transparent">
                    {" "}
                    Що вам буде потрібно для тренувань?
                  </Tab>
                  <Tab color="black" fontSize="20px" background="transparent">
                    Екіпірування
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel className="PanelContent">
                    <Box
                      fontWeight="700"
                      w="900px"
                      fontSize="18px"
                      backgroundColor="white"
                      opacity="80%"
                    >
                      Бразильське джиу-джитсу (BJJ) - це захоплююче бойове
                      мистецтво та спорт, який зародився в Бразилії і швидко
                      набув популярності по всьому світу. Головною
                      характеристикою BJJ є акцент на техніці боротьби на землі
                      та різноманітних захватах, що дозволяє здолати
                      супротивника, навіть якщо він фізично більший або
                      сильніший. Це робить джиу-джитсу ефективним засобом
                      самооборони та прекрасною фізичною активністю для всіх
                      вікових груп. Якщо ви шукаєте місце, де можна займатися
                      бразильським джиу-джитсу в місті Дніпро, раджу звернутися
                      до нашої академії, де вам запропонують найкращий варіант
                      занять з джиу-джитсу. Також, можливо, є спеціалізовані
                      клуби або школи, які спеціалізуються на цьому виді бойових
                      мистецтв.
                      {/* <Image
                          className="iconContentTabs"
                          src={Icon}
                          opacity="15%"
                        /> */}
                    </Box>
                  </TabPanel>
                  <TabPanel className="PanelContent">
                    <Box
                      fontSize="18px"
                      fontWeight="700"
                      w="900px"
                      backgroundColor="white"
                      opacity="80%"
                    >
                      {" "}
                      <ul>
                        <li>
                          Збільшення фізичної активності. Тренування BJJ вимагає
                          активного застосування всього тіла. Постійні рухи,
                          боротьба на підлозі та в стійці покращать вашу фізичну
                          форму, збільшать витривалість та допоможуть
                          контролювати вагу.
                        </li>

                        <li>
                          Розвиток самодисципліни. BJJ - це спорт, що вимагає
                          терпіння, старанності та наполегливості. Постійні
                          тренування допоможуть вам відкрити в собі нові
                          можливості та виробити в собі самодисципліну, яка
                          стане вам у пригоді не лише на татамі, але і в
                          повсякденному житті.
                        </li>
                        <li>
                          Покращення навичок самооборони. Джиу-джитсу надає
                          ефективних навичок самооборони, які можуть врятувати
                          ваше життя у критичний момент. Ви навчитеся уникати
                          конфліктних ситуацій та брати супротивника під
                          контроль, забезпечивши безпеку для себе та своїх
                          близьких.
                        </li>
                      </ul>
                    </Box>
                  </TabPanel>
                  <TabPanel className="PanelContent">
                    <Box
                      fontSize="18px"
                      fontWeight="700"
                      w="900px"
                      backgroundColor="white"
                      opacity="80%"
                    >
                      <ul>
                        <li>
                          Визначте свої мету та цілі. Перш за все, важливо
                          визначити вашу мету та цілі. Питання, яке ви повинні
                          задати собі: "Чому я хочу займатися BJJ?" Це може бути
                          для покращення фізичної форми, набуття навичок
                          самозахисту, участь у змаганнях або навіть для
                          духовного зростання. Коли ви зрозумієте свої мотиви,
                          ми запропонуємо вам програму тренувань, яка
                          відповідатиме вашим потребам.
                        </li>
                        <li>
                          Екіпіровка для тренувань. Для початку вам достатньо
                          прийти у форматі No Gi — штани, шорти та рашгард.
                          Прослідкуйте аби на вашому одязі не було об’ємних
                          застібок, блискавок, кишень та інших елементів, за які
                          можна зачепитись чи поранитись. Також необхідно буде
                          зняти усі прикраси. У кращому випадку ви ризикуєте їх
                          зламати. У гіршому — травмувати себе або
                          противника/партнера. Надалі вам знадобиться
                          спеціалізоване екіпірування!
                        </li>
                      </ul>
                    </Box>
                  </TabPanel>
                  <TabPanel className="PanelContent">
                    <Box
                      fontSize="18px"
                      fontWeight="700"
                      w="900px"
                      backgroundColor="white"
                      opacity="80%"
                    >
                      {" "}
                      <ul>
                        {" "}
                        <li>
                          Kimono / Gi (гі) — куртка, штани, пояс кольору вашого
                          рівня (початковий рівень – білий пояс). Також можна
                          надягнути рашгард під куртку. Для жінок рашгард
                          обов’язковий.
                        </li>
                        <li>
                          Sem Kimono / No Gi (без гі) — шорти, щільно обтягуючі
                          штани та рашгард (“rash guard” – футболка зі
                          спеціального матеріалу, що захищає від поту; може бути
                          як з довгим, так і з коротким рукавом)
                        </li>
                        <li>
                          Спробуйте пробний урок. Наша школа BJJ пропонує
                          безкоштовний пробний урок. Скористайтесь цією
                          можливістю, щоб перевірити атмосферу, познайомитися з
                          інструкторами та іншими студентами. Пробний урок
                          допоможе вам зробити осмислене рішення про початок
                          тренувань з джиу-джитсу.
                        </li>
                      </ul>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};
export default Programms;
