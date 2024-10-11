import s from "./Hero.module.css";
const Hero = () => {
  return (
    <div>
      <section className={s.heroSection}>
        <div className={s.container}>
          <h1 className={s.heroSectionTitle}>
            Effective Solutions for Your Business
          </h1>
          <button type="button" className={s.buttonOrder}>
            Order Service
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
