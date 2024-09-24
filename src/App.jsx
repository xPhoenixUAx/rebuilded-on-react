import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Team from "./components/Team/Team";
import What from "./components/What/What";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <What />
      <Team />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
