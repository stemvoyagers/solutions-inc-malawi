import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollButton from "./components/ScrollButton";
import Career from "./pages/Career";
import Privacy from "./pages/Privacy";
import Isms from "./pages/Isms";
import ContactPage from "./pages/ContactPage";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/contactUs",
        element: <ContactPage />,
      },
      {
        path: "/isms",
        element: <Isms />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
]);

const App = () => {

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
      <ScrollButton />
    </div>
  );
}

export default App