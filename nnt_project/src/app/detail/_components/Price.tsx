import Title from "@/app/detail/_components/_info_component/Title";
import Review from "@/app/detail/_components/Review";
import Percent from "@/app/detail/_components/Percent";
import Shop from "@/app/detail/_components/_price_component/Shop";
import {useState} from "react";
import RecommendWineCard from "@/app/detail/_components/_price_component/RecommendWineCard";

const Price = () => {
    const clickedBTN = 'flex items-center h-[34px] border-2 border-[#6D23F9] text-[#6D23F9] text-[14px] rounded-full px-[8px] mr-[10px] font-inter-medium';
    const noneClickedBTN = 'flex items-center h-[34px] border-2 border-[#000000] text-[#000000] text-[14px] rounded-full px-[8px] mr-[10px] font-inter-medium';
    const [isClicked, setIsClicked] = useState<boolean>(false);
    return (
        <div className="mx-[10px]">
            <Title>Price</Title>
            <img className="mt-[20px]" src={'/detail/price/graph.svg'}/>
            <div className="my-[15px]">
                <Percent percent={20}>Below the Average Price in the CA</Percent>
                <Percent percent={30}>Below the Average Price in the AL</Percent>
            </div>

            <Shop link={'https://www.wine.com/'} domain={'winemag.com'} price={'153.9'}/>
            <div className="bg-[#F6F6F6] h-[2px] w-[345px] my-[5px]"></div>
            <Shop link={'https://www.wine.com/'} domain={'winemag.com'} price={'153.9'}/>
            <div className="bg-[#F6F6F6] h-[2px] w-[345px] my-[5px]"></div>
            <Shop link={'https://www.wine.com/'} domain={'winemag.com'} price={'153.9'}/>
            <Title>How About This Wine</Title>
            <div className="flex flex-row mt-[20px]">
                <div className={isClicked ? noneClickedBTN : clickedBTN} onClick={() => setIsClicked(false)}>Similar
                    Taste
                </div>
                <div className={isClicked ? clickedBTN : noneClickedBTN} onClick={() => setIsClicked(true)}>Different
                    Taste
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[10px] mt-[20px]">
                <RecommendWineCard img={'/detail/wineImg.svg'} name={'Le Corti Don Tom ChiantiClassicoriserva 2018'}
                                   country={'Spain'} year={'2017'} price={'13.6'} volume={'750'} score={'4.8'}/>
                <RecommendWineCard img={'/detail/wineImg.svg'} name={'Le Corti Don Tom ChiantiClassicoriserva 2018'}
                                   country={'Spain'} year={'2017'} price={'13.6'} volume={'750'} score={'4.8'}/>
                <RecommendWineCard img={'/detail/wineImg.svg'} name={'Le Corti Don Tom ChiantiClassicoriserva 2018'}
                                   country={'Spain'} year={'2017'} price={'13.6'} volume={'750'} score={'4.8'}/>
                <RecommendWineCard img={'/detail/wineImg.svg'} name={'Le Corti Don Tom ChiantiClassicoriserva 2018'}
                                   country={'Spain'} year={'2017'} price={'13.6'} volume={'750'} score={'4.8'}/>
            </div>
            <div className="h-[250px]"></div>
        </div>
    )
}

export default Price;