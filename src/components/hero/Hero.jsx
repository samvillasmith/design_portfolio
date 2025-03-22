import "./hero.css";
import { useEffect, useRef, useState } from 'react'; 
import { motion } from 'framer-motion';

const techVariants = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        }
    }
}

const followVariants = {
    initial: {
        y: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 3,
            staggerChildren: 0.2
        }
    }
}

// Typing animation component
const TypingText = ({ text, speed = 0.05, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
      let timeout;
      let currentIndex = 0;
      
      const startTyping = () => {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
          
          if (currentIndex < text.length) {
            startTyping();
          }
        }, speed * 1000);
      };
      
      // Initial delay before starting
      const delayTimeout = setTimeout(() => {
        startTyping();
      }, delay);
      
      return () => {
        clearTimeout(timeout);
        clearTimeout(delayTimeout);
      };
    }, [text, speed, delay]);
    
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {displayText}
      </motion.span>
    );
  };

const Hero = () => {
    // State to track image visibility
    const [isProfileVisible, setIsProfileVisible] = useState(true);
    // Reference to the hero section element
    const heroRef = useRef(null);

    // Function to handle scroll behavior
    const handleScroll = () => {
        // Only apply this behavior on mobile screens
        if (window.innerWidth <= 768) {
            if (heroRef.current) {
                const heroRect = heroRef.current.getBoundingClientRect();
                
                // Check if hero section is still in viewport
                if (heroRect.bottom <= 0) {
                    // User has scrolled past the hero section
                    setIsProfileVisible(false);
                } else {
                    // Hero section is still visible
                    setIsProfileVisible(true);
                }
            }
        } else {
            // On larger screens, always show the profile
            setIsProfileVisible(true);
        }
    };

    // Set up scroll and resize event listeners
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        
        // Initial check
        handleScroll();
        
        // Clean up event listeners when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return ( 
        <div className="hero" ref={heroRef}>
            {/* Hero Section */}
            <div className="heroSection left">
                <motion.h1  initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 1}}className="heroTitle">Need an Expert?<br/><span>I&apos;m Sam</span></motion.h1>
                <motion.div className="qualifications" variants={techVariants} initial="initial" animate="animate">
                    <motion.h2 variants={techVariants}>UX/UI Designer <br/> Full-Stack Developer</motion.h2>
                    <motion.p variants={techVariants}>Based in the Texas Panhandle, I design and develop beautiful, user-friendly websites, web applications and mobile applications. I am passionate about crafting user-centric experiences and I am always looking to learn new things.</motion.p>
                </motion.div>
                {/* Technologies Component */}
                <motion.div variants = {techVariants} initial="initial" animate="animate" className="technologies">
                    <motion.img variants={techVariants} src="https://img.icons8.com/color/48/000000/figma.png" alt="Figma"/>
                    <motion.img variants={techVariants} src="../../../public/balsamiq.png" alt="Balsamiq" height="48px" width="48px"/>
                    <motion.img variants={techVariants} width="48" height="48" src="https://img.icons8.com/fluency/48/canva.png" alt="canva"/>
                    <motion.img variants={techVariants} width="48" height="48" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/external-react-social-media-tanah-basah-glyph-tanah-basah.png" alt="external-react-social-media-tanah-basah-glyph-tanah-basah"/>
                    <motion.img variants={techVariants} width="48" height="48" src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-light-tal-revivo.png" alt="external-redux-an-open-source-javascript-library-for-managing-application-state-logo-light-tal-revivo"/>
                    <motion.img variants={techVariants} width="50" height="50" src="https://img.icons8.com/ios-filled/50/typescript.png" alt="typescript"/>
                    <motion.img variants={techVariants} width="48" height="48" src="https://img.icons8.com/fluency/48/nextjs.png" alt="nextjs"/>
                    <motion.img variants={techVariants} width="48" height="48" src="https://img.icons8.com/color/48/tailwindcss.png" alt="tailwindcss"/>
                    <motion.img variants={techVariants} width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/prisma-orm.png" alt="prisma-orm"/>
                    <motion.img variants={techVariants} width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/mysql.png" alt="mysql"/>
                    <motion.img variants={techVariants} width="48" height="48" src="https://img.icons8.com/color/48/FFFFFF/mongo-db.png" alt="mongo-db"/>
                    <motion.img variants={techVariants} width="48" height="48" src="https://img.icons8.com/material/48/FFFFFF/amazon-web-services.png" alt="amazon-web-services"/>
                </motion.div>
                        {/* Scroll SVG */}
                    
                </div>
            <div className="bg-shape">
            {isProfileVisible && (
                <motion.a variants={techVariants} initial="initial" animate="animate" href="#services" className="scroll">
                    <img 
                        src="../../../public/samvprofile-removebg.png" 
                        height="900px" 
                        width="900px"
                        style={{ display: 'block', marginTop: '100px', marginRight: '10px', marginLeft: '260px' }}
                    />
                </motion.a>
            )}
            </div>
                
            <div className="heroSection right">
                {/* Follow Component */}
                    <motion.div 
                    variants={followVariants} 
                    initial="initial" 
                    animate="animate" 
                    className="follow"
                    >
                    <div className="followTextContainer">
                        <div className="followText">FOLLOW</div>
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
                    </motion.div>
                <motion.img animate={{opacity: [0,1]}} transition={{duration: 2}} src="../../../public/certificate.jpeg" alt="certificate" width="40%"/>
                {/* Certificate Component */}
                <div className="certificate">
                    <div className="certText">
                        <TypingText text="GOOGLE UX DESIGN" speed={0.07} delay={500} />
                        <br/>
                        <TypingText text="FOUNDATIONS CERTIFIED" speed={0.07} delay={1800} />
                    </div>
                    </div>



{/* Contact Component */}
<motion.a 
  href="#contact" 
  animate={{
    x:[200, 0],
    opacity: [0, 1]
  }}
  transition={{
    duration: 3
  }}
>
  <div style={{ position: 'relative', width: '150px', height: '150px' }}>
    {/* Rotating circle */}
    <motion.div 
      animate={{rotate: [0, 360]}} 
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }} 
      className="contactButton"
      style={{ width: '100%', height: '100%' }}
    >
      <svg viewBox="0 0 200 200" width="150" height="150">
        <circle cx="100" cy="100" r="90" fill="navy" />
        <path
          id="innerCirclePath"
          fill="none"
          d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
        />
        <text className="circleText">
          <textPath href="#innerCirclePath" fill="white">Hire  •</textPath>
        </text>
        <text className="circleText">
          <textPath href="#innerCirclePath" startOffset="44%" fill="white">
            Contact Me •
          </textPath>
        </text>
      </svg>
    </motion.div>
    
    {/* Non-rotating arrow that stays in place with correct direction */}
    <div 
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        pointerEvents: 'none'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 5 5 12 12 19" />
        </svg>
    </div>
  </div>
</motion.a>

            </div>
        </div>
    );
}
 
export default Hero;