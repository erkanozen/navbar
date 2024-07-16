"use client";
import React from "react";
import SwiperComponent from "../components/swiper/swiperComponent";
import "./homePage.scss";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Percentage from "../components/percentage/percentage";

const HomePage = () => {
  return (
    <div className="home-container">
      <SwiperComponent
        className="mySwipper"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="slide">
          <div className="descrition-container descrition-container1">
            <div className="slide__title">
              <div> Uçtan Uca Danışmanlık</div>
              <div> Hizmeti Veriyoruz</div>
            </div>
            <div className="slide__description">
              <div>
                {" "}
                Pointo olarak, iş süreçlerinizi verimli kılmak için{" "}
                <span style={{ fontWeight: "bold" }}>“ yazılım ”</span>
                ve{" "}
                <span style={{ fontWeight: "bold" }}>
                  “ robotik süreç otomasyonu ”
                </span>
              </div>
              <div>
                {" "}
                alanlarında çözümler sunuyoruz. ERP ve SAP çözümleriyle
                işletmenizin ihtiyaçlarına özel{" "}
              </div>
              <div>
                olarak tasarlanmış çözümler sunarak iş süreçlerinizi verimli
                kılıyoruz
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="descrition-container descrition-container2">
            <div className="slide__title">
              <div>Türkiyenin en hızlı büyüyen</div>
              <div>50 öncü şirketten </div>
              <div>biriyiz!</div>
            </div>
            <div className="slide__description">
              <div style={{ fontWeight: "bold" }}> Deloitte</div>
              <div>
                Deloitte’in{" "}
                <span style={{ fontWeight: "bold" }}>
                  “ En Hızlı Büyüyen 50 Teknoloji Şirketi ”
                </span>
                sıralamasında yer alarak Teknoloji Fast{" "}
              </div>
              <div>50™ ödülünü kazandık.</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="descrition-container descrition-container3">
            <div className="slide__title">
              <div>Veritabanı Danışmanlık</div>
              <div> Hizmetimizde</div>
              <div> “ORACLE” Partneriyiz!</div>
            </div>
            <div className="slide__description">
              <div>
                Veritabanı hizmetinde bu alanda dünyanın en prestijli
                şirketlerinden olan{" "}
                <span style={{ fontWeight: "bold" }}>“ ORACLE ”</span> ile 
              </div>
              <div>
                {" "}
                partneriz. En güncel teknolojileri kullanarak yüksek performans
                ve yüksek kaliteli sistem{" "}
              </div>
              <div>
                yönetimi sağlanması için, danışmanlık ve bakım hizmetleri dahil
                işletmenize en uygun{" "}
              </div>
              <div>çözümleri sağlıyoruz.</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="descrition-container">
            <div className="slide__title">
              <div> “Great Place To Work”</div>
              <div> Listesinde Yer Almanın</div>
              <div> Gururunu Yaşıyoruz!</div>
            </div>
            <div className="slide__description">
              <div>
                {" "}
                Great Place To Work®{" "}
                <span style={{ fontWeight: "bold" }}>
                  “ Türkiye'nin En İyi İşverenleri™ ”
                </span>{" "}
                2023 Listesi'nde yer almanın{" "}
              </div>
              <div>
                gururunu yaşıyoruz! Bu başarı sadece bizim için bir taahhüt.
                Daha iyi bir dünya inşa etmek,
              </div>
              <div>
                {" "}
                herkes için harika bir iş yeri yaratmak için yolumuza devam
                ediyoruz.
              </div>
            </div>
          </div>
        </SwiperSlide>
      </SwiperComponent>
      <div className="hizmetlerimiz">
        <a>Hizmetlerimiz</a>
      </div>
      <Percentage />
    </div>
  );
};

export default HomePage;
