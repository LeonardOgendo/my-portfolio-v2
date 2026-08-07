import React, { useState, useEffect } from "react";
import profilePhoto from '../../assets/portfolio-user.png';
import TopPerformerCard from "../../shared/components/TopPerformerCard";
import SecureCodeCard from "../../shared/components/SecureCodeCard";
import './styles.css';

const AboutMe = () => {

    const miniRole = 'Engineer';

    const aboutMe = {
        // PartA: min 20 words - max 22 words
        partA: 
            `I design, build, and secure modern applications, APIs, and software systems with security 
            integrated throughout the software development lifecycle.`
        ,
        partB: 
            `With practical experience in Secure Software Engineering, Application Security, and Security Testing & Automation, I:`
        ,
        bulletOne: `Design secure systems from development through to deployment`,
        bulletTwo: `Embed security into CI/CD pipelines through automation`,
        bulletThree: `Validate web and API vulnerabilities through manual and automated security testing`,
        bulletFour: `Improve detection and response capabilities through security monitoring and automation`
    };

    const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleMediaChange = (e) => {
            setIsMobile(e.matches);
        };

        // Set initial value
        setIsMobile(mediaQuery.matches);

        // Listen to changes
        mediaQuery.addEventListener("change", handleMediaChange);

        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);

    return (
        <div id="about" className="section-body">
           
           {!isMobile ? (
            <div className="about-container">
                 <div className="vertical-line"></div>
                <div className="about-content-wrapper">
                    <TopPerformerCard />
                    <SecureCodeCard />
                    <div className="photo-container">
                        <span className="work-st">{ miniRole }</span>
                        <img src={profilePhoto} alt="profile" />
                    </div>
                    <div className="readme">
                        <h2>Hi, I'm</h2>
                        <div id="underline"></div>
                        <p className="pro-name">Leonard Ogendo</p>
                        <p className="pro-title">Secure Software Engineer | Application Security</p>

                        <div className="pro-desc">
                            { aboutMe.partA } <br /> <br />
                            { aboutMe.partB }
                        
                            <ul>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletOne}</li>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletTwo}</li>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletThree}</li>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletFour}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            ): (
                <div className="about-container">
                    <div style={{ display: 'flex' }}>
                        <div className="vertical-line"></div>
                        <div className="photo-container">
                            <span className="work-st">{ miniRole }</span>
                            <img src={profilePhoto} alt="profile" />
                        </div>
                    </div>
                    
                    <div className="about-content-wrapper">
                        <TopPerformerCard />
                        <SecureCodeCard />
                        <div className="readme">
                            <div id="underline"></div>
                            <p className="pro-name">Leonard Ogendo</p>
                            <p className="pro-title">Secure Software Engineer | Application Security</p>

                            <div className="pro-desc">
                            { aboutMe.partA } <br /> <br />
                            { aboutMe.partB }
                        
                            <ul>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletOne}</li>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletTwo}</li>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletThree}</li>
                                <li><span style={{ color: '#bb5336ff' }}>✪</span> {aboutMe.bulletFour}</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AboutMe