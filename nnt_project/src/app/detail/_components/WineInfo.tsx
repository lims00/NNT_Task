import DropDownBTN from "@/app/detail/_components/DropDownBTN";

const WineInfo = () => {
    const roundBox = "flex items-center h-[26px] text-[14px] text-[#6D23F9] border-[2px] border-[#6D23F9] bg-[#FFFFFF] font-inter-medium rounded-lg px-[7px] mx-[5px]"

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row">

                <div className="flex flex-col w-full">
                    <div className="flex flex-row w-full justify-end items-center h-[20px]">
                        <img className="flex items-start w-[14px]" src={'/detail/grapeIcon.svg'}/>
                        <div className="ml-[5px] text-[#6D23F9] text-[14px] font-inter-medium">Writing Tasting Note
                        </div>
                        <img className="h-[12px] ml-[5px]" src={'/detail/rightArrow.svg'}/>
                    </div>
                    <span
                        className="flex justify-end text-[14px] text-[#7A757F] font-inter-medium">USA {'>'} California {'>'} Napa Valley</span>
                    <span className="flex justify-end text-[24px] font-inter-bold">2018 Opus One</span>
                    <div className="flex flex-row justify-end items-center mt-[10px]">
                        <div className={roundBox}>Red</div>
                        <div className={roundBox}>14.5º</div>
                        <DropDownBTN>2018</DropDownBTN>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WineInfo;