import {useState} from 'react';

import styles from './hero.module.css';
import DataBiz from '../../assets/images/client-databiz.svg';
import Audiophile from '../../assets/images/client-audiophile.svg';
import Maker from '../../assets/images/client-maker.svg';
import Meet from '../../assets/images/client-meet.svg';
import HeroImg from '../../assets/images/image-hero-desktop.png';
import HeroImgMobile from '../../assets/images/image-hero-mobile.png';


export default function Hero() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 940);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth <= 940);
    });

    return(
        <section className={styles.hero}>
            <div className="section-container">
                <div className={styles.heroCol}>
                    <div className={styles.heroText}>
                        <h1 className="titleSize">Make remote work</h1>
                        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                        <button className={styles.ctaBtn}>Learn More</button>
                    </div>

                    <div className={styles.awards}>
                        <img src={DataBiz} className={styles.award} />
                        <img src={Audiophile} className={styles.award} />
                        <img src={Meet} className={styles.award} />
                        <img src={Maker} className={styles.award} />
                    </div>
                </div>

                <div className={styles.heroCol}>
                    <img src={!isMobile ? HeroImg : HeroImgMobile} className={styles.heroImg} />
                </div>
            </div>
            
        </section>
    )
}