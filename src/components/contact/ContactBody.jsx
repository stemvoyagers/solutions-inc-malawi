const ContactBody = () => {

    return (
        <div className="w-full pb-20 pt-20 px-4 md:px-0">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28">
                <div className="w-full pl-4 md:pl-0 pr-4 md:pr-0 text-justify">
                    <h2 className="text-sm font-bold mb-1">CONTACT US</h2>
                    <form>
                        <div className="mb-4">
                            <p className="w-2/3 cursor-pointer text-[12px] md:text-sm py-2 text-black" >
                                If you have any questions or require advice, please feel free to
                                get in touch with us. Our team is here and ready to assist you.
                            </p>
                        </div>
                        <div className="mb-2">
                            <p className="w-full py-2 text-black text-sm font-semibold">
                                Our offices are open:
                            </p>
                            <p className="w-full text-black text-[12px] md:text-sm  lg:text-sm">
                                Monday to Friday from 7:00 a.m. to 5:00 p.m.
                            </p>
                        </div>

                        <div className="mt-4 flex gap-5">
                            <div>
                                <p className="w-full py-2 text-black text-sm font-semibold"> Address: </p>
                                <p className="w-full text-black text-[12px] md:text-sm font-subFont">
                                    Cooperate office: Suite10 Canaan Plaza, Plot 2 Blk 105,
                                    Lekki Phase 1, Lagos <br />  <br />
                                    Operation office: 2nd Floor, CITN (Chartered Institute of Taxation)
                                    House,  <br />Plot 16, Jobi Fele way, Central Business District, Ikeja, Lagos.
                                </p>
                            </div>
                        </div>

                        <div className="mt-2 flex gap-5">
                            <div>
                                <p className="w-full py-2 text-black text-sm font-semibold"> Phone: </p>
                                <p className="w-full text-black text-[12px] md:text-sm font-subFont">
                                    +234 800 0000 000 (whatsapp/call) <br />
                                    +234 900 0000 000 (call only)
                                </p>
                            </div>
                        </div>

                        <div className="mb-4 flex gap-5">
                            <div>
                                <p className="w-full py-2 text-black  text-sm font-semibold"> Email: </p>
                                <p className="w-full text-black text-sm font-subFont">
                                    info@identikosolutions.com
                                </p>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="w-full pl-4 md:pl-0 pr-4 md:pr-0">

                    <form
                    //   onSubmit={handleSubmit}
                    >
                        <div className="mb-4 justify-between bg-[#001049] p-8 rounded-lg">
                            <h2 className="text-sm font-bold mb-2 text-center text-white">Request a Quote</h2>

                            <div className="mt-4 mb-4">
                                <select
                                    type="text"
                                    name="country"
                                    // onChange={(e) => handleValueChange("country", e.target.value)}
                                    className="w-full bg-[#F7F8FA] border border-[#7F9395] rounded-md focus:outline-none focus:border-[#1F6FE2] text-xs p-[3%]"
                                >
                                    <option value="Select a Service">OUR SERVICES</option>
                                    <option value="Service 1">Service 1</option>
                                    <option value="Service 2">Service 2</option>
                                    <option value="Service 3">Service 3</option>
                                    <option value="Service 4">Service 4</option>
                                    <option value="Service 5">Service 5</option>
                                    <option value="Service 6">Service 6</option>
                                </select>
                            </div>

                            <input
                                className="mb-4 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="name"
                                type="text"
                                placeholder="Name"
                                // value={formData.name}
                                // onChange={handleInputChange}
                                required
                            />

                            <input
                                className="mb-4 shadow appearance-none border cursor-pointer  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="phoneNumber"
                                type="text"
                                placeholder="Phone Number"
                                // value={formData.phoneNumber}
                                // onChange={handleInputChange}
                                required
                            />

                            <input
                                className=" mb-4 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                type="email"
                                placeholder="Email"
                                // value={formData.email}
                                // onChange={handleInputChange}
                                required
                            />

                            <input
                                className="shadow appearance-none border h-20 cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="message"
                                type="text"
                                placeholder="Message"
                                // value={formData.message}
                                // onChange={handleInputChange}
                                required
                            />

                            {/* {formError && <p>{formError}</p>} */}
                            <button
                                className="w-full flex items-center justify-center mt-4 bg-white text-[#014C98] hover:text-black font-semibold py-2 px-4 mb-2 rounded-full focus:outline-none border border-black focus:shadow-outline cursor-pointer"
                                type="submit"
                            >
                                Request Free Quote
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default ContactBody;
