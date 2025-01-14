import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/HeaderComponent/Header";
import MainSection from "./components/MainComponent/mainSection";
import Footer from "./components/Footer/Footer";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainSection />
    <Footer />
  </StrictMode>
 
);
