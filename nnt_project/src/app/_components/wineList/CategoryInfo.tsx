interface Props {
    category: string;
    subCategory: string;
}

const CategoryInfo = ({category, subCategory}: Props) => {

    return (
        <div className="flex flex-col ml-[5px] mt-[10px] mb-[20px] font-sans-semibold">
            <div className="flex flex-row align-center ml-[10px] mb-[20px] text-[#4D4D4D] text-[16px]">
                <span>{category}</span>
                {category !== '' ? <img src={'/icon/arrow.svg'}/> : <></>}
                <span>{subCategory}</span>
            </div>
            {subCategory === '' ? <></> : (
                <>
                    <div className="flex flex-row">
                        <img className="w-[4px] ml-[10px]" src={'/icon/regular.svg'} alt={'regular'}/>

                        <span className="text-[20px] ml-[10px] font-lexend-medium">
            {subCategory} Wines
                </span>
                    </div>
                    <div className="font-sans-regular ml-[10px] text-[14px]">
                        Your Wine Journey Begins Here | Explore the Wine Test Result!
                    </div>
                </>
            )}
        </div>)

}

export default CategoryInfo;