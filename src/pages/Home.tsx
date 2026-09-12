import About from "../Component/About";
import Contact from "../Component/Contact";
// import Delivery from "../Component/Delivery";
import Hero from "../Component/Hero";
// import JCBServices from "../Component/JCBServices";
import Products from "../Component/Products";
// import ServiceAreas from "../Component/ServiceAreas";
import WhyChooseUs from "../Component/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      {/* <JCBServices /> */}
      <WhyChooseUs />
      {/* <Delivery /> */}
      <About />
      {/* <ServiceAreas /> */}
      {/* <Contact /> */}
    </>
  );
};

export default Home;