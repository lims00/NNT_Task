interface Props {
    img: string;
    name: string;
    country: string;
    year: string;
    price: string;
    volume: string;
    score: string;
}

const RecommendWineCard = ({name, country, year, price, volume, score, img}: Props) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col rounded-[15px] border-[1.5px] p-[10px] text-[16px] ">
                <div
                    className="flex flex-row text-ellipsis overflow-hidden h-[40px] leading-[19.2px] font-inter-bold text-[16px]">{name}</div>
                <div className="flex flex-row items-center">
                    <div className="flex text-[14px] font-inter-regular text-[#7A757F]">
                        {country}</div>
                    <div
                        className="bg-[#F6F6F6] px-[10px] rounded-full text-[12px] font-inter-medium text-[#7A757F]">
                        {year}
                    </div>
                    <div className="flex flex-row w-full items-center justify-end">
                        <img src={'/detail/price/star.svg'} alt={'star'} className="h-[12px]"/>
                        <div className="flex  text-[14px] ml-[2px] font-inter-medium">{score}</div>
                    </div>
                </div>
                <img src={'/detail/wineImg.svg'} alt={name} className="flex flex-row justify-center h-[224px]"/>
            </div>
            <div className="flex flex-row w-full">
                <div className="font-inter-extraBold text-[24px]">${price}</div>
                <div className="flex items-end mb-[5px] ml-[5px] text-[14px] text-[#7A757F]">{volume}ml</div>
                <img src={'/detail/price/heart.png'} alt={'heart'} className="ml-[35px] mt-[10px] h-[18px]"/>
            </div>

        </div>
    )
}
export default RecommendWineCard;