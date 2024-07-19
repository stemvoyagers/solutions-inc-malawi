import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
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

const Layout = () => {

  return (
    <div>
      {<Header />}
      <ScrollRestoration />
      <Outlet />
      {<Footer />} 
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/our-services",
        element: <Services />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/isms-policy",
        element: <Isms />,
      },
      {
        path: "/service",
        element: <AService />,
      },
      {
        path: "/career-page",
        element: <Career />,
      },
      {
        path: "/hero",
        element: <Hero />,
      },
    ],
  },
]);

const App = () => {

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
      <ScrollButton />
      <PolicyImages />
    </div>
  );
}

export default App