import Title from "@/app/detail/_components/_info_component/Title";

const Region = () => {
    return (
        <div className="mt-[30px]">
            <Title>Region</Title>
            <div className="bg-[#F6F6F6] w-[345px] rounded-[15px] mt-[15px] px-[10px] py-[15px] mb-[20px]">

                <div className="flex flex-row justify-between">
                    <span className="text-[24px] font-inter-extraBold">Oakville AVA</span>
                    <img src={'/icon/arrow.svg'} className=""/>
                </div>

                <div className="text-[18px] font-bold mt-[10px]">Napa Valley, Napa Valley2</div>
                <div className="text-[14px] font-inter-medium">Joyce Stavert</div>
                <div className="text-[16px] mt-[15px] text-[#7A757F] ml-[5px]">In the very heart of the Napa Valley lies
                    the town of Oakville. Once a steam train stop in the late 1800s, Oakville owes its name to thedense
                    groves of native oak which once blanc.
                </div>
            </div>
        </div>
    );
}

export default Region;