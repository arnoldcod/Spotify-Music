import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

const Social = ()=> {
    const socialLinks = [ {link:"https://github.com/arnoldcod", icon:IconBrandGithub}, {link:"https://www.linkedin.com/in/arnold-uwamwezi-98902b198/", icon:IconBrandLinkedin}, {link:"https://x.com/arnoldcod_", icon:IconBrandX}, {link:"https://leetcode.com/u/arnoldcod/", icon:IconBrandLeetcode} ];

    const socialIcons = socialLinks.map((socialLink, index) =>{
        return <a key={index} href={`${socialLink.link}`}   className=" font-mono text-lg  hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
            <div data-aos="zoom-in-right" data-aos-duration="800">
            <socialLink.icon className="-rotate-90" size={30} />
            </div>       
        </a>
    })

    

    return <div className="flex text-textColor items-center gap-10 fixed bottom-32 -left-40 rotate-90">
        {socialIcons}
        <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor"  />
      </div>

}

export default Social;