import css from './TopCollegesForm.module.css'
import FindAnimation from '../../../src/lotties/search.json'
import Lottie from 'lottie-react';

const TopCollegesForm = () => {
    return (
        <div className={css.container}>
            <Lottie className={css.search_animation} animationData={FindAnimation} />
            <div>
                <h1>Find <span>top colleges</span> you may get</h1>
                <p className={css.help_txt}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                </p>
                <div className={css.search}>
                    <input
                        placeholder='Enter your JEE Mains Rank' />
                    {/* <span className={`material-symbols-outlined ${css.arrow_btn}`}>
                        arrow_circle_right
                    </span> */}
                </div>
            </div>
        </div>
    )
}

export default TopCollegesForm