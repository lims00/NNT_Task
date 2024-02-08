import Link from "next/link";

const Header = () => {
    return (
        <Link className="flex flex-row items-center h-[94px] pt-[44px]" href={'/'}>
            <img src={'/icon/ic_arrow_back_stem.svg'} alt={'back'}/>
            <img className="ml-[5px]" src={'/logo.svg'} alt={'header'}/>
        </Link>
    )
}

export default Header;