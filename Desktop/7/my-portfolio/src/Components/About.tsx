import { Info } from "../User";
import { useEffect, useState } from "react";
//@ts-ignore
import NET from "vanta/src/vanta.net"
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk"
import Typewriter from 'typewriter-effect';
import { Button } from '@mantine/core';

const About = ()=> {

    const [net, setNet] = useState<any>(null)
    const [trunk, setTrunk] = useState<any>(null)

  useEffect(() => {
    if (!net) {
      setNet(NET({
        el: "#bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x64FFDA,
        backgroundColor: 0x112240,
        points: 10.00,
        maxDistance: 2.00,
        spacing: 10.00
      }))
    }

    if(!trunk) {
        setTrunk(TRUNK({
            el: "#photo",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3fc0c0,
            backgroundColor: 0x112240,
            spacing: 1.00,
            chaos: 8.00
          })
    )
}


    return () => {
      if (net) net.destroy()
    if (trunk) trunk.destroy()
  
    }
  }, [])

    return (
        <div className="flex overflow-hidden justify-around  font-mono px-16 h-[80vh]" id="bg" >
            <div className="ml-20 w-3/5 flex flex-col">
                <div className=" text-primaryColor text-3xl">Hi, I’m  </div>
                <div className="text-white text-[4.25rem] font-extrabold">{Info.name}</div>
                <div className="text-white text-4xl flex font-semibold">I'm a&nbsp; <span className="text-primaryColor"> <Typewriter options={{strings: Info.stack, autoStart: true, loop:true }} /> </span></div>

                <div className="text-textColor text-xl w-[90%] text-justify my-8 font-semibold">{Info.bio} </div>

                <Button component="a" href="https://www.linkedin.com/in/arnold-uwamwezi-98902b198/" className="!text-bgColor !w-fit" size="lg" variant="filled" color="#64FFDA">Check Resume</Button>
            </div>
            <div className="h-[35vh] flex justify-center items-center overflow-hidden rounded-full mr-14 w-[22vw]" id="photo">
                    <img className="w-[85%] shadow-xl rounded-full " src="/7.png" alt="profile" />
            </div>

        </div>
    )
}

export default About;