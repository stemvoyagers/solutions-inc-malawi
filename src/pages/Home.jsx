import CTAHome from "../components/home/CTAHome";
import Hero from "../components/home/Hero";
import Partners from "../components/about/Partners";

const Home = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <CTAHome />
      <Hero />
      <Partners />
    </div>
  );
};

export default Home;
