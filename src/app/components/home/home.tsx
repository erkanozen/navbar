"use client";
import ConsultingProcess from "./consultingProcess/consultingProcess";
import "./home.scss";
import HomeSwiper from "./homeSwiper/homeSwiper";
import InnovationSection from "./innovationSection/InnovationSection";

const Anasayfa = () => {
  return (
    <div className="home-container">
      <HomeSwiper />
      <InnovationSection />
      <ConsultingProcess />
    </div>
  );
};

export default Anasayfa;
