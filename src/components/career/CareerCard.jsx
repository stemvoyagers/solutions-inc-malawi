import React from 'react';
import sub01 from "../../assets/sub01.jpg";
import sub02 from "../../assets/sub02.jpg";
import sub03 from "../../assets/sub03.jpg";
import sub04 from "../../assets/sub04.jpg";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card
        image={sub01}
        title="Teamwork & Collaboration"
        description="Our collaborative culture emphasizes teamwork. We work together to achieve common goals, leveraging each other's strengths."
      />
      <Card
        image={sub02}
        title="Inclusivity Matters"
        description="At Identiko, we embrace different perspectives and backgrounds to build a more inclusive and innovative workplace."
      />
      <Card
        image={sub03}
        title="Synergy"
        description="Synergy drives our success. At Identiko, togetherness creates a powerful force that propels us forward, achieving more than we could alone."
      />
      <Card
        image={sub04}
        title="Leadership & Development"
        description="At Identiko, seasoned leaders share their wisdom, offering guidance and insights that help you excel and grow in your career."
      />
    </div>
  );
};

export default Cards;
