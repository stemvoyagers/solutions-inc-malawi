import React from 'react';
import fingerprint_scanner from "../assets/fingerprint_scanner.png"
import laptop from "../assets/laptop.png"
import face_scanning from "../assets/face_scanning.png"
import card_scanner from "../assets/card_scanner.png"

const Card = ({ title, description, bgColor, borderColor }) => {
  return (
    <div className="relative max-w-sm w-full mx-auto md:mb-7">
      <div className={`absolute inset-0 ${bgColor} transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6`} />
      <div className="relative z-10 bg-white p-6 sm:p-8 shadow-lg h-full flex flex-col">
        <h3 className="text-2xl sm:text-3xl lg:text-[2.9rem] font-bold flex items-center justify-center mb-4">
          <span className={`w-8 h-1 sm:w-12 sm:h-1 block mr-3 ${borderColor}`} />
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base lg:text-xl tracking-widest">{description}</p>
      </div>
    </div>
  );
};

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-2 relative z-10 p-2 bg-yellow-500">
      {/* {images.map((image, index) => (
        <div key={index} className="w-full">
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </div>
      ))} */}
      <img src={fingerprint_scanner} alt="" />
      <img src={laptop} alt="" />
      <img src={face_scanning} alt="" />
      <img src={card_scanner} alt="" />
    </div>
  );
};

// const images = [
//   { src: {fingerprint_scanner}, alt: 'Description of image 1' },
//   { src: {laptop}, alt: 'Description of image 2' },
//   { src: {face_scanning}, alt: 'Description of image 3' },
//   { src: {card_scanner}, alt: 'Description of image 4' }
// ];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8">
      {/* <Card
        title="Who We Are"
        description="At Identiko, we are at the forefront of IT solutions, specializing in innovative access management and advanced technology integration. Our dedicated team brings extensive experience in Access Management Systems, Biometrics, ICT Consultancy, and System Integration. We offer comprehensive IT solutions designed to meet the diverse needs of both private and public sectors, ensuring secure and efficient systems."
        bgColor="bg-yellow-500"
        borderColor="bg-yellow-600"
      /> */}
      <div className="relative max-w-sm w-full mx-auto md:mb-7">
      <div className='absolute inset-0 bg-yellow-500 transform -translate-x-4 translate-y-4 sm:-translate-x-6 sm:translate-y-6' />
      <ImageGrid/>
      {/* <div className="relative z-10 bg-white p-6 sm:p-8 shadow-lg h-full flex flex-col text-justify">
        <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold flex items-center mb-4">
          <span className='w-8 h-1 sm:w-12 sm:h-1 block mr-3 bg-yellow-600' />
          Who are we
        </h3>
        <p className="text-gray-600 text-sm sm:text-base lg:text-[1rem]">At Identiko, we are at the forefront of IT solutions, specializing in innovative access management and advanced technology integration. Our dedicated team brings extensive experience in Access Management Systems, Biometrics, ICT Consultancy, and System Integration. We offer comprehensive IT solutions designed to meet the diverse needs of both private and public sectors, ensuring secure and efficient systems.</p>
      </div> */}
    </div>

      <Card
        title="Our Vision"
        description="To be a leading, competent, & dependable provider of comprehensive Information Communication & Technology solutions & services, driving innovation & economic growth, while creating a sustainable business model that delivers value & pride."
        bgColor="bg-blue-500"
        borderColor="bg-blue-500"
      />
      <Card
        title="Our Mission"
        description="To create a service-based company which drives innovation, technology and economic development for our customers while building a growing and sustainable business model that provides value and a sense of pride to everyone."
        bgColor="bg-blue-900"
        borderColor="bg-blue-900"
      />
    </div>
  );
};

export default Cards;
