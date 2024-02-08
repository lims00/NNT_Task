import Link from "next/link";

interface Props {
    name: string;
    price: number | null | undefined | string;
    image: string;
    volume: number;
    vintage: string;
    country: string;
}

const WineCard = ({name, price, image, volume, vintage, country}: Props) => {
    const tag = "bg-[#F6F6F6] px-[10px] rounded-full text-[14px] font-inter-regular mb-[10px]"
    return (
        <div className="flex flex-row border-b-[1px] w-[343px] border-black mx-[10px] mt-[10px]">
            <div className="flex flex-row w-[102px] h-[176px] justify-center ">
                <img className="h-[172px]" src={image} alt={name}/>
            </div>
            <div className="flex flex-col ml-[10px]">
                <Link href={'/detail'}>
                    <div className="text-[18px] w-[220px] mt-[15px] font-lexend-bold">{name}</div>
                </Link>
                <div className="flex flex-row">
                    <span className="flex items-end text-[26px] font-sans-bold">${price}</span>
                    <span className="flex items-end text-[14px] font-sans-regular ml-[10px] mb-[5px]">{volume}ml</span>
                </div>
                <div className="flex flex-row mt-[10px]">
                    <div className={tag}>{vintage}</div>
                    <div className={tag}>{country}</div>
                </div>
            </div>
        </div>

    )
}

export default WineCard;