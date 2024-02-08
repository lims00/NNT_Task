interface Props {
    children: React.ReactNode;

}

const Content = ({children}: Props) => {
    return (
        <div className="text-[16px] mt-[15px] text-[#49454E] leading-[24px] text-pretty">
            {children}
        </div>
    )
}

export default Content;