import {
  // createBrowserRouter,
  Outlet,
  // RouterProvider,
  // ScrollRestoration,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./components/others/Footer";
import Header from "./components/others/Header";
import ScrollButton from "./components/others/ScrollButton";
import Career from "./pages/Career";
import Privacy from "./pages/Privacy";
import Isms from "./pages/Isms";
import ContactPage from "./pages/ContactPage";
import AService from "./pages/AService";
import PolicyImages from "./components/others/PolicyImages";
import Hero from "./components/home/Hero";
import ScrollToTop from "./components/others/ScrollToTop";

const Layout = () => {
  return (
    <div>
      {<Header />}
      {/* <ScrollRestoration /> */}
      <Outlet />
      {<Footer />}
    </div>
  );
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about-us",
//         element: <About />,
//       },
//       {
//         path: "/our-services",
//         element: <Services />,
//       },
//       {
//         path: "/privacy-policy",
//         element: <Privacy />,
//       },
//       {
//         path: "/contact-us",
//         element: <ContactPage />,
//       },
//       {
//         path: "/isms-policy",
//         element: <Isms />,
//       },
//       {
//         path: "/service",
//         element: <AService />,
//       },
//       {
//         path: "/career-page",
//         element: <Career />,
//       },
//       {
//         path: "/hero",
//         element: <Hero />,
//       },
//     ],
//   },
// ]);

// const App = () => {

//   return (
//     <div className="font-bodyFont">
//       <RouterProvider router={router} />
//       <ScrollButton />
//       <PolicyImages />
//     </div>
//   );
// }

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
            <Route path="/our-services" element={<Services />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/isms-policy" element={<Isms />} />
            <Route path="/service" element={<AService />} />
            <Route path="/career-page" element={<Career />} />
            <Route path="/hero" element={<Hero />} />
          </Route>
        </Routes>

        <ScrollButton />
        <PolicyImages />
      </Router>
    </div>
  );
};

export default App;
