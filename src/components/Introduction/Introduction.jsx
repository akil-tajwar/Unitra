import css from './Introduction.module.css'
import { FaCheck } from "react-icons/fa";

const Introduction = () => {
    return (
        <div className={css.intro_section}>
            <div className={css.container}>
                <h1>How <span>College Mitra</span> helps?</h1>
                <div className={css.intro_card_box}>
                    <div className={css.intro_card1}>
                        <h2>Get to know yourself</h2>
                        <ul>
                            <li><FaCheck className={css.icons}/><p>Areas of Interest, Aptitude Level and Personality Type</p></li>
                            <li><FaCheck className={css.icons}/><p>Strengths & weaknesses</p></li>
                            <li><FaCheck className={css.icons}/><p>16-page in-depth career report</p></li>
                        </ul>
                    </div>
                    <div className={css.intro_card2}>
                        <h2>Guidance and Support</h2>
                        <ul>
                            <li><FaCheck className={css.icons}/><p>Industry Best Counselors</p></li>
                            <li><FaCheck className={css.icons}/><p>Experience across Various Domains</p></li>
                            <li><FaCheck className={css.icons}/><p>Personalised 1-on-1 Counseling to help find the right fit</p></li>
                        </ul>
                    </div>
                    <div className={css.intro_card3}>
                        <h2>Career Encyclopedia</h2>
                        <ul>
                            <li><FaCheck className={css.icons}/><p>Explore 550+ Career Paths</p></li>
                            <li><FaCheck className={css.icons}/><p>Career Dashboard to Map Progress</p></li>
                            <li><FaCheck className={css.icons}/><p>List of Colleges, Entrance Exams and Scholarships</p></li>
                        </ul>
                    </div>
                    <div className={css.intro_card4}>
                        <h2>Discover your path</h2>
                        <ul>
                            <li><FaCheck className={css.icons}/><p>Uncover your academic journey.</p></li>
                            <li><FaCheck className={css.icons}/><p>Find out more before you decide.</p></li>
                            <li><FaCheck className={css.icons}/><p>Match your interests effortlessly.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction