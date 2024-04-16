import GallerySwipe from "../components/home/GallerySwipe"
import BFooterHome from "../components/home/BFooterHome"
import CTAHome from "../components/home/CTAHome"
// import VdHome from "../components/home/VdHome"

const Home = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
     <CTAHome />
      {/* <VdHome /> */}
      <GallerySwipe/>
      <BFooterHome />
    </div>
  )
}

export default Home
