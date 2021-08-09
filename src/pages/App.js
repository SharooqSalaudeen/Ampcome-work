import Header from "../components/Header";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import Footer from "../components/Footer";
import "../styles/App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <Footer />
    </div>
  );
}

export default App;
