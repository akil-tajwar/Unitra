import css from "./RequestCallBack.module.css"
import DataStructure from '../../lotties/database.json'
import Lottie from "lottie-react";

const RequestCallBack = () => {
    return (
        <div className={css.container}>
            <div className={css.anim}>
                <Lottie animationData={DataStructure} />
            </div>
            <div>
                <form action="">
                    <h2>Inquire About the Course</h2>
                    <h3>Request a callback</h3>
                    <input placeholder="Full Name" type="text" />
                    <div className={css.countryPhone}>
                        <select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <input placeholder="Phone Number" type="text" />
                    </div>
                    <input placeholder="Email ID" type="text" />
                    <div className={css.dateTime}>
                        <select name="" id="">
                            <option value="Time"></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default RequestCallBack;