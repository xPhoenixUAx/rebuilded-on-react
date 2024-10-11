import s from "./What.module.css";
import icons from "../images/images/icons.svg";
const What = () => {
  return (
    <div>
      <section className={s.advantagesSection}>
        <div className={s.container}>
          <h2 className={s.visuallyHidden}>Our Advantages</h2>
          <ul className={s.advantagesBox}>
            <li className={s.advantagesPunkts}>
              <div className={s.iconBox}>
                <svg className={s.advIcon} width="64" height="64">
                  <use href="./images/icons.svg#icon-antenna-1"></use>
                </svg>
              </div>
              <h3 className={s.advantagesList}>Strategy</h3>
              <p className={s.paragraph}>
                Our goal is to identify the business problem to walk away with
                the perfect and creative solution.
              </p>
            </li>
            <li className={s.advantagesPunkts}>
              <div className={s.iconBox}>
                <svg className={s.advIcon} width="64" height="64">
                  <use href="./images/icons.svg#icon-clock-1"></use>
                </svg>
              </div>
              <h3 className={s.advantagesList}>Punctuality</h3>
              <p className={s.paragraph}>
                Bring the key message to the brand&apos;s audience for the best
                price within the shortest possible time.
              </p>
            </li>
            <li className={s.advantagesPunkts}>
              <div className={s.iconBox}>
                <svg className={s.advIcon} width="64" height="64">
                  <use href="./images/icons.svg#icon-diagram-1"></use>
                </svg>
              </div>
              <h3 className={s.advantagesList}>Diligence</h3>
              <p className={s.paragraph}>
                Research and confirm brands that present the strongest digital
                growth opportunities and minimize risk.
              </p>
            </li>
            <li className={s.advantagesPunkts}>
              <div className={s.iconBox}>
                <svg className={s.advIcon} width="64" height="64">
                  <use href="./images/icons.svg#icon-astronaut-1"></use>
                </svg>
              </div>
              <h3 className={s.advantagesList}>Technologies</h3>
              <p className={s.paragraph}>
                Design practice focused on digital experiences. We bring forth a
                deep passion for problem-solving.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default What;
