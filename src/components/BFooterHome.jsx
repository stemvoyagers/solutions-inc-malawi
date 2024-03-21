import { home } from "../assets";

const BFooterHome = () => {
    return (
        <div>
            <div className="w-full mx-auto grid  h-fit  md:grid-cols-2">
                <div className="group">
                    <img className="w-full h-52 md:h-96 object-cover" src={home} alt="img1" />
                </div>

                <div className="group bg-black text-white gap-10 pl-10 pt-10">
                    <h2 className="font-semibold text-sm md:text-md mb-2 ">
                        DEDICATED TO ECO-CONSCIOUS EXPERTISE:
                        <br />
                        REDEFINING CONSUMPTION
                    </h2>
                    <p className="w-80 text-[8px] md:text-xs pr-4 md:pr-0">
                        At Wooden Heritage, we advocate consuming less and consuming
                        better. Our furniture is meticulously crafted to withstand the
                        test of time, ensuring it serves multiple lifetimes. By choosing
                        Wooden Heritage, you actively participate in sustainable
                        development and opt for a direct supply chain. All our products
                        are crafted by skilled artisans right here in Nigeria. <br /><br />

                        We take the extra step to protect and deliver our creations with
                        covers, minimizing packaging waste. Our commitment extends to the
                        use of renewable and recyclable raw materials. <br /><br />

                        For us, ecological responsibility just a marketing gimmick;
                        a core philosophy embedded in every aspect of our operations.
                        Being eco-conscious is the foundation of all our choices.<br /><br />
                    </p>
                </div>
            </div>
        </div>

    );
};

export default BFooterHome;
