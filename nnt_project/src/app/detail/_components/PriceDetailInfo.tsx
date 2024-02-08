'use client';
import {useEffect, useState} from "react";
import Percent from "@/app/detail/_components/Percent";

const PriceDetailInfo = () => {
    const clickedBTN = 'flex items-center h-[34px] border-2 border-[#6D23F9] text-[#6D23F9] text-[14px] rounded-full px-[8px] mr-[10px] font-inter-medium';
    const noneClickedBTN = 'flex items-center h-[34px] border-2 border-[#000000] text-[#000000] text-[14px] rounded-full px-[8px] mr-[10px] font-inter-medium';
    const avg: string = `w-[196px] h-[20px] bg-[#E8DDFF] text-[#7A757F] text-[12px] rounded-[5px] mb-[5px] pl-[5px] font-inter-medium`;
    const max: string = `w-[307px] h-[20px] bg-[#CFBDFF] text-[#7A757F] text-[12px] rounded-[5px] mb-[5px] pl-[5px] font-inter-medium`;
    const real: string = `w-[279px] h-[20px] bg-[#6D23F9] text-[#FFFFFF] text-[12px] rounded-[5px] mb-[5px] pl-[5px] font-inter-medium`;
    const min: string = `w-[178px] h-[20px] bg-[#CFBDFF] text-[#7A757F] text-[12px] rounded-[5px] pl-[5px] font-inter-medium`;
    const todayState: string = 'cheaper';
    const priceState: string = 'cheaper';
    const [isClicked, setIsClicked] = useState<boolean>(false);
    return (
        <>
            <div className="flex flex-row">
                <div className={isClicked ? noneClickedBTN : clickedBTN} onClick={() => setIsClicked(false)}>My
                    Location
                </div>
                <div className={isClicked ? clickedBTN : noneClickedBTN} onClick={() => setIsClicked(true)}>All</div>
            </div>
            <div className="bg-[#F6F6F6] w-[345px] h-[345px] rounded-[15px] mt-[10px] pl-[10px]  mb-[20px]">
                <div className="mt-[10px] mb-[20px]">
                    <div className={avg}>Avg {423.10}$</div>
                    <div className={max}>Max {713.90}$</div>
                    <div className={real}>Real {329.99}$</div>
                    <div className={min}>Min {317.19}$</div>
                </div>
                <Percent percent={54}>{priceState} than the highest price</Percent>
                <span className="flex justify-end mr-[45px] text-[#CAC4CF] text-[14px]">10/23</span>
                <img src={'/detail/graph.svg'}/>
                <img className="mb-[10px]" src={'/detail/line.svg'}/>
                <Percent percent={22.5}>{todayState} than Today’s Average Price</Percent>
            </div>
        </>
    )
}

export default PriceDetailInfo;