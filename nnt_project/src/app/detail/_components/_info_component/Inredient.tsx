const Ingredient = () => {
    return (
        <>
            <div
                className="bg-[#F6F6F6] w-[345px] h-[119px] rounded-[15px] mt-[10px] px-[10px] pt-[10px] font-inter-medium">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row w-[147px] justify-between mb-[10px]">
                        <span className="text-[14px] text-[#49454E]">pH</span>
                        <span className="text-[16px] text-[#6D23F9]">3.75</span>
                    </div>

                    <div className="flex flex-row w-[147px] justify-between">
                        <span className="text-[14px] text-[#49454E]">Harvest brix</span>
                        <span className="text-[16px] text-[#6D23F9]">NA</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row w-[147px] justify-between mb-[10px]">
                        <span className="text-[14px] text-[#49454E]">Oak usage</span>
                        <span className="text-[16px] text-[#6D23F9]">NA</span>
                    </div>
                    <div className="flex flex-row w-[147px] justify-between">
                        <span className="text-[14px] text-[#49454E]">Aging</span>
                        <span className="text-[16px] text-[#6D23F9]">17 months</span>
                    </div>

                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row w-[147px] justify-between mb-[10px]">
                        <span className="text-[14px] text-[#49454E]">Residual sugar</span>
                        <span className="text-[16px] text-[#6D23F9]">NA</span>
                    </div>
                    <img src={'/info/ic_help.svg'}/>
                </div>
            </div>
            <div>
                <div className="flex justify-end w-full items-center mt-[12px] pr-[10px]">
                    <span className="text-[#7A757F] text-[14px] mr-[60px] font-inter-medium">Tasting Note</span>
                    <img className="absolute" src={'/info/Track.svg'}/>
                    <img className="absolute pr-[23px]" src={'/info/Handle.svg'}/>
                </div>
            </div>
        </>
    )
}
export default Ingredient;