import { IconHexagonLetterA } from "@tabler/icons-react";


const Header = ()=> {
    return (
        <nav className="flex bg-bgColor h-[15vh] px-10 dm-mono-regular justify-between items-center">
            <IconHexagonLetterA size={60} color="#64ffda" stroke={1.25} />
            <div className="flex gap-8 md-mx:hidden">
                <a className="text-textColor hover:text-primaryColor" href="#about" >About </a>
                <a className="text-textColor hover:text-primaryColor" href="#work" >Work </a>
                <a className="text-textColor hover:text-primaryColor"  href="#experience" >Experiences </a>
                <a className="text-textColor hover:text-primaryColor"  href="#skills" >Skills </a>
                <a className="text-textColor hover:text-primaryColor"  href="#contact" >Contact </a>
            </div>
        </nav>
    )
}

export default Header;