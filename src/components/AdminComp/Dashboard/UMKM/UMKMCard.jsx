import { IoLogoWhatsapp } from "react-icons/io";


const UMKMCard = ({ image, nime, desc, name, priceRange, nomorWA }) => {

    const waClick = () => {
        const nomorHP = { nomorWA }
        window.location.href = `https://wa.me/${nomorHP}`
    }
    return (
        <div className="bg-gradient-to-b from-cust-blue via-cust-softblue to-gray flex rounded-xl border-2 border-cust-sofblue w-full">
            <div className="w-1/5 my-6 mx-6">
                <img
                    src={image}
                    alt=""
                    className="rounded-2xl" />
            </div>
            <div className="grid w-full pr-6">
                <div className='text-[30px] font-bold mt-6'>
                    {name}
                </div>
                <div className='text-[20px] text-cust-gray text-justify mt-2'>
                    {desc}
                </div>
                <div className='text-[20px] font-bold text-cust-blue text-justify mt-2'>
                    {priceRange}
                </div>
                <div className="flex items-center mt-4">
                    <div className="flex text-yellow-400 text-[26px]">
                        ⭐⭐⭐⭐⭐
                    </div>
                    <div className="ml-auto flex items-center space-x-4 my-4">
                        <a onClick={waClick}
                            rel="noopener noreferrer"
                            className="text-green-500 rounded-full text-3xl">
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UMKMCard;
