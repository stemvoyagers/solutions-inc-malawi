import { useState, useRef } from "react";
import { circular } from "../../assets"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';

const ContactBody = () => {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        service: "", name: "", phone: "",
        email: "", message: "",
    })

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
                    // console.log('Submission Successful!');
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
        <div id="section-1" className="relative w-full pb-20 pt-20 px-4 md:px-0 bg-cover bg-center"
            style={{
                backgroundImage: `url(${circular})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-95"></div>
            <ToastContainer />

            <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 z-50">
                <div className="w-full pl-4 md:pl-0 pr-4 md:pr-0 text-justify text-balance">
                    <h2 className="text-xl md:text-3xl font-bold mb-1">CONTACT US</h2>
                    <form>
                        <div className="mb-4">
                            <p className="w-3/3 cursor-pointer text-[12px] md:text-[16px] py-2 text-black" >
                                If you have any questions or require advice, please feel free to
                                get in touch with us. Our team is here and ready to assist you.
                            </p>
                        </div>
                        <div className="mb-2">
                            <p className="w-full py-2 text-black text-[15px] font-semibold">
                                Our offices are open:
                            </p>
                            <p className="w-full text-black text-[12px] md:text-[15px]  lg:text-[15px]">
                                Monday to Friday from 7:00 a.m. to 5:00 p.m.
                            </p>
                        </div>

                        <div className="mt-4 flex gap-5">
                            <div>
                                <p className="w-full py-2 text-black text-[15px] font-semibold"> Address: </p>
                                <p className="w-full text-black text-[12px] md:text-[15px] font-semibold">
                                    Cooperate office: Suite10 Canaan Plaza, Plot 2 Blk 105,
                                    Lekki Phase 1, Lagos </p> 
                                 <p className="w-full py-2 text-black  text-[15px]">  Operation office: 2nd Floor, CITN (Chartered Institute of Taxation)
                                    House,  <br />Plot 16, Jobi Fele way, Central Business District, Ikeja, Lagos.
                                </p>
                            </div>
                        </div>

                        <div className="mt-2 flex gap-5">
                            <div>
                                <p className="w-full py-2 text-black text-[15px] font-semibold"> Phone: </p>
                                <p className="w-full text-black text-[12px] md:text-[15px] font-subFont">
                                    +234 800 0000 000 (whatsapp/call) <br />
                                    +234 900 0000 000 (call only)
                                </p>
                            </div>
                        </div>

                        <div className="mb-4 flex gap-5">
                            <div>
                                <p className="w-full py-2 text-black  text-[15px] font-semibold"> Email: </p>
                                <p className="w-full text-black text-[15px] font-subFont">
                                    info@identikosolutions.com
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="w-full">

                    <form ref={form} onSubmit={sendEmail}
                    >
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
                                name="name"
                                type="text"
                                placeholder="Name*"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                required
                            />

                            <PhoneInput
                                defaultCountry="NG"
                                className="mb-2 shadow bg-white appearance-none cursor-pointer  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="phone"
                                placeholder="8012345678"
                                value={formData.phoneNumber}
                                onChange={(value) => handleInputChange("phoneNumber", value)}
                                required
                            />

                            <input
                                className=" mb-2 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                type="email"
                                placeholder="Email*"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                required
                            />

                            <textArea
                                className="shadow appearance-none border h-24 cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="message"
                                type="text"
                                placeholder="Message*"
                                value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                required
                            />

                            <div className="mb-4 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    required
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

        </div>
    );
}

export default ContactBody;
