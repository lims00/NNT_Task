interface Props {
    mention: string;
}

const Review = ({mention}: Props) => {
    return (
        <div className="flex flex-row items-center bg-[#F6F6F6] rounded-md mt-[5px] w-[345px] min-h-[27px]">
            <img className="mx-[5px]" src={'/detail/MedalIcons.svg'}/>
            <span className="text-[14px] text-[#49454E] font-inter-semibold">{mention}</span>
        </div>
    )
}

export default Review;