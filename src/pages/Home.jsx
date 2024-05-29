import BFooterHome from "../components/home/BFooterHome"
import CTAHome from "../components/home/CTAHome"
// import VdHome from "../components/home/VdHome"
import Hero from "../components/home/Hero";
import { useState, useEffect } from "react"
import { AiOutlineLoading } from "react-icons/ai"
import { Spinner } from "react-bootstrap"
import ContactSubscribe from "../components/contact/ContactSubscribe";
import Partners from "../components/about/Partners";
import AboutHome from "../components/home/AboutHome";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])

  return isLoading ? (
    <div className="loading-state flex justify-center items-center min-h-screen" >
      <Spinner animation="border" role="status">
        <AiOutlineLoading className="animate-spin" />
      </Spinner>
    </div>
  ) : (
    <div className="overflow-x-hidden overflow-y-hidden">
      <CTAHome />
      <Hero />
      {/* <VdHome /> */}
      {/* <GallerySwipe/> */}
      <AboutHome/>
     
      <BFooterHome />
      <Partners/>
      <ContactSubscribe/>
    </div>
  )
}

export default Home
