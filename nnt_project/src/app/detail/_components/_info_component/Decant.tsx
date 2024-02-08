import Title from "@/app/detail/_components/_info_component/Title";
import Content from "@/app/detail/_components/_info_component/Content";

const Decant = () => {
    return (
        <div>
            <Title>Decant</Title>
            <Content>Opus One 2016 benefits from decanting for 1-2 hours. Serve it in a Bordeaux-style wine glass at a
                temperature of around 60-65°F (15-18°C) to fully appreciate its complex flavors.</Content>
            <div
                className="flex flex-row justify-center text-center bg-[#F6F6F6] w-[345px] py-[20px] rounded-[15px] text-[14px] font-inter-medium mt-[20px] mb-[20px] ">
                <div className="flex flex-col w-[70px] items-center mx-[20px]">
                    <div className="text-[#7A757F]">Decant</div>
                    <img src={'/info/decant/decant.svg'}/>
                    <div className="text-[#505050]">90 min</div>
                </div>
                <div className="flex flex-col w-[70px] items-center mx-[20px]">
                    <div className="text-[#7A757F]">Glass</div>
                    <img src={'/info/decant/glass.svg'}/>
                    <div className="#505050">Bodrdeaux</div>
                </div>
                <div className="flex flex-col w-[70px] items-center mx-[20px]">
                    <div className="text-[#7A757F]">Serve</div>
                    <img src={'/info/decant/temp.svg'}/>
                    <div className="#505050">60-65°F</div>
                </div>
            </div>
        </div>
    )

}
export default Decant;