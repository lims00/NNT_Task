import Ingredient from "@/app/detail/_components/_info_component/Inredient";
import Grape from "@/app/detail/_components/_info_component/Grape";
import Region from "@/app/detail/_components/_info_component/Region";
import Aroma from "@/app/detail/_components/_info_component/Aroma";
import Pairing from "@/app/detail/_components/_info_component/Pairing";
import Decant from "@/app/detail/_components/_info_component/Decant";
import Title from "@/app/detail/_components/_info_component/Title";

const Info = () => {

    return (
        <div className="mx-[10px]">
            <Title>Tasting Note</Title>
            <div className="text-[16px] mt-[15px] font-inter-regular">
                This wine boasts an elegant and complex nose, featuring <span className="bg-[#E8DDFF]">
                berry, floral, and spicy notes.</span>

                On the palate, it's well-balanced with <span className="bg-[#E8DDFF]">fruity flavors, refined tannins, and a smooth, almost
                </span> saline finish.
            </div>
            <Ingredient/>
            <Grape/>
            <Region/>
            <Aroma/>
            <Pairing/>
            <Decant/>
            <div className="h-[100px]"></div>
        </div>


    );
}

export default Info;