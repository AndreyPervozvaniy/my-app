  import { lazy } from "react";
  const Main = lazy(() => import("../components/pages/Main"));
  const About = lazy(() => import("../components/pages/About"));
  const Instructors = lazy(() => import("../components/pages/Instructors"));
  const News = lazy(() => import("../components/pages/News"));
  const NewsSlot = lazy(() => import("../components/pages/NewsSlot"));
  const OurAcademy = lazy(() => import("../components/pages/OurAcademy"));
  const Programms = lazy(() => import("../components/pages/Programms"));
  const Schedule = lazy(() => import("../components/pages/Schedule"));
  const Contacts = lazy(() => import("../components/pages/Contacts"));
  const OurBelts = lazy(() => import("../components/pages/OurBelts"));

  export const PATHS = {
    MAIN: "/",
    ABOUT: "/about",
    CONTACTS: "/contacts",
    INSTRUCTORS: "/instructors",
    PROGRAMMS: "/programms",
    SHEDULE: "/schedule",
    OURACADEMY: "/ourAcademy",
    OURBELTS: "/ourBelts",
    NEWS: "/news",
    NEWS_SLOT: "/news-slot/:id",
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
    { path: PATHS.NEWS_SLOT, element: NewsSlot },
  ];
