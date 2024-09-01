import { Info } from "../User";
import Typewriter from 'typewriter-effect';
import { Button } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import ResumeViewer from "./ResumeViewer";
import { IconDownload } from "@tabler/icons-react";

const About = ()=> {

  const [opened, {open, close}] = useDisclosure(false);

    return (
      <>
        <div className="flex overflow-hidden justify-around  font-mono px-16 h-[80vh]" id="bg" >
            <div className="ml-20 w-3/5 flex flex-col">
                <div className=" text-primaryColor text-3xl"> <span className="text-white">Hi,</span> I’m  </div>
                <div className="text-white text-[4.25rem] font-extrabold">{Info.name}</div>
                <div className="text-white text-4xl flex font-semibold">I'm a&nbsp; <span className="text-primaryColor"> <Typewriter options={{strings: Info.stack, autoStart: true, loop:true }} /> </span></div>

                <div className="text-textColor text-xl w-[90%] text-justify my-8 font-semibold">{Info.bio} </div>

                <div className="flex gap-4">
                  <Button onClick={open} className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA">Check Resume</Button>
                  <Button component="a" href="/Resume-cv.pdf" download={Info.name} className="!text-primaryColor !w-fit" size="lg" variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}>Download</Button>
                </div>
            </div>
            <div className="h-[40vh] flex justify-center items-center overflow-hidden rounded-full mr-14 w-[20vw]" id="photo">
                    <img className="w-[85%] justify-center  shadow-xl rounded-full " src="/7.png" alt="profile" />
            </div>
        </div>
        <ResumeViewer opened={opened} close={close} />

        </>
    )
}

export default About;