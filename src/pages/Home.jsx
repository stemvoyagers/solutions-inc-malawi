// import GallerySwipe from "../components/home/GallerySwipe"
import BFooterHome from "../components/home/BFooterHome"
import CTAHome from "../components/home/CTAHome"
// import VdHome from "../components/home/VdHome"
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
     <CTAHome />
     <Hero/>
      {/* <VdHome /> */}
      {/* <GallerySwipe/> */}
      <BFooterHome />
    </div>
  )
}

export default Home
