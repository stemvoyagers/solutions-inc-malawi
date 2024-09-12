import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { circular } from "../../assets";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import { MdAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";

const ContactBody = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on input change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.name) newErrors.name = "Full name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message cannot be empty.";
    if (!formData.terms) newErrors.message = "You must agree to the terms";
    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    const formDataObject = {
      service: formData.service,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.message,
    };

    emailjs.sendForm('service_k4eu1go', 'template_irvji6c', form.current, {
      publicKey: 'wHjGOUGZOCsxtBGQh',
    }, formDataObject)
    .then(
      () => {
        setLoading(false);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 6000);
        setFormData({ service: "", name: "", phone: "", email: "", message: "" }); // Clear fields
        toast.success('Contact Form Submission Successful!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        toast.error('Submission failed, please try again!');
        setLoading(false);
      }
    );
  };

  return (
    <div id="section-1" className="relative w-full pb-20 pt-10 px-4 md:px-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${circular})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-50 opacity-95"></div>
      <ToastContainer />
      <div className="text-center font-extrabold text-shadow-xl transform animate-slide-up text-4xl py-3 md:py-4">
        Connect With Us
      </div>
      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-28 z-10">
        <div className="w-full md:pl-0 md:pr-0 text-center text-balance transform animate-slide-up">
            <div className="mb-4 w-full text-lg font-normal text-black">
              <p className="py-2">
              If you have any questions, please feel free to <br />
                <a href={`mailto:info@identikosolutions.com`} className="cursor-pointer text-blue-800 underline"> Get In Touch</a> with us Our team is here and ready to assist you.
                </p>
                 {/* ( <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@identikosolutions.com" target="_blank" className="cursor-pointer text-blue-800">Gmail</a>,   <a href="https://outlook.live.com/owa/?path=/mail/action/compose&to=info@identikosolutions.com" target="_blank" className="cursor-pointer text-blue-800">Outlook.com</a>, <a href="https://compose.mail.yahoo.com/?to=info@identikosolutions.com" target="_blank" className="cursor-pointer text-blue-800">Yahoo Mail</a>
                ).  */}
            </div>
            <div className="mb-4">
              <span className="flex items-center justify-center gap-2 cursor-pointer">
                <MdAccessTimeFilled className="text-xl text-blue-800" />
                <span className="py-2 text-black text-lg font-semibold">Our Offices are open:</span>
              </span>
              <p className="text-black text-lg">
                Monday to Friday from <span className="font-medium">8:00 a.m. - 5:00 p.m.</span>
              </p>
            </div>
            <div className="mt-4 flex gap-5">
              <div className="w-full">
                <span className="flex items-center justify-center gap-2 cursor-pointer">
                  <FaLocationDot className="text-xl text-blue-800" />
                  <span className="py-2 text-black text-lg font-semibold">Address</span>
                </span>
                <p className="text-black text-lg py-1 mb-2 md:mb-0">2nd Floor, CITN House, Plot 16, Jobi Fele Way, Ikeja, Lagos.</p>
                <p className="text-black text-lg py-1">2nd Floor, Oakland Centre, Plot 2940 Aguiyi Ironsi Street, Maitama, Abuja.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-around text-center justify-center items-center md:items-start">
              <div className="mt-4 flex gap-5">
                <div className="flex flex-col gap-2">
                  <span className="flex items-center justify-center gap-2 cursor-pointer">
                    <MdOutlineCall className="text-xl text-blue-800" />
                    <span className="py-2 text-black text-lg font-semibold">Phone</span>
                  </span>
                  <a href={`tel:+2348094710197`}><span className="text-blue-800">+234 704 381 7509</span></a>
                  <a href={`tel:+2348094710197`}><span className="text-blue-800">+234 809 471 0197</span></a>
                </div>
              </div>
              <div className="mt-4 flex gap-5">
                <div className="flex flex-col gap-1 pb-20 md:pb-0">
                  <span className="flex items-center justify-center gap-2 cursor-pointer">
                    <MdOutlineEmail className="text-xl text-blue-800" />
                    <span className="py-2 text-black text-lg font-semibold">Email</span>
                  </span>
                  <a href={`mailto:info@identikosolutions.com`} className="cursor-pointer text-blue-800 underline">info@identikosolutions.com</a>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full">
          {/* Loader Overlay */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-20">
            <div className="w-8 h-8 border-4 border-t-transparent border-blue-600 border-solid rounded-full animate-spin"></div>
          </div>
        )}
        <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-center text-[#003997]">Request A Quote</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          <div className="col-span-2 mb-4">
            <label htmlFor="service" className="block mb-2 text-lg text-gray-700">Service <span className="text-red-700">*</span></label>
            <div className="relative bg-[#F7F8FA]">
              <select
                id="service"
                name="service"
                required
                onChange={(e) => handleInputChange("service", e.target.value)}
                className={`w-full border rounded-md p-3 shadow appearance-none focus:outline-none cursor-pointer focus:border-[#1F6FE2] ${errors.service ? 'border-red-500' : 'border-[#7F9395]'}`}
              >
                <option value="" disabled selected>Select a Service</option>
                <option value="Biometric Solutions">Biometric Solutions</option>
                <option value="Identity-Based Solution">Identity-Based Solution</option>
                <option value="Enrolment Services">Enrolment Services</option>
                <option value="Demographic Data Harmonization">Demographic Data Harmonization</option>
                <option value="ABIS (Civil & Criminal) Solution">ABIS (Civil & Criminal) Solution</option>
                <option value="Foundational Civil Registration">Foundational Civil Registration</option>
                <option value="Card Production & Personalization">Card Production & Personalization</option>
                <option value="Identity Verification Solution">Identity Verification Solution</option>
                <option value="Software Integration Service">Software Integration Service</option>
                <option value="Cloud Solutions">Cloud Solutions</option>
                <option value="Cyber Security Solutions">Cyber Security Solutions</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Migrations & System Integration">Migrations & System Integration</option>
                <option value="Workplace Modernization Solutions">Workplace Modernization Solutions</option>
                <option value="Advanced Infrastructure Solutions">Advanced Infrastructure Solutions</option>
                <option value="Network Modernization Solution">Network Modernization Solution</option>
                <option value="Managed Services & Outsourcing">Managed Services & Outsourcing</option>
                <option value="Smart Customer Experience Solutions">Smart Customer Experience Solutions</option>
                <option value="Traffic Management Systems">Traffic Management Systems</option>
                <option value="Electronic Surveillance">Electronic Surveillance</option>
                <option value="IOT and Electronic Sensor">IOT and Electronic Sensor</option>
                <option value="Prisons/Correctional Facility Management">Prisons/Correctional Facility Management</option>
              </select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
            </div>
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="name" className="block mb-2 text-lg text-gray-700">Full name <span className="text-red-700">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`w-full border ${errors.name ? 'border-red-500' : 'border-[#7F9395]'} rounded-md focus:outline-none focus:border-[#1F6FE2] p-3 text-sm shadow`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="email" className="block mb-2 text-lg text-gray-700">Email <span className="text-red-700">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full border ${errors.email ? 'border-red-500' : 'border-[#7F9395]'} rounded-md focus:outline-none focus:border-[#1F6FE2] p-3 text-sm shadow`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="phone" className="block mb-2 text-lg text-gray-700">Phone Number <span className="text-red-700">*</span></label>
            <PhoneInput
              international
              defaultCountry="NG"
              value={formData.phone}
              onChange={(value) => handleInputChange("phone", value)}
              className={`w-full border ${errors.phone ? 'border-red-500' : 'border-[#7F9395]'} rounded-md focus:outline-none focus:border-[#1F6FE2] p-3 text-sm shadow`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="mb-4 col-span-2">
            <label htmlFor="message" className="block mb-2 text-lg text-gray-700">Message <span className="text-red-700">*</span></label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message here"
              required
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={`w-full border ${errors.message ? 'border-red-500' : 'border-[#7F9395]'} rounded-md focus:outline-none focus:border-[#1F6FE2] p-3 text-sm shadow`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div className="col-span-2">
                <label htmlFor="terms" className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={(e) => handleInputChange("terms", e.target.checked)}
                    className="form-checkbox"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700 text-nowrap">I agree to the <Link to="/terms" className="text-blue-500 underline">Terms and Conditions</Link> <span className="text-red-700">*</span></span>
                </label>
                {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
              </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-blue-800 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>

      </form>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-green-600 text-xl font-bold text-center">Submission Successful!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactBody;
