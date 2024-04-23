import css from './OurMentors.module.css'
import mentor from '../../assets/mentor.jpg'

const OurMentors = () => {
    return (
        <div className={css.bg}>
            <div className={css.container}>
                <h3>Our Mentors</h3>
                <div className={css.mentors}>
                    <div>
                        <div>
                            <img src={mentor} alt="" />
                        </div>
                        <h3>John Doe</h3>
                        <p>Lead Teacher</p>
                        <p>Delhi University</p>
                    </div>
                    <div>
                        <div>
                            <img src={mentor} alt="" />
                        </div>
                        <h3>John Doe</h3>
                        <p>Lead Teacher</p>
                        <p>Delhi University</p>
                    </div>
                    <div>
                        <div>
                            <img src={mentor} alt="" />
                        </div>
                        <h3>John Doe</h3>
                        <p>Lead Teacher</p>
                        <p>Delhi University</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMentors;