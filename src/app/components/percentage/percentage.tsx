import "./percentage.scss";

const Percentage = () => {
  return (
    <div className="percentage-container">
      <div className="percentage-head">
        <div className="percentage-head__title">%100</div>
        <div className="percentage-head__description">
          SLA süresi / Hizmet kalitemizin iş kalitesine ve çözüm oranlarına
          yansıması
        </div>
      </div>
      <div className="percentage-head">
        <div className="percentage-head__title">%100</div>
        <div className="percentage-head__description">
          Projelerimizin zamanında teslim edilme oranı
        </div>
      </div>
      <div className="percentage-head">
        <div className="percentage-head__title">%100</div>
        <div className="percentage-head__description">
          Müşterilerimizden edindiğimiz memnuniyet oranımız
        </div>
      </div>
      <div className="percentage-head">
        <div className="percentage-head__title">%2</div>
        <div className="percentage-head__description">
          2023 Çalışanlarımıza ait Turn over oranı
        </div>
      </div>
    </div>
  );
};

export default Percentage;
