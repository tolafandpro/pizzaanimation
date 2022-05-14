import React, {useEffect, useRef} from 'react';
import gsap, {Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesBg from '../images/section_1_bg.webp';
import images01 from '../images/section_1_01.webp';
import images02 from '../images/section_1_02.webp';
import images03 from '../images/section_1_03.webp';
import images04 from '../images/section_1_04.webp';
import images05 from '../images/section_1_05.webp';
import images06 from '../images/section_1_06.webp';
import images07 from '../images/section_1_07.webp';
import images08 from '../images/section_1_08.webp';
import images09 from '../images/section_1_09.webp';
import section01 from '../images/section_2_06.webp';
import section02 from '../images/section_2_07.webp';
import section03 from '../images/section_2_08.webp';
import section04 from '../images/section_2_09.webp';
import section05 from '../images/section_2_10.webp';
import section06 from '../images/section_2_01.webp';
import section07 from '../images/section_2_02.webp';
import section08 from '../images/section_2_03.webp';
import section09 from '../images/section_2_04.webp';
import section10 from '../images/section_2_05.webp';
import section306 from '../images/section_3_06.webp';
import section305 from '../images/section_3_05.webp';
import section304 from '../images/section_3_04.webp';
import section303 from '../images/section_3_03.webp';
import section302 from '../images/section_3_02.webp';
import section301 from '../images/section_3_01.webp';
import section401 from '../images/section_4_01.webp';
import section402 from '../images/section_4_02.webp';
import section403 from '../images/section_4_03.webp';
import section404 from '../images/section_4_04.webp';
import "./Pizza.css";
gsap.registerPlugin(ScrollTrigger);


const Pizza = () => {
    const section_1_01 = useRef(null);

    let tl = gsap.timeline();

    useEffect(() => {
        let onionsS1 = section_1_01.current;
        tl.from(onionsS1, {y: -80, x: -100, duration: 1, scrollTrigger: {
            trigger:".section_1_01",
            start: "top top",
            endTrigger: ".first-section",
            ease: Power3.easeInOut,
            scrub: true,
            pin: ".first-section"
            // toggleActions: "play pause none reverse",
            // pinnedContainer:".first-section"
            
        }})
        tl.from('.section_1_02', {y: -90, x: -200, duration: 1, scrollTrigger: {
            trigger:".section_1_01",
            start: "top top",
            endTrigger: ".first-section",
            ease: Power3.easeInOut,
            scrub: true,
            
        }})
        tl.from('.section_1_03', {y: -40, x: -150, duration: 1, scrollTrigger: {
            trigger:'.section_1_01',
            start: "top top",
            position:"relative",
            endTrigger: ".first-section",
            ease: Power3.easeInOut,
            scrub: true,           
        }})
        tl.from('.section_1_04', {y: -50, x: -200, duration: 1, scrollTrigger: {
            trigger:'.section_1_01',
            start: "top top",
            endTrigger: ".first-section",
            ease: Power3.easeInOut,
            scrub: true,
        }})
        tl.from('.section_1_05', {y: -210, x: -320, duration: 1, scrollTrigger: {
            trigger:'.section_1_01',
            start: "top top",
            endTrigger: ".first-section",
            ease: Power3.easeInOut,
            scrub: true,
        }})
        tl.from('.section_1_06', {y: -50, x: -240, duration: 1, scrollTrigger: {
            trigger:'.section_1_01',
            start: "top top",
            endTrigger: ".first-section",
            ease: Power3.easeInOut,
            scrub: true,
        }})
        tl.from('.section_1_07', {y: 3, x: -300, duration: 1, scrollTrigger: {
            trigger:'.section_1_01',
            start: "top top",
            endTrigger: ".first-section",
            ease: Power3.easeInOut,
            scrub: true,
        }})
        tl.from('.section_1_08', {y: 60, x: -200, duration: 1, scrollTrigger: {
            trigger:'.section_1_01',
            start: "top top",
            endTrigger: ".first-section",
            ease: Power3.easeInOut,
            scrub: true,
        }})
        tl.from('.section_1_09', {y: 40, x: -150, duration: 1, scrollTrigger: {
            trigger:'.section_1_01',
            start: "top 2",
            endTrigger: ".first-section",
            ease: Power3.easeInOut,
            scrub: true,
        }})
    

    }, )
    //** End of section 1 animation **/ 

//** Beging of section 2 animation */ 
    useEffect(() => {
        tl.from(".top",{ 
            height: "50%",
            ease: "none",
            stagger: 0.5,
            scrollTrigger:{
            trigger:".second-section",
            start: "top top",
            end: "+=290",
            // markers: {startColor: "green", endColor: "red", fontSize: "18px"},
            scrub: true,
            pin: ".second-section"
            
        }

        })
    })
    //** End of section 2 animation **/ 

    //** Beging of section 3 animation **/ 
    useEffect(() => {
        tl.to(".section_3_01",{ 
            y: -180,
            ease: "Power3.easeInOut",
            duration: 4,
            stagger: 0.5,
            scrollTrigger:{
            trigger:".third-section",
            start: "top top",
            end: "+=200",
            scrub: true,
            pin: ".third-section"
        }
        })
        tl.to(".section_3_02",{ 
            y: -150,
            ease: "Power3.easeInOut",
            duration: 4,
            stagger: 0.5,
            scrollTrigger:{
            trigger:".third-section",
            start: "top top",
            end: "+=200",
            scrub: true,
            pin: ".third-section"
        }
        })
        tl.to(".section_3_03",{ 
            y: -100,
            ease: "Power3.easeInOut",
            duration: 4,
            stagger: 0.5,
            scrollTrigger:{
            trigger:".third-section",
            start: "top top",
            end: "+=200",
            scrub: true,
            pin: ".third-section"
        }
        })
        tl.to(".section_3_04",{ 
            y: 0,
            ease: "Power3.easeInOut",
            duration: 4,
            stagger: 0.5,
            scrollTrigger:{
            trigger:".third-section",
            start: "top top",
            end: "+=200",
            scrub: true,
            pin: ".third-section"
        }
        })
        tl.to(".section_3_05",{ 
            y: 100,
            ease: "Power3.easeInOut",
            duration: 4,
            stagger: 0.5,
            scrollTrigger:{
            trigger:".third-section",
            start: "top top",
            end: "+=200",
            scrub: true,
            pin: ".third-section"
        }
        })
        tl.to(".section_3_06",{ 
            y: 180,
            ease: "Power3.easeInOut",
            duration: 4,
            stagger: 0.5,
            scrollTrigger:{
            trigger:".third-section",
            start: "top top",
            end: "+=200",
            scrub: true,
            pin: ".third-section"
        }
        })
    })
    //** End of section 3 animation **/ 

    //** Beging of section 4 animation **/ 

    useEffect(() => {
        tl.to(".section_4_01",{ 
            autoAlpha: 1,
            duration: 1,
            stagger: 0.2,
            scrollTrigger:{
            trigger:".section_4_01",
            start: "top top",
            end: "bottom bottom",
            // markers: {startColor: "green", endColor: "red", fontSize: "10px"},
            scrub: true,
            pin: ".forth-section"       
        }

        })
        .from(".section_4_02", {
            autoAlpha: 1,
            duration: 4,
            stagger: 0.4,
            delay: 8,
            scrollTrigger:{
                trigger:".section_4_02",
                start: "top top",
                scrub: true,
                end:"+=650",
                // markers: {startColor: "green", endColor: "red", fontSize: "10px"}
            }
        }, "-=2")
        .from(".section_4_03", {
            autoAlpha: 0,
            delay: 6,
            duration: 6,
            stagger: 0.6,
            scrollTrigger:{
                trigger:".section_4_03",
                start: "top bottom",
                duration: 6,
                scrub: true,
                end:"+=700",
                // markers: {startColor: "green", endColor: "red", fontSize: "10px"}
            }
        })
        .from(".section_4_04", {
            autoAlpha: 0,
            stagger: 0.8,
            duration: 6, 
            scrollTrigger:{
                trigger:".section_4_04",
                start: "top top",
                delay: 4,
                duration: 1,
                end:"+=750",
                scrub: true,
                // markers: {startColor: "green", endColor: "red", fontSize: "10px"}
            }
        })
    })

    return ( 
    <React.Fragment>
        <section className="first-section">
            <h2>Bring Your Site to life with Animation<br />Scroll down slowly</h2>
            <div className="images-wrapper">
                <img className="section_1_bg" src={imagesBg} alt="bg" />
                <div className="ingredient-images">
                    <img ref={section_1_01} className="section_1_01" src={images01} alt="01" />
                    <img className="section_1_02" src={images02} alt="02" />
                    <img className="section_1_03" src={images03} alt="03" />
                    <img className="section_1_04" src={images04} alt="04" />
                    <img className="section_1_05" src={images05} alt="05" />
                    <img className="section_1_06" src={images06} alt="06" />
                    <img className="section_1_07" src={images07} alt="07" />
                    <img className="section_1_08" src={images08} alt="08" />
                    <img className="section_1_09" src={images09} alt="09" />
                </div>
            </div>
        </section>
        <section className="second-section">
            <h1>Draw Attention Where You Want it Most</h1>
            <p>A great animation effect is impossible to ignore.</p>
            <div className="images-wrapper bottom">
                <div className="image-container">
                <img className="section_2_06" src={section01} alt="201" />
                </div>
                <div className="image-container">
                <img className="section_2_07" src={section02} alt="202" />
                </div>
                <div className="image-container">
                <img className="section_2_08" src={section03} alt="203" />
                </div>
                <div className="image-container">
                <img className="section_2_09" src={section04} alt="204" />
                </div>
                <div className="image-container">
                <img className="section_2_10" src={section05} alt="205" />
                </div>
            </div>
            <div className="images-wrapper top">
                <div className="image-container">
                <img className="section_2_01" src={section06} alt="206" />
                </div>
                <div className="image-container">
                <img className="section_2_02" src={section07} alt="207" />
                </div>
                <div className="image-container">
                <img className="section_2_03" src={section08} alt="208" />
                </div>
                <div className="image-container">
                <img className="section_2_04" src={section09} alt="209" />
                </div>
                <div className="image-container">
                <img className="section_2_05" src={section10} alt="210"/>
                </div>
            </div>
        </section>
        <section className="third-section">
            <h1>Animate Anything You Want</h1>
            <p>Make your mouth drooling, with our delicuos animated pizza & more.</p>
            <div className="images-wrapper">
                <img className="section_3_06" src={section306} alt="306"/>
                <img className="section_3_05" src={section305} alt="305"/>
                <img className="section_3_04" src={section304} alt="304" />
                <img className="section_3_03" src={section303} alt="303"/>
                <img className="section_3_02" src={section302} alt="302"/>
                <img className="section_3_01" src={section301} alt="301"/>
            </div>
        </section>
    <section className="forth-section">
      <h1>This site was Baked with React and Gsap Animation</h1>
      <p>With so many different effects, the possibilities are endless.</p>
      <div className="images-wrapper">
        <img className="section_4_01" src={section401} alt="401" />
        <img className="section_4_02" src={section402} alt="402"/>
        <img className="section_4_03" src={section403} alt="403"/>
        <img className="section_4_04" src={section404} alt="404"/>
      </div>
    </section>
    <section className="footer">
        <div className='left'>
            <h4>© 2022 O.D Pizza Nation Special Thanks Dev.V, the possibilities are endless.</h4>     
        </div>
        <div className='right'>
            <form className='subform'>
            <input type="text" /><button>Subscrib</button>
            </form>
        </div>
      
    </section>
    </React.Fragment>
     );
}
 
export default Pizza;