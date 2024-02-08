interface Props {
    children: React.ReactNode;
    percent: number;

}

const Percent = ({children, percent}: Props) => {
    return (
        <div className="flex flex-row "><img src={'/detail/checkIcon.svg'}/>
            <span className="ml-[5px] text-[#6D23F9] text-[14px] font-bold">{percent}%</span>
            <span className="text-[14px] font-inter-semibold text-[#49454E] ml-[5px]">{children}</span>
        </div>
    )
}
export default Percent;