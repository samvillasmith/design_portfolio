import "./hero.css";

const Hero = () => {
    return ( 
        <div className="hero">
            {/* Hero Section */ }
            <div className="heroSection left">
                <h1 className="heroTitle">Howdy!<br/><span>I&apos;m Sam</span></h1>
                <div className="qualifications">
                    <h2>UX/UI Designer <br/> Full-Stack Developer</h2>
                    <p>Based in the Texas Panhandle, I design and develop beautiful, user-friendly websites, web applications and mobile applications. I am passionate about crafting user-centric experiences and I am always looking to learn new things.</p>
                </div>
                {/* Technologies Component */ }
                <div className="technologies">
                    <img src="https://img.icons8.com/color/48/000000/figma.png" alt="Figma"/>
                    <img src="../../../public/balsamiq.png" alt="Balsamiq" height="48px" width="48px"/>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/canva.png" alt="canva"/>
                    <img width="48" height="48" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-react-social-media-tanah-basah-glyph-tanah-basah.png" alt="external-react-social-media-tanah-basah-glyph-tanah-basah"/>
                    <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-light-tal-revivo.png" alt="external-redux-an-open-source-javascript-library-for-managing-application-state-logo-light-tal-revivo"/>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/typescript.png" alt="typescript"/>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/nextjs.png" alt="nextjs"/>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>
                    <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/prisma-orm.png" alt="prisma-orm"/>
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/mysql.png" alt="mysql"/>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/FFFFFF/mongo-db.png" alt="mongo-db"/>
                    <img width="48" height="48" src="https://img.icons8.com/material/48/FFFFFF/amazon-web-services.png" alt="amazon-web-services"/>
                </div>
            </div>
            {/* Scroll SVG */ }
            <a href="#services" className="scroll">
                <img 
                    src="../../../public/samvprofile-removebg.png" 
                    height="900px" 
                    width="900px"
                    style={{ display: 'block', marginTop: '100px', marginRight: '10px', marginLeft: '260px' }}
                />
                </a>
                
            <div className="heroSection right">
                {/* Follow Component */ }
                <div className="follow">
                    <div className="followTextContainer">
                        <div className="followText">FOLLOW ME</div>
                    </div>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin"/>
                        </a>
                        <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"/>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="youtube-play"/>
                        </a>
                       
                    </div>
                    <img src="../../../public/certificate.jpeg" alt="certificate" width="40%"/>
                    {/* Certificate Component */ }
                    <div className="certificate">
                        <div className="certText">
                            GOOGLE UX DESIGN 
                            <br/>
                            FOUNDATIONS CERTIFIED
                        </div>
                    </div>
                    {/* Contact Component */ }
                    <a href="#contact">
                        <div className="contactButton">
                        <svg viewBox="0 0 200 200" width="150" height="150">
                            <circle cx="100" cy="100" r="90" fill="navy" />
                            <path
                                id="innerCirclePath"
                                fill="none"
                                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            />
                            <text className="circleText">
                                <textPath href="#innerCirclePath" fill="white">Hire Now •</textPath>
                            </text>
                            <text className="circleText">
                                <textPath href="#innerCirclePath" startOffset="44%" fill="white">
                                Contact Me •
                                </textPath>
                            </text>
                            </svg>
                            <div className="arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="50"
                                height="50"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                            >
                                <line x1="6" y1="18" x2="18" y2="6" />
                                <polyline points="9 6 18 6 18 15" />
                            </svg>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
     );
}
 
export default Hero;