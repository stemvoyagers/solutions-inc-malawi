// import { useState, useEffect } from "react";

const IsmsBody = () => {
  // const [isVisible1, setIsVisible1] = useState(false);
  // const [isVisible2, setIsVisible2] = useState(false);
  // const [isVisible3, setIsVisible3] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const top1 = document.getElementById('div1').getBoundingClientRect().top;
  //     const top2 = document.getElementById('div2').getBoundingClientRect().top;
  //     const top3 = document.getElementById('div3').getBoundingClientRect().top;

  //     const windowHeight = window.innerHeight;

  //     // setIsVisible1(top1 < windowHeight);
  //     // setIsVisible2(top2 < windowHeight);
  //     // setIsVisible3(top3 < windowHeight);

  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div className="w-full bg-white pt-[4%] pb-[4%]">

      <p className="max-w-screen-xl mx-auto text-md md:text-lg mt-4 md:mt-0 mb-4 md:mb-0 text-justify px-4 md:px-8 lg:px-12 xl:px-16">
        Identiko Integrated Solutions Limited is a leading, a diversified business technology solutions provider committed to providing quality and innovative IT solutions such as;
        PII Processing, advanced infrastructure, workplace modernization, network modernization, cloud services, data analytics, cybersecurity, migration/integration, managed services,
        software development services, IT Security, Managed Services, Technology Consulting & Advisory to enable our clients to become high-performance business and governments.
        Identiko Integrated Solutions Limited is committed to the continual improvement of our Integrated Management System, ISO 27701:2019 PIMS and ISO 27001:2013 ISMS as well as satisfying
        applicable business, statutory, regulatory, and legal requirements.
        Identiko Integrated Solutions Limited, is also committed to achieving the following. <br /><br />

        <p id="div1" className={`text-md md:text-lg`} >1) To protect (Confidentiality)
          To protect information assets against unauthorized disclosure.<br /> <br /></p>
        <p id="div2" className={`text-md md:text-lg`} >2) To maintain (Integrity)
          To protect information assets from unauthorized or accidental modification ensuring the accuracy and completeness of the organization’s assets.<br /> <br /></p>
        <p id="div3" className={`text-md md:text-lg`} >3) To ensure (Availability)
          To ensure that Information assets are available as and when required adhering to the organization’s business objectives.
          To achieve these, we have set measurable objectives at all relevant functions and levels throughout the organization.

          This Policy is reviewed annually to ensure its continuous suitability and adequacy and has been communicated and understood by all employees as well as applicable interested parties
          within and outside the organization as required.</p>
      </p>
    </div>
  );
};

export default IsmsBody;
