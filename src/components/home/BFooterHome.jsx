import { officeSpace } from "../../assets";
import { useState, useEffect } from "react";

const BFooterHome = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const top1 = document.getElementById('div1').getBoundingClientRect().top;
            const top2 = document.getElementById('div2').getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            setIsVisible1(top1 < windowHeight);
            setIsVisible2(top2 < windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <div className="w-full mx-auto h-fit flex flex-col md:flex-row justify-center items-center mt-20 mb-20">
            <div id="div2" className={`bg-white text-black gap-10 pt-4 md:pt-10 items-center md:w-[40%] text-left ml-[6%] mr-[6%] justify-start duration-500 transition-all scroll-smooth delay-300 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'}`}>
                <h2 className="font-semibold text-xl md:text-3xl md:mb-2 ">
                    LATEST NEWS IN IDENTIKO: IDENTIKO BLOG
                </h2>
                <p className="text-xs md:text-xs pr-4 md:pr-0 py-4 md:py-0">
                    <p>
                        When you use Identiko Integrated Solutions Limited Services, we collect
                        information sent to us by your computer, mobile phone or other electronic
                        access device. The automatically collected information includes but not
                        limited to- data about the pages you access, computer IP address, device
                        ID or unique identifier, device type, geo-location information, computer and connection information, mobile network information, statistics on page views, traffic to and from the sites, referral URL, ad data, standard web log data, still and
                        moving images.</p>  <br /><br />

                    <p>We may also collect information you provide us including but not limited to
                        information on web form, survey responses account update information, email,
                        phone number.</p> 
                   
                </p>
            </div>
            <div id="div1" className={` md:w-[50%] ml-[6%] mr-[6%] duration-500 transition-all scroll-smooth delay-300 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'}`}>
                <img src={officeSpace} className="bg-no-repeat bg-center z-1 shadow-xl rounded-md" />
            </div>
        </div>
    );
};

export default BFooterHome;
