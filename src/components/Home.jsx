import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)


const Home = () => {
    const animation = useRef(null);
    let tl = gsap.timeline();
    useEffect(() => {
        tl.to(".animation", {
            fontSize:30, 
            position:"absolute", 
            height: "100px", 
            width:"150px", 
            duration: 3, 
            delay: 2
         })

         tl.to(".text", {
            opacity: 1,
            duration: 1,
            delay: .3
        })
         tl.to(".ul li a", {
            opacity: 1,
            duration: 0,
            marginTop: 20
        })
         
    })

    // useEffect(() => {
    //     tl.to(".text", {
    //         opacity: 1,
    //         duration: 1,
    //         delay: 1
    //     })
    // })

    return ( 
        <React.Fragment>
            <div>
                <div ref={animation} className="animation">F.O.D</div>
                    <div className="text">Hi I'm Oyetola David I'm a fullstack web developer</div>
                        <div className="link">
                            <ul className="ul">
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>

            </div>
            <div>
            </div>
        </React.Fragment>
     );
}
 
export default Home;