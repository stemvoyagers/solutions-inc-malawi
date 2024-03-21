import { MdFacebook, MdOutlineCall, MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { msPix, nigPix } from "../assets";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div style={{ position: 'relative', bottom: 0, left: 0, right: 0, backgroundColor: 'black', color: 'white', padding: '1rem', textAlign: 'center', zIndex: 1}}>

            <div className='grid grid-cols-3 mb-8 mt-4'>
                <div className="flex flex-col items-center align-middle gap-2">
                    <div className="font-bold text-xl cursor-pointer">Compliance</div>
                    <Link to = '/isms'><span className="cursor-pointer">ISO Policy</span></Link>
                    <Link to = '/privacy'><span className="cursor-pointer">Privacy Policy</span></Link>
                    <div className="flex gap-2">
                        <img src={msPix} alt="msImg" className="w-8 h-10" />
                        <img src={msPix} alt="msImg" className="w-8 h-10" />
                        <img src={nigPix} alt="nigImg" className="w-8 h-10" />
                    </div>
                </div>

                <div className="flex flex-col items-center align-middle gap-2">
                    <div className="font-bold text-xl">Get In Touch</div>
                    <span className="border w-fit bg-gray-400 hover:text-gray-400 hover:bg-white font-bold rounded-3xl p-2 cursor-pointer">Request Demo</span>
                    <span className="flex items-center gap-2 cursor-pointer">
                        <MdOutlineCall />
                        <span>+2348000000000</span>
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer">
                        <MdOutlineEmail />
                        <span>info@identikosolutions.com</span>
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer">
                        <MdOutlineLocationOn />
                        <span>Plot 16, Jobi Fele way, Alausa, Ikeja, Lagos</span>
                    </span>
                    <div className="flex gap-8 cursor-pointer">
                        <MdFacebook />
                        <FaInstagram />
                        <FaXTwitter />
                        <FaLinkedin />
                        <FaWhatsapp></FaWhatsapp>
                    </div>
                </div>


                <div className="flex flex-col items-center align-middle gap-2">
                    <div className="font-bold text-xl">Resources</div>
                    <span className="cursor-pointer">Success Stories</span>
                    <span className="underline cursor-pointer">Watch a Demo</span>
                    <Link to = '/about'><span className="cursor-pointer">Partners</span></Link>
                </div>
            </div>

        </div>
    )
}

export default Footer
