import Content from "@/app/detail/_components/_info_component/Content";
import Title from "@/app/detail/_components/_info_component/Title";

const Aroma = () => {
    return (
        <div className="my-[30px]">
            <Title>Aroma</Title>
            <Content>Opus One wine features rich black cherry and
                blackberry aromas, with a smooth, balanced taste. Its complexity lingers in the finish, even after
                extended sipping.
            </Content>
            <div className="mt-[10px] flex justify-between items-center text-[14px] text-[#7A757F] font-inter-medium">
                <div className="w-[115px] flex justify-center text-center">Grape aroma</div>
                <div className="w-[115px] flex justify-center text-center">Fermentation Aromas</div>
                <div className="w-[115px] flex justify-center text-center">Aftertaste</div>
            </div>
            <div className="flex flex-row mt-[10px]">
                <div className="w-[115px] h-[15px] bg-[#6D23F9] rounded-l-full"/>
                <div className="w-[115px] h-[15px] bg-[#CFBDFF]"/>
                <div className="w-[115px] h-[15px] bg-[#E8DDFF] rounded-r-full"/>
            </div>
            <div className="mt-[10px] flex justify-between items-center text-[14px] text-[#49454E] font-inter-medium">
                <div className="w-[115px] flex justify-center text-center">Oak</div>
                <div className="w-[115px] flex justify-center text-center">Blackberry</div>
                <div className="w-[115px] flex justify-center text-center">Tobaco</div>
            </div>
            <div
                className="flex flex-row justify-center text-center font-inter-medium bg-[#F6F6F6] w-[345px] py-[20px] rounded-[15px] text-[#49454E] text-[14px] mt-[20px] mb-[20px]">
                <div className="flex flex-col w-[80px] items-center mx-[5px]">
                    <img src={'/info/aroma/oaky.svg'}/>
                    <div>Oak</div>
                </div>
                <div className="flex flex-col w-[80px] items-center mx-[5px]">
                    <img src={'/info/aroma/dark.svg'}/>
                    <div>Chocolate</div>
                </div>
                <div className="flex flex-col w-[80px] items-center mx-[5px]">
                    <img src={'/info/aroma/spicy.svg'}/>
                    <div>Tobaco</div>
                </div>
            </div>
        </div>

    );
}

export default Aroma;