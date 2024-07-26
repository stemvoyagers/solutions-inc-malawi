import { useState, useRef } from "react";
import { circular } from "../../assets"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import { MdAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";

const ContactBody = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ service: "", name: "", phone: "", email: "", message: "", })
    const form = useRef();
    const handleInputChange = (name, value) => {
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formDataObject = {
            service: formData.service,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
        };

        emailjs
            .sendForm('service_k4eu1go', 'template_irvji6c', form.current, {
                publicKey: 'wHjGOUGZOCsxtBGQh',
            }, formDataObject)
            .then(
                () => {
                    toast.success('Contact Form Submission Successful!');
                    setLoading(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Submission failed, please try again!');
                    setLoading(false);
                },
            );
    };

    return (
        <div id="section-1" className="relative w-full pb-20 pt-10 px-4 md:px-0 bg-cover bg-center"
            style={{
                backgroundImage: `url(${circular})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95"></div>
            <ToastContainer />
            <div className="text-center font-extrabold text-shadow-xl  transform animate-slide-up text-5xl py-4">
          Connect With Us
        </div>
            <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 z-50">

                <div className="w-full pl-4 md:pl-0 pr-4 md:pr-0 text-center text-balance transform animate-slide-up">

                    {/* <h2 className="text-xl md:text-3xl font-bold mb-1">CONTACT US</h2> */}
                    <form>
                        <div className="mb-4">
                            <p className="w-3/3 text-lg py-2 text-black" >
                                If you have any questions or require advice, please feel free to
                                <a className="cursor-pointer text-blue-800 underline"> Get In Touch</a> with us. Our team is here and ready to assist you.
                            </p>
                        </div>
                        <div className="mb-2">
                        <span className="flex items-center justify-center gap-2 cursor-pointer">
                        <MdAccessTimeFilled />
                        <span className=" py-2 text-black text-xl font-semibold">Our Offices are open:</span>
                        </span>
                            <p className="w-full text-black text-lg">
                                Monday to Friday from <span className="font-medium">8:00 a.m. - 5:00 p.m.</span>
                            </p>
                        </div>

                        <div className="mt-4 flex gap-5">
                            <div>
                                <span className="flex items-center justify-center gap-2 cursor-pointer">
                                <FaLocationDot />
                        <span className=" py-2 text-black text-xl font-semibold">Address</span>
                        </span>
                                <p className="w-full text-black text-lg py-1">2nd Floor, CITN House, Plot 16, Jobi Fele Way, Ikeja, Lagos</p>
                        <p className="w-full text-black text-lg py-1">2nd Floor, Oakland Centre, Plot 2940 Aguiyi Ironsi Street, Maitama, Abuja</p>

                            </div>
                        </div>

<div className="flex flex-row justify-around">

                        <div className="mt-4 flex gap-5">
                            <div className="flex flex-col gap-2">
                            <span className="flex items-center justify-center gap-2 cursor-pointer">
                            <MdOutlineCall />
                        <span className=" py-2 text-black text-xl font-semibold">Phone</span>
                        </span>
                                <a href={`tel:+2348094710197`}><span>+234-(0)704 381 7509</span></a>
                                <a href={`tel:+2348094710197`}><span>+234-(0)809 471 0197</span></a>
                            </div>
                        </div>

                        <div className="mt-4 flex gap-5">
                            <div className="flex flex-col gap-1">
                            <span className="flex items-center justify-center gap-2 cursor-pointer">
                            <MdOutlineEmail />
                        <span className=" py-2 text-black text-xl font-semibold">Email</span>
                        </span>
                                <a href={`mailto:info@identikosolutions.com`}className="cursor-pointer text-blue-800 underline">info@identikosolutions.com</a>

                            </div>
                        </div>
</div>
                        {/* <div className="mt-4 flex gap-5">
                            <div>
                                <p className="w-full py-2 text-black text-xl font-semibold"> Phone: </p>
                                <p className="w-full text-black text-lg py-1">
                                    +234 800 0000 000 (whatsapp/call) <br />
                                    +234 900 0000 000 (call only)
                                </p>
                            </div>
                        </div> */}
                        {/* <div className="mt-2 flex gap-5">
                            <div>
                                <p className="w-full py-2 text-black  text-[15px] font-semibold"> Email: </p>
                                <p className="w-full text-black text-[15px] font-subFont">
                                    info@identikosolutions.com
                                </p>
                            </div>
                        </div> */}
                    </form>
                </div>
                <div className="w-full">
                    <form ref={form} onSubmit={sendEmail} >
                        <div className="mb-4 justify-between bg-[#003997] p-8 rounded-lg">
                            <h2 className="text-xl md:text-3xl font-bold mb-2 text-center text-white">Request a Quote</h2>
                            <div className="mt-4 mb-2">
                                <select
                                    type="text"
                                    name="service"
                                    required
                                    onChange={(e) => handleInputChange("service", e.target.value)}
                                    className="w-full bg-[#F7F8FA] border border-[#7F9395] rounded-md uppercase focus:outline-none focus:border-[#1F6FE2] text-xs p-[3%]"
                                >
                                    <option value="Select a Service" className="font-bold">OUR SERVICES</option>
                                    <option value="Enrollment Options">Enrollment Options</option>
                                    <option value="Identity Management Solution">Identity Management Solution</option>
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
                                name="name" type="text" placeholder="Name*" value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)} required
                            />
                            <PhoneInput
                                defaultCountry="NG"
                                className="mb-2 shadow bg-white appearance-none cursor-pointer  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="phone" placeholder="8012345678" value={formData.phoneNumber}
                                onChange={(value) => handleInputChange("phoneNumber", value)} required
                            />
                            <input
                                className=" mb-2 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email" type="email" placeholder="Email*" value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)} required
                            />
                            <textArea
                                className="shadow appearance-none border h-24 cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="message" type="text" placeholder="Message*" value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)} required
                            />
                            <div className="mb-4 cursor-pointer">
                                <input
                                    type="checkbox" name="terms" required
                                    onChange={(e) => handleInputChange("terms", e.target.checked)}
                                />
                                <label className="text-xs md:text-sm text-white mt-2">I agree to the <Link to="/privacy">Privacy Policy & Terms and Conditions</Link></label>
                            </div>
                            <button
                                className="w-full flex items-center justify-center mt-4 bg-white text-[#014C98] hover:text-black font-semibold py-2 px-4 mb-2 rounded-full focus:outline-none border focus:shadow-outline cursor-pointer"
                                type="submit"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <style>{`@keyframes slide-up{ from{ transform: translateY(100%); opacity: 0 } to{ transform: translateY(0%); opacity: 1 }} .animate-slide-up {animation: slide-up 2s ease-out;`} </style>
        </div>
    );
}
export default ContactBody;
