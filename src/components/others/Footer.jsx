import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
// import { msPix, nigPix } from "../../assets";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div style={{ position: 'relative', bottom: 0, left: 0, right: 0, backgroundColor: 'black', color: 'white', padding: '1rem', textAlign: 'center', zIndex: 1}}>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 mt-4'>
                <div className="flex flex-col items-center align-middle gap-2 md:gap-4">
                    <div className="font-bold text-md md:text-xl">Compliance</div>
                    <Link to = '/isms-policy'><span className="cursor-pointer">ISO Policy</span></Link>
                    <Link to = '/privacy-policy'><span className="cursor-pointer">Privacy Policy</span></Link>
                </div>

                <div className="flex flex-col items-center align-middle gap-2 md:gap-4">
                    <div className="font-bold text-md md:text-xl">Get In Touch</div>
                     <span className="flex items-center gap-2 cursor-pointer">
                        <MdOutlineCall />
                        <a href={`tel:+2348094710197`}><span>+234-(0)704 381 7509</span></a>
                    </span>
                     <span className="flex items-center gap-2 cursor-pointer">
                        <MdOutlineCall />
                        <a href={`tel:+2348094710197`}><span>+234-(0)809 471 0197</span></a>
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer">
                        <MdOutlineEmail />
                        <a href={`mailto:info@identikosolutions.com`}><span>info@identikosolutions.com</span></a>
                    </span>
                    <span className="flex items-center gap-2 cursor-pointer">
                    <FaLocationDot />
                        <span>2nd Floor, CITN House, Plot 16, Jobi Fele Way, Ikeja, Lagos</span>
                        </span>

                    <span className="flex items-center gap-2 cursor-pointer text-nowrap">
                    <FaLocationDot />
                        <span>2nd Floor, Oakland Centre, Plot 2940 Aguiyi Ironsi Street, Maitama, Abuja</span>
                        </span>

                        {/* <span></span> */}

                    <div className="flex gap-8 cursor-pointer">
                        <a href="https://www.instagram.com/identiko_solutions?igsh=MTF2eTdsdzlqd2t6dg=="><div className="rounded-full border border-white p-2"><FaInstagram /> </div></a>
                        {/* <div className="rounded-full border border-white p-2"><MdFacebook /></div> */}
                        {/* <div className="rounded-full border border-white p-2"><FaXTwitter /></div> */}
                        <a href="https://www.linkedin.com/company/identikosolutions/"><div className="rounded-full border border-white p-2"><FaLinkedin /> </div> </a>
                    </div>
                </div>


                <div className="flex flex-col items-center align-middle gap-2 md:gap-4">
                    <div className="font-bold text-md md:text-xl">Resources</div>
                    <span className="cursor-pointer">Success Stories</span>
                    <Link to = '/about-us'><span className="cursor-pointer">Partners</span></Link>
                </div>
            </div>

        </div>
    )
}

export default Footer
