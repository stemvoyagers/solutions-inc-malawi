const ContactBody = () => {
    //   const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     phoneNumber: "",
    //     location: "",
    //     message: "",
    //     agree: false,
    //   });
    //   const [formError, setFormError] = useState("");

    //   const validateForm = (formData) => {
    //     const { name, email, phoneNumber, location, message, agree } = formData;

    //     if (!name || !email || !phoneNumber || !location || !message || !agree) {
    //       return false;
    //     }

    //     return true;
    //   };


    //   const handleInputChange = (event) => {
    //     const { name, value, type, checked } = event.target;
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       [name]: type === "checkbox" ? checked : value,
    //     }));
    //   };

    //   const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!validateForm(formData)) {
    //       setFormError("Please fill out all fields.");
    //       return;
    //     }

    //     const apiFormData = {
    //       customer_name: formData.name,
    //       customer_email: formData.email,
    //       customer_phone: formData.phoneNumber,
    //       customer_location: formData.location,
    //       message: formData.message,
    //     };

    //     try {
    //       const response = await fetch(
    //         "https://whew-api.apps.rokswood.com/v1/contact_forms",
    //         {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify(apiFormData),
    //         }
    //       );

    //       if (response.status >= 200 && response.status < 300) {
    //         const responseData = await response.json();
    //         console.log("Form submitted successfully", responseData.message);

    //         setFormData({
    //           name: "",
    //           email: "",
    //           phoneNumber: "",
    //           location: "",
    //           message: "",
    //           agree: false,
    //         });
    //         setFormError("");
    //       } else {

    //         setFormError("Form submission failed.");
    //       }
    //     } catch (error) {
    //       setFormError("An error occurred: " + error.message);
    //     }
    //   };

    return (
        <div className="w-full pb-20 pt-20">
           
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28">
                <div className="w-full pl-4 md:pl-0 pr-4 md:pr-0">
                    <h2 className="text-sm font-bold mb-1">CONTACT US</h2>
                    <form>
                        <div className="mb-4">
                            <p
                                className="w-2/3 cursor-pointer text-[12px] md:text-sm py-2 
                 text-black"
                            >
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

                        <div className="mt-5 flex gap-5">

                            <div>
                                <p className="w-full py-2 text-black text-sm font-semibold">
                                    Address:
                                </p>
                                <p className="w-full text-black text-[12px] md:text-sm font-subFont">
                                    Cooperate office: Suite10 Canaan Plaza, Plot 2 Blk 105, 
                                    Lekki Phase 1, Lagos <br />
                                    <br />
                                    Operation office: 2nd Floor, CITN (Chartered Institute of Taxation) 
                                    House, Plot 16, Jobi Fele way, Central Business District, Ikeja, Lagos. 
                                </p>
                            </div>
                        </div>

                        <div className="mt-2 flex gap-5">

                            <div>
                                <p className="w-full py-2 text-black text-sm font-semibold">
                                    Phone:
                                </p>
                                <p className="w-full text-black text-[12px] md:text-sm font-subFont">
                                    +234 800 0000 000 (whatsapp/call) <br />
                                    +234 900 0000 000 (call only)
                                </p>
                            </div>
                        </div>

                        <div className="mb-4 flex gap-5">

                            <div>
                                <p className="w-full py-2 text-black  text-sm font-semibold">
                                    Email:
                                </p>
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
                        <div className="mb-4 justify-between bg-[#014C98] p-8 rounded-lg">
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
                                className="w-full flex items-center justify-center mt-4 bg-white text-[#014C98] font-semibold py-2 px-4 mb-2 rounded-full focus:outline-none border border-black focus:shadow-outline cursor-pointer"
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
