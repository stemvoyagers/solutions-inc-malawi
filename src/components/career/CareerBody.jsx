import { useState, useRef } from "react";
import { circular } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

// Set the maximum allowed file size in bytes (50KB = 50 * 1024)
const MAX_FILE_SIZE = 50 * 1024;
const ALLOWED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const CareerBody = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    coverletter: "",
    phone: "",
    cvLogo: "",
    email: "",
    service: "",
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const form = useRef();

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cvLogo: "File size exceeds the 50KB limit"
      }));
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        cvLogo: "Invalid file type. Please upload a PDF or Word document."
      }));
      return;
    }

    const base64String = await base64_arraybuffer(file);
    handleInputChange("cvLogo", base64String);
    setErrors((prevErrors) => ({ ...prevErrors, cvLogo: "" }));
  };

  const base64_arraybuffer = async (data) => {
    const base64url = await new Promise((r) => {
      const reader = new FileReader();
      reader.onload = () => r(reader.result);
      reader.readAsDataURL(new Blob([data]));
    });
    return `data:${data.type};base64,${base64url.split(",", 2)[1]}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    const validationErrors = {};
    if (!formData.service) validationErrors.service = "Please a job opening.";
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.phone) validationErrors.phone = "Phone number is required";
    if (!formData.terms) validationErrors.terms = "You must agree to the terms";

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const formDataObject = {
      service: formData.service,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      message: formData.coverletter,
      cvLogo: formData.cvLogo
    };

    emailjs
      .sendForm('service_k4eu1go', 'template_irvji6c', form.current, {
        publicKey: 'wHjGOUGZOCsxtBGQh'
      }, formDataObject)
      .then(
        () => {
          setLoading(false);
          setFormData({
            name: "",
            coverletter: "",
            phone: "",
            cvLogo: "",
            email: "",
            service: "",
            terms: false
          });
          setErrors({});
          setShowSuccessModal(true);
          setTimeout(() => setShowSuccessModal(false), 6000); // Hide modal after 6 seconds
        },
        (error) => {
          toast.error('Submission failed, please try again!', error.text);
          setLoading(false);
        }
      );

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (formData.email.trim() !== "" && !emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }
  };

  return (
    <div
      id="section-1"
      className="relative w-full pb-20 pt-4 px-4 md:px-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${circular})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95"></div>
      <ToastContainer />

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Success</h2>
            <p>Your form has been successfully submitted!</p>
          </div>
        </div>
      )}

      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-12 z-10">
        <div className="w-full flex flex-col justify items-center pl-4 md:pl-0 pr-4 md:pr-0 gap-8 md:gap-0 transform animate-slide-up">
          <div className="md:mt-4 flex flex-col items-center md:gap-5 text-center">
            <div className="w-[100%] md:p-2 text-2xl font-semibold">
              WHY JOIN US
            </div>

            <div className="w-[100%] md:w-[70%] text-lg md:text-xl text-center sm:mt-2 md:mt-[-10px]">
              Identiko is a leading ICT player with deep expertise in identity management systems. We partner with
              top companies like Cisco, Lenovo, Neuro Technology, and Idemia to deliver world-class solutions, helping clients
              excel in today’s and tomorrow’s knowledge-driven society.
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto flex justify-center items-center">
          <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg relative" ref={form}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#003997]">Join Us</h2>

            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50 rounded-lg">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="col-span-2">
                <div className="relative bg-[#F7F8FA]">
                <select
                    name="services"
                    onChange={(e) => handleInputChange("service", e.target.value)}
                    className={`w-full border rounded-md p-3 shadow appearance-none focus:outline-none cursor-pointer focus:border-[#1F6FE2] ${errors.service ? 'border-red-500' : 'border-[#7F9395]'}`}
                  >
                    <option value="" disabled selected>* Job Openings *</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="Project Management">Project Management</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>
              </div>

              <div className="col-span-2">
                <label htmlFor="name" className="mb-2">Name <span className="text-red-700">*</span></label>
                <input
                  className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="col-span-2 md:col-span-1">
                <label htmlFor="email" className="mb-2">E-mail <span className="text-red-700">*</span></label>
                <input
                  className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="col-span-2 md:col-span-1">
                <label htmlFor="phone" className="mb-2">Phone <span className="text-red-700">*</span></label>
                <PhoneInput
                  defaultCountry="NG"
                  className={`shadow bg-white appearance-none cursor-pointer rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  name="phone"
                  placeholder="0800-0000-000"
                  value={formData.phone}
                  onChange={(value) => handleInputChange("phone", value)}
                  required
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="col-span-2 mb-4">
                <label htmlFor="coverletter" className="mb-2">Cover Letter</label>
                <textarea
                  className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[100%] ${errors.coverletter ? 'border-red-500' : 'border-gray-300'}`}
                  name="coverletter"
                  placeholder="Cover Letter"
                  value={formData.coverletter}
                  onChange={(e) => handleInputChange("coverletter", e.target.value)}
                />
                {errors.coverletter && <p className="text-red-500 text-xs mt-1">{errors.coverletter}</p>}
              </div>

              <div className="col-span-2">
                <label htmlFor="cv" className="mb-2">Upload CV (PDF/Word only, max 50KB) <span className="text-red-700">*</span></label>
                <input
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline ${errors.cvLogo ? 'border-red-500' : 'border-gray-300'}`}
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  required
                />
                {errors.cvLogo && <p className="text-red-500 text-xs mt-1">{errors.cvLogo}</p>}
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
                  <span className="ml-2 text-sm text-gray-700">I agree to the <Link to="/terms" className="text-blue-500 underline">Terms and Conditions</Link> <span className="text-red-700">*</span></span>
                </label>
                {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3 px-4 bg-[#003997] text-white font-bold rounded-md shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerBody;
