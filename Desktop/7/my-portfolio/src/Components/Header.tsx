

const Header = ()=> {
    return (
        <nav className="flex bg-bgColor h-[15vh] px-10 dm-mono-regular justify-between items-center">
            <h1 className="text-primaryColor">Portfolio</h1>
            <div className="flex gap-4">
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