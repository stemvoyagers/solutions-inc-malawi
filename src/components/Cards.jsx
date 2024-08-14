import React from 'react';

const Card = ({ title, description, bgColor, borderColor }) => {
  return (
    <div className="relative max-w-sm mx-auto">
      <div className={`absolute inset-0 ${bgColor} transform -translate-x-6 translate-y-6`} />
      <div className="relative z-10 bg-white p-8 shadow-lg h-96 text-justify">
        <h3 className="text-4xl font-bold flex items-center mb-4">
          <span className={`w-12 h-1 block mr-3 ${borderColor}`} />
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
      <Card
        title="Who We Are"
        description="Identiko leads in Identity management innovation, with a dedicated team experienced in Identity Management Systems, Biometrics, ICT Consultancy, and System Integration. We provide secure identification solutions for private and public sectors, partnering with top technology firms to deliver reliable services. Our expertise spans over two decades, serving industries like banking, security, FMCGs, construction, and telecommunications."
        bgColor="bg-yellow-500"
        borderColor="bg-yellow-600"
      />
      <Card
        title="Our Vision"
        description="To be a Leading, Competent and Dependable Information Communication and Technology Solutions and Services Provider."
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
