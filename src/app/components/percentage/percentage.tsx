import { useTranslations } from "next-intl";
import "./percentage.scss";

const Percentage = () => {
  const t = useTranslations("Percentage");
  const data = [
    {
      title: "%100",
      description:
        "SLA süresi / Hizmet kalitemizin iş kalitesine ve çözüm oranlarına yansıması",
    },

    {
      title: "%100",
      description: "Projelerimizin zamanında teslim edilme oranı",
    },

    {
      title: "%100",
      description: "Müşterilerimizden edindiğimiz memnuniyet oranımız",
    },

    {
      title: "%2",
      description: "2023 Çalışanlarımıza ait Turn over oranı",
    },
  ];
  return (
    <div className="percentage-container">
      {data.map((item, index) => (
        <div className="percentage-head" key={index}>
          <div className="percentage-head__title"> {item.title} </div>
          <div className="percentage-head__description">
            {t(item.description)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Percentage;
