import About from "../components/pages/About";
import Contacts from "../components/pages/Contacts";
import Instructors from "../components/pages/Instructors";
import Main from "../components/pages/Main";
import News from "../components/pages/News";
import NewsSlot from "../components/pages/NewsSlot";
import OurAcademy from "../components/pages/OurAcademy";
import OurBelts from "../components/pages/OurBelts";
import Programms from "../components/pages/Programms";
import Schedule from "../components/pages/Schedule";

export const PATHS = {
  MAIN: "/",
  ABOUT: "/about",
  CONTACTS: "/contacts",
  INSTRUCTORS: "/instructors",
  PROGRAMMS: "/programms",
  SHEDULE: "/shedule",
  OURACADEMY: "/ourAcademy",
  OURBELTS: "/ourBelts",
  NEWS: "/news",
  NEW_SLOT: "/news-slot",
};
export const routes = [
  { path: PATHS.MAIN, element: Main },
  { path: PATHS.ABOUT, element: About },
  { path: PATHS.CONTACTS, element: Contacts },
  { path: PATHS.INSTRUCTORS, element: Instructors },
  { path: PATHS.PROGRAMMS, element: Programms },
  { path: PATHS.SHEDULE, element: Schedule },
  { path: PATHS.OURACADEMY, element: OurAcademy },
  { path: PATHS.OURBELTS, element: OurBelts },
  { path: PATHS.NEWS, element: News },
  { path: PATHS.NEW_SLOT, element: NewsSlot },
];
