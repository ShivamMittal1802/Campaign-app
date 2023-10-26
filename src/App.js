import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ReadyToGo from "./pages/ready-to-go";
import CmapignSettings from "./pages/cmapign-settings";
import ChooseProduct from "./pages/choose-product";
import WhatYouWantToDo from "./pages/what-you-want-to-do";
import Dashboard from "./pages/dashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cmapign-settings":
        title = "";
        metaDescription = "";
        break;
      case "/choose-product":
        title = "";
        metaDescription = "";
        break;
      case "/what-you-want-to-do":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cmapign-settings" element={<CmapignSettings />} />
      <Route path="/choose-product" element={<ChooseProduct />} />
      <Route path="/what-you-want-to-do" element={<WhatYouWantToDo />} />
      <Route path="/ReadyToGo" element={<ReadyToGo />} />
    </Routes>
  );
}
export default App;
