import { MdFacebook, MdOutlineCall, MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
// import { msPix, nigPix } from "../../assets";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div style={{ position: 'relative', bottom: 0, left: 0, right: 0, backgroundColor: 'black', color: 'white', padding: '1rem', textAlign: 'center', zIndex: 1}}>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 mt-4'>
                <div className="flex flex-col items-center align-middle gap-2 md:gap-4">
                    <div className="font-bold text-md md:text-xl">Compliance</div>
                    <Link to = '/isms'><span className="cursor-pointer">ISO Policy</span></Link>
                    <Link to = '/privacy'><span className="cursor-pointer">Privacy Policy</span></Link>
                    {/* <div className="flex justify-center gap-2">
                        <img src={msPix} alt="msImg" className="w-8 h-10" />
                        <img src={msPix} alt="msImg" className="w-8 h-10" />
                        <img src={nigPix} alt="nigImg" className="w-8 h-10" />
                    </div> */}
                </div>

                <div className="flex flex-col items-center align-middle gap-2 md:gap-4">
                    <div className="font-bold text-md md:text-xl">Get In Touch</div>
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
                        <FaWhatsapp/>
                    </div>
                </div>


                <div className="flex flex-col items-center align-middle gap-2 md:gap-4">
                    <div className="font-bold text-md md:text-xl">Resources</div>
                    <span className="cursor-pointer">Success Stories</span>
                    <Link to = '/about'><span className="cursor-pointer">Partners</span></Link>
                </div>
            </div>

        </div>
    )
}

export default Footer
