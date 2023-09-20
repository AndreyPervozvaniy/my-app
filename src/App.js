import React from "react";
import { Box, Button, Text, ButtonGroup, Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Contacts from "./components/pages/Contacts";
import About from "./components/pages/About";
import Instructors from "./components/pages/Instructors";
import Programms from "./components/pages/Programms";
import Schedule from "./components/pages/Schedule";
import OurBelts from "./components/pages/OurBelts";
import OurAcademy from "./components/pages/OurAcademy";
import News from "./components/pages/News";
import NewsSlot from "./components/pages/NewsSlot";
function App() {
  const navBarItems = [
    { name: "About" },
    { name: "Programms" },
    { name: "Instructors" },
    { name: "Shedule" },
    { name: "Contacts" },
    { name: "News" },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/programms" element={<Programms />} />
        <Route path="/shedule" element={<Schedule />} />
        <Route path="/ourAcademy" element={<OurAcademy />} />
        <Route path="/ourBelts" element={<OurBelts />} />
        <Route path="/news" element={<News />} />
        <Route path="/NewsSlot" element={<NewsSlot />} />
      </Routes>
    </Router>
  );
}

export default App;
