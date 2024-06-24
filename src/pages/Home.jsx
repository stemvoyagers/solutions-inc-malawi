import CTAHome from "../components/home/CTAHome"
import Hero from "../components/home/Hero";
import { useState, useEffect } from "react"
import ContactSubscribe from "../components/contact/ContactSubscribe";
import Partners from "../components/about/Partners";
import AboutHome from "../components/home/AboutHome";
import GallerySwipe from "../components/home/GallerySwipe"
import { identiko_logo } from "../assets";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000)
  }, [])

  return isLoading ? (
    <div className="loading-state flex justify-center items-center min-h-screen" >
      <img src={identiko_logo} alt="identikoImg" className="w-14 animate-bounce" />
    </div>
  ) : (
    <div className="overflow-x-hidden overflow-y-hidden">
      <CTAHome />
      <Hero />
      {/* <VdHome /> */}
      <AboutHome />
      {/* <BFooterHome /> */}
      <Partners />
      <GallerySwipe />
      <ContactSubscribe />
    </div>
  )
}

export default Home
