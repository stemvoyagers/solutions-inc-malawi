import { useState, useRef } from "react";
import { circular } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const CareerBody = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "", coverletter: "",  phone: "",
    cvLogo: "", email: "",  services: "",
  });

  const form = useRef();


  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formDataObject = {
      service: formData.service,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
      cvLogo: formData.cvLogo,
    };

    emailjs
    .sendForm('service_k4eu1go', 'template_irvji6c', form.current, {            
      publicKey: 'wHjGOUGZOCsxtBGQh', 
    }, formDataObject)
    .then(
      () => {
        toast.success('Career Form Submission Successful!');
        setLoading(false); 
      },
      (error) => {
        toast.error('Submission failed, please try again!', error.text );
        setLoading(false); 
      },
    );

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (formData.email.trim() !== "" && !emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setLoading(false);
  };

  const base64_arraybuffer = async (data) => {
    const base64url = await new Promise((r) => {
      const reader = new FileReader();
      reader.onload = () => r(reader.result);
      reader.readAsDataURL(new Blob([data]));
    });
    return `data:${data.type};base64,${base64url.split(",", 2)[1]}`;
  };

  

  return (
    <div
      id="section-1" className="relative w-full pb-20 pt-20 px-4 md:px-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${circular})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95"></div>
      <ToastContainer />
      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 z-50">
     
        <div className="w-full pl-4 md:pl-0 pr-4 md:pr-0">
          <h2 className="text-xl md:text-3xl font-bold mb-2">
          Join Our Team!
          </h2>
<p className="w-[95%] text-balance">
          Are you a talented and creative individual seeking new opportunities to
grow and thrive? Whether you are a seasoned professional or just starting
out, we are on the lookout for exceptional talent to join our dynamic team.
Tell us about yourself and your unique skills, and let us explore how you
can contribute to our exciting journey</p>
          <div>
            <div className="mt-4 flex flex-col md:flex-row gap-5">
              <div className="border w-[100%] md:w-[40%]  p-4 hover:bg-[#9801011c] text-sm py-2 shadow">
                <div className="w-full py-2 font-semibold mb-2 ">
                 RECENT VACANCY
                </div>
                <div className="w-full grid gap-3">
                  <p>BackEnd Services</p>
                  <p>FrontEnd Services</p>
                  <p>Testing</p>
                </div>
              </div>

              <div className="border w-[100%] md:w-[40%] p-4 hover:bg-[#63980111] text-sm py-2 shadow">
                <div className="w-full py-2 font-semibold mb-2 ">
                  APPLICATIONS
                </div>
                <div className="w-full grid gap-3">
                  <p>BackEnd Services</p>
                  <p>FrontEnd Services</p>
                  <p>Testing</p>
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-col md:flex-row gap-5">
              <div className="border w-[100%] md:w-[40%]  p-4 hover:bg-[#01981011] text-sm py-2 shadow mt-10 md:mt-0">
                <div className="w-full py-2 font-semibold mb-2 ">
                  INFRASTRUCTURE 
                </div>
                <div className="w-full grid gap-3">
                  <p>Networking </p>
                  <p> Hardware </p>
                  <p> Server Services</p>
                </div>
              </div>

              <div className="border w-[100%] md:w-[40%]  p-4 hover:bg-[#98011811] text-sm py-2 shadow">
                <div className="w-full grid gap-3">
                  <p className="font-semibold"> OVERALL SERVICES </p>
                  <p> IT </p>
                  <p> Internship </p>
                  <p> NYSC and Siwes </p>
                </div>
              </div>
            </div>           
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={handleFormSubmit}>
           
            <div className="mb-4 justify-between bg-[#003997] p-8 rounded-lg">
              <h2 className="text-xl md:text-3xl font-bold mb-2 text-center text-white">
                Join Us
              </h2>

              <div className="mt-4 mb-2">
                <select
                  type="text"
                  name="services"
                  onChange={(e) =>
                    handleInputChange("service", e.target.value)
                  }
                  className="w-full bg-[#F7F8FA] border uppercase border-[#7F9395] rounded-md focus:outline-none focus:border-[#1F6FE2] text-xs p-[3%]"
                >
                  <option value="Select a Service" className="font-bold">OUR SERVICES</option>
                  <option value="Enrollment Options">Enrollment Options</option>
                  <option value="Identity Management Solution">Identity Based Solution</option>
                  <option value="Software Application services"> Software Application services</option>
                  <option value="Demographic Data Harmonized">Demographic Data Harmonized</option>
                  <option value="ABI’s (Civil & Criminal)">ABI’s (Civil & Criminal)</option>
                  <option value="Foundational Civil Registration">Foundational Civil Registration</option>
                  <option value="Card Production & Personalization">Card Production & Personalization</option>
                  <option value="Identity Verification">Identity Verification</option>
                  <option value="Mobile verification">Mobile verification</option>
                  <option value="Electronic Voting">Electronic Voting</option>
                  <option value="Traffic Management Systems">Traffic Management Systems</option>
                  <option value="Electronic Surveilance">Electronic Surveilance</option>
                  <option value="IOT x electronic sensor">IOT x electronic sensor</option>
                  <option value="Monitoring & Management">Monitoring & Management</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Software Integration">Software Integration</option>
                  <option value="Software Application Services"> Software Application Services</option>
                  <option value="State, National ID & Civil Registration">State, National ID & Civil Registration</option>
                  <option value="E-government Services Platform">E-government Services Platform</option>
                  <option value="Health Programs">Health Programs</option>
                  <option value="Time & Attendance">Time & Attendance</option>
                  <option value="Security & Access Control">Security & Access Control</option>
                  <option value="E-passport">E-passport</option>
                  <option value="Drivers License">Drivers License</option>
                  <option value="Border Control">Border Control</option>
                  <option value="Criminal Database">Criminal Database</option>
                  <option value="Prisons/ Correctional Facility Management">Prisons/ Correctional Facility Management</option>
                  <option value="Smart City/Campus">Smart City/Campus</option>
                </select>
              </div>

              <input
                className="mb-2 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />

              <PhoneInput
                defaultCountry="NG"
                className="mb-2 shadow bg-white appearance-none cursor-pointer  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone"
                placeholder=" 8012345678"
                value={formData.phoneNumber}
                onChange={(value) => handleInputChange("phone", value)}
                required
              />

              <input
                className=" mb-2 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />

              <textArea
                className=" mb-2 shadow appearance-none border h-24 cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                type="text"
                placeholder="Coverletter (optional)"
                value={formData.coverletter}
                onChange={(e) => handleInputChange("message", e.target.value)}
              />

              <input
                className="shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                name="file"
                type="file"
                onChange={async (e) =>
                  handleInputChange(
                    "cvLogo",
                    await base64_arraybuffer(e.target.files?.[0])
                  )
                }
                placeholder="Upload CV/Resume"
              />

              <div className="mb-4">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  onChange={(e) => handleInputChange("terms", e.target.checked)}
                />
                <label className="text-sm text-white mt-2 cursor-pointer">I agree to the <Link to="/privacy">Privacy Policy & Terms and Conditions</Link></label>
              </div>

              <button
                className="w-full flex items-center justify-center mt-4 bg-white text-[#014C98] hover:text-black font-semibold py-2 px-4 mb-2 rounded-full focus:outline-none border border-black focus:shadow-outline cursor-pointer"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerBody;