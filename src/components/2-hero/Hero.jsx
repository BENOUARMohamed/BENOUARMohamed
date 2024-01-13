// @ts-nocheck

import "./hero.css";
import Lottie from "lottie-react";
import pc from "../../../public/animation/pc.json";
import { motion } from "framer-motion";
import { useRef } from "react";
const Hero = () => {
    const lottieRef = useRef

    return (
        <section className="hero flex" >
            <div className="left-section">
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{ damping: 6, type: "spring", stiffness: 100 }}
                        src="B.png" className="avatar" alt="" />
                    <div className="name">Mohamed BENOUAR</div>
                    <div className="icon-verified" />
                </div>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="title">
                    Embedded System Engineer
                </motion.h1>


                <p className="sub-title">
                    I'm BENOUAR Mohamed, an embedded systems engineer and programmer skilled at seamlessly integrating hardware and software for innovative solutions. Expert in designing robust systems and crafting flawless code for the technological future.
                </p>
                <div className="all-icons flex">
                    <li><a href='https://twitter.com/BENOUARMohamed4'><div className="icon icon-x"></div></a></li>
                    <li><a href='https://www.instagram.com/med_codes/'><div className="icon icon-instagram"></div></a></li>
                    <li><a href='https://github.com/BENOUARMohamed'><div className="icon icon-github"></div></a></li>
                    <li><a href='https://www.linkedin.com/in/benouarmohammed/'><div className="icon icon-linkedin2"></div></a></li>
                    <li><a href='https://t.me/mohbnr'><div className="icon icon-telegram"></div></a></li>
                    <form action="Work CV of Mohamed_BENOUAR.pdf">
                        <button className="button-cv flex">
                            Download CV <i className="icon-document-text"></i>

                        </button>
                    </form>
                </div>
            </div>

            <div className="right-section-animation  ">
                <Lottie
                    className="pc"
                    lottieRef={lottieRef}
                    onLoadedImages={() => {
                        lottieRef.current.setSpeed(0.5);
                    }}
                    animationData={pc} />
            </div>
        </section>
    );
}
export default Hero;
