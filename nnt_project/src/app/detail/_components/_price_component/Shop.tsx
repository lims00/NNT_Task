import Title from "@/app/detail/_components/_info_component/Title";
import Link from "next/link";

interface Props {
    link: string;
    domain: string;
    price: string;
}

const Shop = ({link, domain, price}: Props) => {
    return (
        <div className="flex flex-row w-full h-[56px]">
            <div className="flex items-center text-[24px] text-[#2E2E2E] font-inter-extraBold">${price}</div>
            <div
                className="flex items-center text-[14px] ml-[10px] mt-[5px] text-[#7A757F] font-inter-medium">{domain}</div>
            <div className="flex w-full items-center justify-end">
                <Link
                    className="flex rounded-full h-[40px] bg-[#6D23F9] justify-center items-center w-[98px] text-[#FFFFFF] text-[14px]"
                    href={link}>Go
                    To Shop
                </Link>
            </div>
        </div>
    )
}

export default Shop;