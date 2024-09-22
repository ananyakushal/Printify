import Connect from "./components/Connect/Connect";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Home/Homepage";
import Navbar from "./components/Navbar/Navbar";
import ProductDesc from "./components/ProductDesc/ProductDesc";
import Profit from "./components/Profit/Profit";
import TalkToUs from "./components/TalkToUs/TalkToUs";
import Testimonial from "./components/Testimonial/Testimonial";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";


function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <ProductDesc/>
    <WhatWeDo/>
    <Connect/>
    <TalkToUs/>
    <Testimonial/>
    <Profit/>
    <Footer/>
    </>
  );
}

export default App;
