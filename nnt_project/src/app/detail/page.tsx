'use client';
import Header from "@/app/detail/_components/Header";
import WineInfo from "@/app/detail/_components/WineInfo";
import Rate from "@/app/detail/_components/Rate";
import Review from "@/app/detail/_components/Review";
import PriceInfo from "@/app/detail/_components/PriceInfo";
import PriceDetailInfo from "@/app/detail/_components/PriceDetailInfo";
import {useState} from "react";
import Price from "@/app/detail/_components/Price";
import Info from "@/app/detail/_components/Info";

const detailPage = () => {
    const [isInfo, setIsInfo] = useState<boolean>(true)
    const show = 'flex justify-center items-center h-[48px] w-full text-[#6D23F9] text-[14px] font-bold border-b-2 border-[#6D23F9] mb-[15px]';
    const hide = 'flex justify-center items-center h-[48px] w-full text-[#CAC4CF] text-[14px] font-bold border-b-2 border-[#CAC4CF] mb-[15px]';
    return (
        <>
            <div className="mx-[10px] flex flex-col">
                <Header/>
                <div className="flex flex-row justify-start">
                    <img src={'/detail/wineImg.svg'}/>
                    <div className="flex flex-col w-full">
                        <WineInfo></WineInfo>
                        <Rate/>
                    </div>
                </div>
                <Review mention={'Perfect for aging and enjoying later'}/>
                <Review mention={'98 by Robert Parker (2018 Vintage)'}/>
            </div>
            <div className="w-full bg-[#F6F6F6] h-[4px] my-[10px]"></div>
            <div className="mx-[10px] flex flex-col">
                <PriceInfo/>
                <PriceDetailInfo/>
            </div>
            <div className="flex flex-row">
                <div className={isInfo ? show : hide} onClick={() => setIsInfo(true)}>Info</div>
                <div className={!isInfo ? show : hide} onClick={() => setIsInfo(false)}>Price</div>

            </div>
            {isInfo ? <Info/> : <Price/>}
        </>
    )
}

export default detailPage;