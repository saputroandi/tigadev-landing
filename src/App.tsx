import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";

function App() {
  const components = [
    { Comp: Dashboard, path: "/" },
    { Comp: AboutUs, path: "/about-us" },
    { Comp: ContactUs, path: "/contact-us" },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {components.map((data, idx) => {
            return <Route key={idx} path={data.path} element={<data.Comp />} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
