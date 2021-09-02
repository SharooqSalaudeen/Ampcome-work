import { Box } from "@material-ui/core";

// import Header from "../components/Header";
import HomeSection1 from "../components/HomeSection1";
// import HomeSection1old from "../components/HomeSection1old";
// import HomeSection2old from "../components/HomeSection2old";
// import HomeSection3old from "../components/HomeSection3old";
// import HomeSection4old from "../components/HomeSection4old";
// import Footerold from "../components/Footerold";
import Footer from "../components/Footer";

import "../assets/styles/App.css";

function Home() {
  return (
    <div className="container">
      {/* <Header /> */}
      <Box pt={2}>
        <HomeSection1 />
        {/* <HomeSection1old /> */}
        {/* <HomeSection2old /> */}
        {/* <HomeSection3old /> */}
        {/* <HomeSection4old /> */}
        {/* <Footerold /> */}
        <Footer />
      </Box>
    </div>
  );
}

export default Home;
