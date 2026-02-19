
import { B1, B2, B3, B4, icon1, icon3 } from "../../assets";

const necTeam = [

  { name: "Prof. Dr. Save Kumwenda", role: " ", photo: B3 },
  { name: "Maxwell Zude Kalipentala", role: "  ", photo: B2 },
  { name: "Limbani Kalumbi", role: " ", photo: B1 },
  { name: "Florence Kamwana Ngwira", role: " ", photo: icon3 },
  { name: "Apostle Peter Ngwira", role: " ", photo: icon1 },
  { name: "Ms Bridget Chinguo", role: " ", photo: icon3 },
];

const operationsTeam = [

  { name: "Philip Banda", role: "", photo: B4 },
  { name: "Tiwonge Longwe", role: "", photo: icon3 },
  { name: "Thokozire Kasuzumira", role: "", photo: icon3 },
  { name: "Sellah Mandala", role: "", photo: icon3 },
];


const GallerySwipe = () => {
  

  return (
    <div
      className="py-24 px-4 flex flex-col items-center"
      style={{
        background: "linear-gradient(135deg, #f8fdfc 0%, #e6f7f5 100%)",
      }}
    >
    
   


      <section className="py-16 md:py-24 px-4shadow-md w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 md:gap-60">
            <div>
              <h3 className="text-2xl font-bold text-[#292496] text-center mb-8 pb-4 border-b border-[#65a7b2]/30">
                <h2
                  className="text-3xl md:text-4xl font-normal mb-4"
                  style={{
                    fontWeight: 700,
                    color: "#E8B504",
                  }}
                >
                 Board members
                </h2>
                <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-12"></div>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
                {necTeam.map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-[#65a7b2]/30 shadow-md">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-medium text-[#292496] text-sm mt-2">
                      {member.name}
                    </p>
                    <p className="text-gray-600 text-xs text-center">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#292496] text-center mb-8 pb-4 border-b border-[#65a7b2]/30">
                <h2
                  className="text-3xl md:text-4xl font-normal mb-4"
                  style={{
                    fontWeight: 700,
                    color: "#E8B504",
                  }}
                >
                 Staff
                </h2>
                <div className="w-20 h-1 bg-[#65a7b2] mx-auto rounded-full mb-12"></div>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2">
                {operationsTeam.map((member, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-[#65a7b2]/30 shadow-md">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-medium text-[#292496] text-sm mt-2">
                      {member.name}
                    </p>
                    <p className="text-gray-600 text-xs text-center">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySwipe;
