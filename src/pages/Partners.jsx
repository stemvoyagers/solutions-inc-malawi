import { cisco, hp, idemia, lenovo, microsoft, neuro, veritas, vmware } from "../assets"

const Partners = () => {
    return (
        <div className="mb-8 mt-8">
            <div className="flex flex-col items-center align-middle gap-2">
                <div className="font-bold text-3xl text-blue-950">Our Partners</div>
                <span className="text-md">We bring together a team of 1st class world partners to <br />
                    provide our clients with top grade services in all aspects  <br />
                    of our solutions</span>
                <div className="grid grid-cols-4 gap-2">
                    <img src={veritas} alt="msImg"/>
                    <img src={microsoft} alt="msImg"/>
                    <img src={cisco} alt="nigImg"/>
                    <img src={vmware} alt="msImg"/>
                    <img src={lenovo} alt="msImg"/>
                    <img src={idemia} alt="nigImg"/>
                    <img src={hp} alt="msImg"/>
                    <img src={neuro} alt="msImg" />                   
                </div>
            </div>
        </div>
    )
}

export default Partners
