"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import "./consultingProcess.scss";
import Image from "next/image";

const slidesData = [
  {
    img: "/consulting1.svg",
    description: [
      "Proje paydaşlarının belirlenmesi ve iletişim kanallarının oluşturulması.",
      "Proje hedeflerinin ve teslimatların belirlenmesi.",
      "Kapsam açıklamasının oluşturulması ve paydaşlarla onaylanması.",
    ],
  },
  {
    img: "/consulting2.svg",
    description: [
      "Projenin gereksinimlerinin ve zorluklarının detaylı incelenmesi.",
      "Pazar analizi ve rekabet analizi yapılması..",
      "Benzer projelerin incelenmesi ve öğrenme süreci.",
    ],
  },
  {
    img: "/consulting3.svg",
    description: [
      "Proje gereksinimlerinin ayrıntılı bir şekilde analiz edilmesi.",
      "Ekip üyeleri arasında işbölümü yapılması ve sorumlulukların belirlenmesi.",
      "Teknik çözümlerin tartışılması ve en uygun olanın seçilmesi..",
    ],
  },
  {
    img: "/consulting4.svg",
    description: [
      "Agile ilkeler doğrultusunda, minimum işlevsellik ile başlayarak tasarımın aşamalı olarak geliştirilmesi.",
      "İş akışı ve süreç haritalarının oluşturulması.",
      "Ekip içi işbirliği ve geri bildirim döngülerinin kurulması.",
    ],
  },
  {
    img: "/consulting5.svg",
    description: [
      "Kullanıcı arayüzü ve kullanıcı deneyimi tasarımlarının hazırlanması. Prototiplerin oluşturulması ve paydaşlarla paylaşılması.",
      "Kullanıcı geri bildirimlerine dayalı olarak tasarımların düzeltilmesi ve iyileştirilmesi.",
      "Ekran tasarımlarının, proje ilerledikçe ve gereksinimler değiştikçe esnek bir şekilde adapte edilmesi.",
    ],
  },
  {
    img: "/consulting6.svg",
    description: [
      "Yazılımın kullanıcı arayüzü ve arkayüzünün geliştirilmesi.",
      "Sürekli geri bildirim almak için prototipler oluşturulması ve kullanıcı testlerinin yapılması.",
      "İterasyonlar halinde geliştirme ve düzenli aralıklarla demo sunumu.",
    ],
  },
  {
    img: "/consulting7.svg",
    description: [
      "Sürekli entegrasyon ve sürekli dağıtım süreçlerinin oluşturulması.",
      "Test senaryolarının oluşturulması ve otomasyon testlerinin yapılması.",
      "Hata düzeltme süreçlerinin hızlı ve etkin bir şekilde yönetilmesi.",
    ],
  },
  {
    img: "/consulting8.svg",
    description: [
      "İterasyonlar arası retrospektif toplantılarla sürekli iyileştirme sağlanması.",
      "Proje ilerlemesinin görselleştirilmesi ve takibi için Agile panoların kullanılması.",
      "Proje sonlandırma süreci: Müşteri onayı, son kullanıcı eğitimi ve kaynakların kapatılması.",
    ],
  },
];

const slidesLabel = [
  "Proje kapsamının belirlenmesi",
  " Ön Araştırma",
  "Kavramsal ve Teknik Analiz",
  "Proje Planının Yapılması",
  "Ekran Tasarımlarının Oluşturulması",
  "Proje Önyüz ve Arkayüz Geliştirmeleri",
  "Proje Testlerinin Yapılması",
  "Proje Kontrolü ve Kapanışı",
];

const ConsultingProcess = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleItemClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="consultingProcess-container">
      <div className="consultingProcess-head">
        <div className="consultingProcess-head__title">
          Danışmanlık Sürecimiz
        </div>
        <div className="consultingProcess-head__description">
          İş süreçleriniz için özel olarak tasarladığımız ‘ 8 adımdan ’ oluşan
          danışmanlık sürecimizde, işletmenizin ihtiyaçlarına yönelik çözümler
          sunuyoruz.
        </div>
      </div>
      <div className="consultingProcess-navigation">
        <div className="sidebar-head">
          {slidesLabel.map((label, index) => (
            <div
              key={index}
              className={`sidebar-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {label}
            </div>
          ))}
        </div>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          // speed={900}
          mousewheel={true}
          scrollbar={{ draggable: true }}
          modules={[Pagination, Mousewheel, Scrollbar]}
          className="mySwiper"
          onSlideChange={handleSlideChange}
          initialSlide={activeIndex}
          ref={swiperRef}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-container">
                <Image src={slide.img} width={822} height={426} alt="" />
                <div className="slide-info-container">
                  <div className="slide-info">
                    <div>{slide.description[0]}</div>
                    <span className="number">01</span>
                  </div>
                  <div className="slide-info">
                    <div>{slide.description[1]}</div>
                    <span className="number">02</span>
                  </div>
                  <div className="slide-info">
                    <div>{slide.description[2]}</div>
                    <span className="number">03</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ConsultingProcess;