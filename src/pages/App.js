import Header from "../components/Header";
import HomeSection1 from "../components/HomeSection1";
import HomeSection2 from "../components/HomeSection2";
import "../styles/App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <HomeSection1 />
      <HomeSection2 />
    </div>
  );
}

export default App;
