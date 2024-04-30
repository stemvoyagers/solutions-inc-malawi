import { Sunset } from "../../assets";
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

        <div className="w-full mx-auto grid h-fit md:grid-cols-2">
            <div id="div2" className={` group bg-white text-black gap-10 pl-10 pt-4 md:pt-10 items-center ml-[6%] mr-[6%] justify-end duration-500 transition-all scroll-smooth delay-300 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100%]'}`}>
                <h2 className="font-semibold text-sm md:text-md md:mb-2 ">
                    LATEST NEWS IN IDENTIKO:
                    <br />
                    IDENTIKO BLOG
                </h2>
                <p className="text-xs md:text-xs pr-4 md:pr-0 py-4 md:py-0">
                    <p>
                        When you use Identiko Integrated Solutions Limited Services, we collect
                        information sent to us by your computer, mobile phone or other electronic
                        access device. The automatically collected information includes but not
                        limited to- data about the pages you access, computer IP address, device
                        ID or unique identifier, device type, geo-location information, computer and connection information, mobile network information, statistics on page views, traffic to and from the sites, referral URL, ad data, standard web log data, still and
                        moving images.</p>  <br /><br /> <br />

                    <p>We may also collect information you provide us including but not limited to
                        information on web form, survey responses account update information, email,
                        phone number, organization you represent, official position, correspondence
                        with Identiko Integrated Solutions Limited support services and telecommunication
                        with Identiko Integrated Solutions Limited.</p> <br /><br /><br />

                    <p>We may also collect information about your transactions, enquiries and your
                        activities on our platform or premises. We may also use information provided
                        by third parties like social media sites. </p>
                </p>
            </div>
            <div id="div1" className={` group duration-500 transition-all scroll-smooth delay-300 ${isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[100%]'}`}>
                <video className="md:h-auto w-screen min-w-full min-h-full object-cover relative m-0 p-0 cover" src={Sunset} autoPlay loop muted alt="img1" />
            </div>


        </div>
    );
};

export default BFooterHome;
