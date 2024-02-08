"use client";
import GNB from "@/app/_components/wineList/GNB";
import CategoryInfo from "@/app/_components/wineList/CategoryInfo";
import SubList from "@/app/_components/wineList/SubList";
import {useEffect, useState} from "react";
import WineCard from "@/app/_components/wineList/WineCard";


export default function Home() {
    const [category, setCategory] = useState<string>('');
    const [subCategory, setSubCategory] = useState<string>('');
    const [items, setItems] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);
    const updateCategory = (data: string) => {
        setCategory(data);
    }
    const updateSubCategory = (data: string) => {
        setSubCategory(data);
    }
    const pageHandler = (data: number) => {
        if (data === 0 && page > 1) {
            setPage(page - 1)
        } else if (data === 1 && page < totalPage) {
            setPage(page + 1)
        }
    }


    useEffect(() => {
        setSubCategory('')
        setItems([])
    }, [category])

    useEffect(() => {
            const categoryLower = category.toLowerCase()
            const subCategoryLower = subCategory.toLowerCase()
            const fetchData = async () => {
                try {
                    const res = await fetch(`https://api.veenoverse.com/ssr/v2/wines?subcategory=${subCategoryLower}&&page=${page}`);
                    const data = await res.json();
                    console.log(data)
                    setTotalPage(data.data.pagination.total_page)
                    console.log(totalPage)
                    setItems(data.data.items)
                    console.log(typeof (items[0].price['value']))
                } catch (error) {
                    console.error('Error fetching data:', error);

                }
            };

            if (category !== '') {
                fetchData();
            }
        }, [subCategory, page]
    )

    return (
        <main className="min-h-screen">
            <div className="flex items-center h-[50px] mb-[5px]">
                <img className="ml-[40px] pt-[20px]" src={'/logo.svg'} alt={'header'}/>
            </div>
            <GNB handler={updateCategory}/>
            <SubList handler={updateSubCategory} category={category}/>
            <CategoryInfo category={category} subCategory={subCategory}/>
            {items.length > 0 ? (
                    <>
                        {items.map((item, index) => {
                            const price = item?.price ? item.price['value'] : (item?.estimated_prices ? (item.price_statistic?.min['value'] ? item.price_statistic.min['value'] : '-') : '-')
                            return (<WineCard name={item.name} price={price}
                                              image={`https://image.veenoverse.com${item.image['thumb']}`}
                                              volume={item.volume}
                                              vintage={item.vintage}
                                              country={item.country['name']}/>
                            )
                        })}

                        <div className="flex flex-row h-[150px] justify-end items-start mt-[15px]">
                            <div onClick={() => pageHandler(0)}>
                                <img src={'/icon/leftIcon.svg'} alt={'leftIcon'}/></div>
                            <div className="mx-[15px] font-sans-regular mt-[10px]">{page} of {totalPage}</div>
                            <div onClick={() => pageHandler(1)}>
                                <img src={'/icon/rightIcon.svg'} alt={'rightIcon'}/></div>
                        </div>
                    </>
                )

                : <></>
            }


        </main>

    );
}
