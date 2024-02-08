const Rate = () => {
    const Wrapper = "flex flex-col mr-[10px] items-center";
    const textStyle = "text-[12px] text-[#CAC4CF]";
    return (
        <div className="flex flex-row justify-end items-end h-full">
            <div className={Wrapper}>
                <img className="w-[24px]" src={'/detail/ic_add.svg'}/>
                <span className={textStyle}>List</span>
            </div>
            <div className={Wrapper}>
                <img className="w-[24px]" src={'/detail/ic_thumsup_outlined.svg'}/>
                <span className={textStyle}>Rate</span>
            </div>
            <div className={Wrapper}>
                <img className="w-[24px]" src={'/detail/ic_send.svg'}/>
                <span className={textStyle}>Share</span>
            </div>
        </div>
    )
}

export default Rate;