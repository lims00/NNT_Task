interface Props {
    children: React.ReactNode;
}

const Title = ({children}: Props) => {
    return (
        <div className="mt-[15px]">
            <span className="text-[22px] font-inter-bold">{children}</span>
        </div>
    )
}

export default Title;