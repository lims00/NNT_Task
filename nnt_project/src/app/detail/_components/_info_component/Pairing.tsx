import Title from "@/app/detail/_components/_info_component/Title";
import Content from "@/app/detail/_components/_info_component/Content";

const Pairing = () => {
    return (
        <div className="mb-[30px]">
            <Title>Pairing</Title>
            <Content>Our wine experts think this Napa Valley Cabernet Sauvignon wine would be a match made in heaven
                with these dishes.</Content>
            <div
                className="flex flex-row justify-center text-center bg-[#F6F6F6] w-[345px] py-[20px] rounded-[15px] font-inter-medium text-[#49454E] text-[14px] mt-[20px] mb-[20px]">
                <div className="flex flex-col w-[80px] items-center mx-[5px]">
                    <img src={'/info/pairing/meat.svg'}/>
                    <div>Beef</div>
                </div>
                <div className="flex flex-col w-[80px] items-center mx-[5px]">
                    <img src={'/info/pairing/cheese.svg'}/>
                    <div>Cheese</div>
                </div>
                <div className="flex flex-col w-[80px] items-center mx-[5px]">
                    <img src={'/info/pairing/charcuterie.svg'}/>
                    <div>Charcuterie</div>
                </div>
            </div>
        </div>
    );
}
export default Pairing;