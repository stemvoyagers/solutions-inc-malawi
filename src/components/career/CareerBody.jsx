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
  const [formData, setFormData] = useState({name: "", coverletter: "", phone: "", cvLogo: "", email: "", services: "", });
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
          toast.error('Submission failed, please try again!', error.text);
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
      id="section-1" className="relative w-full pb-20 pt-4 px-4 md:px-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${circular})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95"></div>
      <ToastContainer />

      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-12 z-50">
        <div className="w-full flex flex-col justify items-center pl-4 md:pl-0 pr-4 md:pr-0 gap-8 md:gap-0 transform animate-slide-up">
          <div className="md:mt-4 flex flex-col items-center gap-0 md:gap-5 text-center">
            <div className="w-[100%] md:p-4 text-2xl font-semibold">
              WHAT WE DO
            </div>
            <div className="w-[100%] md:w-[70%] md:p-4 text-sm md:text-xl text-center">
            At Identiko, we provide secure, cutting-edge solutions for government and private identification
            management needs. Our end-to-end systems cover enrolment to secure document production, utilizing
            technologies like biometrics, cryptography, and data security across server, desktop, web, and
            mobile platforms.
            </div>
          </div>
          <div className="md:mt-4 flex flex-col items-center gap-0 md:gap-5 text-center">
            <div className="w-[100%] md:p-4 text-2xl font-semibold">
                WHY CHOOSE US
            </div>

            <div className="w-[100%] md:w-[70%] md:p-4 text-sm md:text-xl text-justify text-center">
            Identiko is a leading ICT player with deep expertise in identity management systems. We partner with
            top companies like Cisco, Lenovo, Neuro Technology, and Idemia to deliver world-class solutions, helping clients
            excel in today`s and tomorrow`s knowledge-driven society.
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto flex justify-center items-center">
          {/* <form onSubmit={handleFormSubmit}>
            <div className="mb-4 justify-between bg-[#003997] p-8 rounded-lg">
              <h2 className="text-xl md:text-3xl font-bold mb-2 text-center text-white"> Join Us </h2>

              <div className="mt-4 mb-2">
                <select
                  type="text" name="services"
                  onChange={(e) => handleInputChange("service", e.target.value)}
                  className="w-full bg-[#F7F8FA] border uppercase border-[#7F9395] rounded-md focus:outline-none focus:border-[#1F6FE2] text-xs p-[3%]" >
                  <option value="Select a Service" className="font-bold">VACANCIES</option>
                  <option value="Enrollment Options">Enrollment Options</option>
                  <option value="Identity Management Solution">Identity Based Solution</option>
                  <option value="Software Application services"> Software Application services</option>
                  <option value="Prisons/ Correctional Facility Management">Prisons/ Correctional Facility Management</option>
                  <option value="Smart City/Campus">Smart City/Campus</option>
                </select>
              </div>

              <input
                className="mb-2 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name" type="text" placeholder="Name" value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)} required
              />

              <PhoneInput
                defaultCountry="NG"
                className="mb-2 shadow bg-white appearance-none cursor-pointer  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone" placeholder=" 0800-0000-000" value={formData.phoneNumber}
                onChange={(value) => handleInputChange("phone", value)} required
              />

              <input
                className=" mb-2 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email" type="email" placeholder="Email" value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)} required
              />

              <textArea
                className=" mb-2 shadow appearance-none border h-24 cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message" type="text" placeholder="Coverletter (optional)" value={formData.coverletter}
                onChange={(e) => handleInputChange("message", e.target.value)}
              />

              <input
                className="shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                name="file" type="file"
                onChange={async (e) => handleInputChange("cvLogo", await base64_arraybuffer(e.target.files?.[0]))}
                placeholder="Upload CV/Resume"
              />

              <div className="mb-4">
                <input
                  type="checkbox" name="terms" required onChange={(e) => handleInputChange("terms", e.target.checked)}
                />
                <label className="text-sm text-white mt-1.5 -translate-y-0.5 translate-x-1.5 cursor-pointer">I agree to the <Link to="/privacy">Privacy Policy & Terms and Conditions</Link></label>
              </div>

              <button
                className="w-full flex items-center justify-center mt-4 bg-white text-[#014C98] hover:text-black font-semibold py-2 px-4 mb-2 rounded-full focus:outline-none border border-black focus:shadow-outline cursor-pointer">
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form> */}
          <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg relative">
      {/* <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeForm}>
        &times;
      </button> */}
      <h2 className="text-xl md:text-3xl font-bold mb-6 text-center text-[#003997]">Join Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div className="col-span-2">
  <div className="relative bg-[#F7F8FA]">
    <select
      type="text"
      name="services"
      onChange={(e) => handleInputChange("service", e.target.value)}
      className="w-full border border-[#7F9395] rounded-md focus:outline-none focus:border-[#1F6FE2] text-sm p-3 shadow appearance-none"
    >
      <option value="Select a Service" className="font-bold">VACANCIES</option>
      <option value="Enrollment Options">Enrollment Options</option>
      <option value="Identity Management Solution">Identity Based Solution</option>
      <option value="Software Application services">Software Application services</option>
      <option value="Prisons/ Correctional Facility Management">Prisons/ Correctional Facility Management</option>
      <option value="Smart City/Campus">Smart City/Campus</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-400 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z" />
      </svg>
    </div>
  </div>
</div>


        <div className="col-span-2">
          <label htmlFor="name" className="mb-2">Name*</label>
          <input
            className="mb-2 shadow appearance-none border cursor-pointer rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
          />
        </div>

        <div className="col-span-2 md:col-span-1">
        <label htmlFor="name" className="mb-2">E-mail*</label>
          <input
            className="mb-2 shadow appearance-none border cursor-pointer rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>

        <div className="col-span-2 md:col-span-1">
        <label htmlFor="name" className="mb-2">Phone*</label>
          <PhoneInput
            defaultCountry="NG"
            className="mb-2 shadow bg-white appearance-none cursor-pointer rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="phone"
            placeholder="0800-0000-000"
            value={formData.phoneNumber}
            onChange={(value) => handleInputChange("phone", value)}
            required
          />
        </div>

        <div className="col-span-2">
          <textarea
            className="mb-2 shadow appearance-none border h-24 cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="message"
            placeholder="Coverletter (optional)"
            value={formData.coverletter}
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="cv" className="mb-2">Upload CV*</label>
        <input
                className="shadow appearance-none border cursor-pointer rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline"
                name="file" type="file"
                onChange={async (e) => handleInputChange("cvLogo", await base64_arraybuffer(e.target.files?.[0]))}
                placeholder="Upload CV/Resume"
              />
        </div>
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          required
          onChange={(e) => handleInputChange("terms", e.target.checked)}
          aria-label="Agree to terms"
          className="mr-2"
        />
        <label htmlFor="terms" className="text-gray-700 text-sm cursor-pointer">
          I agree to the <Link className="underline">Privacy Policy & Terms and Conditions</Link>
        </label>
      </div>

      <button
        className="w-full bg-[#1F6FE2] text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:bg-[#014C98] transition duration-200"
        type="submit"
        aria-label="Submit form"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
        </div>
      </div>
      <style>{`@keyframes slide-up{ from{ transform: translateY(100%); opacity: 0 } to{ transform: translateY(0%); opacity: 1 }} .animate-slide-up {animation: slide-up 2s ease-out;`} </style>
      </div>
  );
};

export default CareerBody;
