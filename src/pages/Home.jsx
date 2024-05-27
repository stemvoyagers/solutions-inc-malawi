// import GallerySwipe from "../components/home/GallerySwipe"
import BFooterHome from "../components/home/BFooterHome"
import CTAHome from "../components/home/CTAHome"
// import VdHome from "../components/home/VdHome"
import Hero from "../components/home/Hero";
import { useState, useEffect } from "react"
import { AiOutlineLoading } from "react-icons/ai"
import { Spinner } from "react-bootstrap"

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
      <BFooterHome />
    </div>
  )
}

export default Home
