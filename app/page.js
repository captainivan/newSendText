import Faq from "./components/FAQ";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SendBody from "./components/SendBody";
import WhatSendText from "./components/WhatSendText";

const Home = () => {
  return (
    <>
      <NavBar />
      <SendBody />
      <WhatSendText/>
      <Faq/>
      <Footer/>
    </>
  );
}
export default Home;