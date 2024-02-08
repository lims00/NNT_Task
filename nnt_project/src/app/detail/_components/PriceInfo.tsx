const PriceInfo = () => {
    return (
        <>
            <div className="flex flex-row w-full my-[10px]">
                <div className="flex flex-col w-full">
                    <div className="text-[14px] text-[#49454E] mb-[5px] font-inter-medium">Real Price / Vestimated
                        Price
                    </div>
                    <div className="flex flex-row h-[26px] items-end ">
                        <span className="text-[24px] text-[#6D23F9] font-bold">329.99$</span>
                        <span className="text-[16px] text-[#6D23F9] font-bold mb-[3px]"> / 345.21$</span>
                    </div>
                </div>
                <div className="flex flex-row justify-end items-center">
                    <span
                        className="flex flex-row justify-center items-center bg-[#6D23F9] w-[106px] h-[40px] text-[#FFFFFF] text-[14px] rounded-full">Lowest price</span>
                </div>
            </div>
        </>
    )
}

export default PriceInfo;
