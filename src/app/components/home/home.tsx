"use client";
import "./home.scss";
import HomeSwiper from "./homeSwiper/homeSwiper";
import InnovationSection from "./innovationSection/InnovationSection";

const Anasayfa = () => {
  return (
    <div className="home-container">
      <HomeSwiper />
      <InnovationSection />
    </div>
  );
};

export default Anasayfa;
