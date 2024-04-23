import { TypeAnimation } from 'react-type-animation';
import css from './Hero.module.css';
import Lottie from 'lottie-react';
import BannerAnimation from '../../../src/lotties/lottie.json'

const Hero = () => {
    return (
        <div className={css.hero_container}>
            <div className={css.left_box}>
                {/* <div class={css.hero_lg_text}>మీ ర్యాంక్ కోసం ఉత్తమ కళాశాలను ఎంచుకోండి</div> */}
                <TypeAnimation
                    sequence={[
                        'Choose the best college for your rank',
                        3000,
                        'మీ ర్యాంక్ కోసం ఉత్తమ కళాశాలను ఎంచుకోండి',
                        3000,
                    ]}
                    className={css.hero_lg_text}
                    wrapper="div"
                    style={{ 'zIndex': '1' }}
                    speed={10}
                    deletionSpeed={25}
                    repeat={Infinity}
                    omitDeletionAnimation={false}
                    cursor={true}
                    preRenderFirstString={true}
                />
                <p className={css.hero_sm_text}>
                    Our team is equiped with detailed information about all colleges' placement, higher study opportunities, and alumni of all colleges.
                </p>
                <button className={css.hero_btn}>
                    Get Started
                    <svg fill="currentColor" viewBox="0 0 24 24" class={css.hero_btn_icon}>
                        <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div className={css.right_box}>
            <Lottie animationData={BannerAnimation}/>
            </div>
        </div>
    );
};

export default Hero;
