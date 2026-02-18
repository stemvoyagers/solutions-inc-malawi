import {
  Outlet,
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/others/Footer";
import Header from "./components/others/Header";
import ScrollButton from "./components/others/ScrollButton";
import Privacy from "./pages/Privacy";
import Hero from "./components/home/Hero";
import ScrollToTop from "./components/others/ScrollToTop";
import Vacancies from "./pages/Vacancies";

const Layout = () => {
  return (
    <div>
      {<Header />}
      <Outlet />
      {<Footer />}
    </div>
  );
};

const App = () => {
  return (
    <div className="font-bodyFont">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>

        <ScrollButton />
      </Router>
    </div>
  );
};

export default App;
