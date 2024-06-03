import { useState } from "react";
import { circular } from "../../assets";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CareerBody = () => {
  // const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    coverletter: "",
    phoneNumber: "",
    cvLogo: "",
    email: "",
    phoneNnumber: "",
    services: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (formData.email.trim() !== "" && !emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(false);
  };

  const base64_arraybuffer = async (data) => {
    const base64url = await new Promise((r) => {
      const reader = new FileReader();
      reader.onload = () => r(reader.result);
      reader.readAsDataURL(new Blob([data]));
    });

    return `data:${data.type};base64,${base64url.split(",", 2)[1]}`;
  };

  const handleValueChange = (field, value) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
  };

  return (
    <div
      id="section-1"
      className="relative w-full pb-20 pt-20 px-4 md:px-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${circular})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-85"></div>
      <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 z-50">
        <div className="w-full pl-4 md:pl-0 pr-4 md:pr-0">
          <h2 className="text-xl md:text-3xl font-bold mb-2">
            OUR CAREER LIST
          </h2>
          <form>
            <div className="mt-4 flex gap-5 s">
              <div className="border p-4 hover:bg-[#014d9811] text-sm py-2 shadow">
                <div className="w-full py-2 font-semibold mb-2 ">
                  APPLICATIONS DEPARTMENT
                </div>
                <div className="w-full grid gap-3">
                  <p>BackEnd Services</p>
                  <p>FrontEnd Services</p>
                  <p>Testing</p>
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-5">
              <div className="border p-4 hover:bg-[#014d9811] text-sm py-2 shadow">
                <div className="w-full py-2 font-semibold mb-2 ">
                  INFRASTRUCTURE DEPARTMENT
                </div>
                <div className="w-full grid gap-3">
                  <p>Networking </p>
                  <p> Hardware </p>
                  <p> Server Services</p>
                </div>
              </div>
            </div>

            <div className="mt-2 flex gap-5">
              <div className="border p-4 hover:bg-[#014d9811] text-sm py-2 shadow">
                <div className="w-full grid gap-3">
                  <p className="font-semibold"> Overall Services </p>
                  <p> IT </p>
                  <p> Internship </p>
                  <p> NYSC and Siwes </p>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full pl-4 md:pl-0 pr-4 md:pr-0">
          <form onSubmit={handleFormSubmit}>
            <ToastContainer />
            <div className="mb-4 justify-between bg-[#003997] p-8 rounded-lg">
              <h2 className="text-xl md:text-3xl font-bold mb-2 text-center text-white">
                Join Us
              </h2>

              <div className="mt-4 mb-4">
                <select
                  type="text"
                  name="services"
                  onChange={(e) =>
                    handleValueChange("services", e.target.value)
                  }
                  className="w-full bg-[#F7F8FA] border border-[#7F9395] rounded-md focus:outline-none focus:border-[#1F6FE2] text-xs p-[3%]"
                >
                  <option value="Select a Service">OUR SERVICES</option>
                  <option value="Service 1">Enrollment Options</option>
                  <option value="Service 2">
                    Identity Management Solution
                  </option>
                  <option value="Service 3">
                    Software Application services
                  </option>
                  <option value="Service 4">Demographic Data Harmonized</option>
                  <option value="Service 5">ABI’s (Civil & Criminal)</option>
                  <option value="Service 6">
                    Foundational Civil Registration
                  </option>
                  <option value="Service 1">
                    Card Production & Personalization
                  </option>
                  <option value="Service 2">Identity Verification</option>
                  <option value="Service 3">Mobile verification</option>
                  <option value="Service 4">Electronic Voting</option>
                  <option value="Service 5">Traffic Management Systems</option>
                  <option value="Service 6">Electronic Surveilance</option>
                  <option value="Service 1">IOT x electronic sensor</option>
                  <option value="Service 2">Monitoring & Management</option>
                  <option value="Service 3">Software Development</option>
                  <option value="Service 4">Software Integration</option>
                  <option value="Service 5">
                    Software Application Services
                  </option>
                  <option value="Service 6">
                    State, National ID & Civil Registration
                  </option>
                  <option value="Service 1">
                    E-government Services Platform
                  </option>
                  <option value="Service 2">Health Programs</option>
                  <option value="Service 3">Time & Attendance</option>
                  <option value="Service 4">Security & Access Control</option>
                  <option value="Service 5">E-passport</option>
                  <option value="Service 6">Drivers License</option>
                  <option value="Service 1">Border Control</option>
                  <option value="Service 2">Criminal Database</option>
                  <option value="Service 3">
                    Prisons/ Correctional Facility Management
                  </option>
                  <option value="Service 4">Smart City/Campus</option>
                </select>
              </div>

              <input
                className="mb-4 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleValueChange}
                required
              />

              <input
                className="mb-4 shadow appearance-none border cursor-pointer  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleValueChange}
                required
              />

              <input
                className=" mb-4 shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleValueChange}
                required
              />

              <textarea
                className=" mb-4 shadow appearance-none border h-20 cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                type="text"
                placeholder="Coverletter (optional)"
                value={formData.coverletter}
                onChange={handleValueChange}
              />

              <input
                className="shadow appearance-none border cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="file"
                type="file"
                onChange={async (e) =>
                  handleValueChange(
                    "cvLogo",
                    await base64_arraybuffer(e.target.files?.[0])
                  )
                }
                placeholder="Upload CV/Resume"
              />

              {/* {formError && <p>{formError}</p>} */}
              <button
                className="w-full flex items-center justify-center mt-4 bg-white text-[#014C98] hover:text-black font-semibold py-2 px-4 mb-2 rounded-full focus:outline-none border border-black focus:shadow-outline cursor-pointer"
                // type="submit"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CareerBody;
