import Clients from "./component/ui/Clients";
import Confidence from "./component/ui/Confidence";
import Footer from "./component/ui/Footer";
import Hero from "./component/ui/Hero";
import Navbar from "./component/ui/NavBar";
import Pricing from "./component/ui/Pricing";
import Skills from "./component/ui/Skills";
import Works from "./component/ui/Works";

function App() {
  const components = [
    Navbar,
    Hero,
    Skills,
    Clients,
    Pricing,
    Works,
    Confidence,
    Footer,
  ];
  return (
    <>
      {components.map((Component, idx) => {
        return <Component key={idx} />;
      })}
    </>
  );
}

export default App;
