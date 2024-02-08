'use client';

interface Props {
    category: string;
    handler: (data: string) => void;
}


const SubList = ({category, handler}: Props) => {
    const mainStyle = "flex flex-row flex-wrap ml-[10px] mt-[5px] text-[#000000] font-sans-regular"
    const fontStyle = "mx-[6px] text-[16px] text-[#4D4D4D]"
    const wineList = ['Red', 'White', 'Rose', 'Sparkling', 'Fortified', 'Non-alcohol']
    const grapeList = ['Cabernet-Sauvignon']
    const countryList = ['Italy', 'Spain', 'Switzerland', 'France']
    const subCategoryHandler = (subject: string) => {
        handler(subject)
    }

    if (category === 'Wine') {
        return (
            <div className={mainStyle}>
                {
                    wineList.map((data, index) => {
                        return (
                            <div onClick={() => subCategoryHandler(data)} className={fontStyle}>{data}</div>
                        )
                    })
                }
            </div>
        )
    } else if (category === 'Grape') {
        return (
            <div className={mainStyle}>
                {
                    grapeList.map((data, index) => {
                        return (
                            <div onClick={() => subCategoryHandler(data)} className={fontStyle}>{data}</div>
                        )
                    })
                }
            </div>
        )
    } else if (category === 'Country') {
        return (
            <div className={mainStyle}>
                {
                    countryList.map((data, index) => {
                        return (
                            <div onClick={() => subCategoryHandler(data)} className={fontStyle}>{data}</div>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <></>
        )
    }



}
export default SubList;