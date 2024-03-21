// import { useState,useEffect } from "react"
// import { home, home2} from "../assets"

// const GallerySwipe = () => {
//     const [images, setImages] = useState[(home ,home2)]
//     const [index, setIndex] = useState(null)

//     useEffect(() => {
//         const timerId = setInterval(() => {
//           setIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 3000); 
    
//         return () => clearInterval(timerId); 
//       }, [images.length]); 



//   return (
//     <>
//     <Carousel activeIndex={index}>
//       {images.map((imageSrc, i) => (
//         <Carousel.Item key={i}>
//           <img className="d-block w-100" src={imageSrc} alt="Image" />
//         </Carousel.Item>
//       ))}
//     </Carousel>
      
//     </>
//   )
// }

// export default GallerySwipe
