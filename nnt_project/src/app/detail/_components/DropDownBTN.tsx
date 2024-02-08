"use client";
import React, {useEffect, useState} from 'react';

interface Props {
    children: React.ReactNode;
}

const yearHandler = () => {
    console.log('yearHandler')
}
const yearList = ['2018', '2019', '2020', '2021', '2022'];


const DropDownBTN = ({children}: Props) => {
    const dropdownMenuShow = 'display border-[1.5px] border-[#6D23F9] rounded-[10px] bg-[#FFFFFF] mt-[1px] font-inter-medium';
    const dropdownMenuHide = 'hidden';
    const dropdownMenu = "flex justify-center border-b-[1.5px] border-[#6D23F9] font-inter-medium"
    const dropdownLast = "flex justify-center font-inter-medium"
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [year, setYear] = useState<string>(yearList[0]);

    useEffect(() => {
        setIsHidden(true);
    }, [year]);
    return (
        <div className="inline-block h-[26px] text-[#6D23F9] z-20 ml-[5px]">

            <button
                className='flex items-center h-[26px] text-[14px] border-[2px] rounded-lg border-[#6D23F9] pl-[10px] font-inter-medium'
                onClick={() => setIsHidden(false)}>
                {year}<img src={'/detail/TrailingIcon.svg'}/></button>
            <div className={isHidden ? dropdownMenuHide : dropdownMenuShow}>
                {(yearList).map((y: string, index: number) => (
                        <div key={index} className={yearList.length - 1 === index ? dropdownLast : dropdownMenu}
                             onClick={() => setYear(y)}>{y}</div>
                    )
                )
                }
            </div>

        </div>
    )

}

export default DropDownBTN;