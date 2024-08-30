import { Info } from "../User";
import { useEffect, useState } from "react";
//@ts-ignore
import NET from "vanta/src/vanta.net"

const About = ()=> {

    const [net, setNet] = useState<any>(null)

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
        points: 16.00,
        maxDistance: 12.00,
        spacing: 18.00
      }))
    }
    return () => {
      if (net) net.destroy()
    }
  }, [net])

    return (
        <div className="flex px-16" id="bg" >
            <div>
                <div>Hi, I’m  </div>
                <div>{Info.name}</div>
                <div>I'm a <span></span></div>
                <div>
                I'm a passionate software engineer with a strong background in programming and web development.
I specialise in creating efficient and scalable solutions, deliver top-notch web applications and provide freelance services that exceed client expectations. Let’s connect and create amazing things together!
  
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}

export default About;