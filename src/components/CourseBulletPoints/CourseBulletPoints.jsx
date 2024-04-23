import { IoMdStopwatch } from "react-icons/io";
import css from "./CourseBulletPoints.module.css"
import { GrNotes } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import { BiMessageDots } from "react-icons/bi";

const CourseBulletPoints = () => {
    return (
        <div className={css.bg}>
            <div className={css.container}>
                <div>
                    <IoMdStopwatch className={css.icon} />
                    <h1>100+</h1>
                    <h3>HOURS</h3>
                </div>
                <div>
                    <GrNotes className={css.icon} />
                    <h1>25+</h1>
                    <h3>LECTURES</h3>
                </div>
                <div>
                    <LuBrainCircuit className={css.icon} />
                    <h1>200+</h1>
                    <h3>PROBLEMS</h3>
                </div>
                <div>
                    <BiMessageDots className={css.icon} />
                    <h1>24*7</h1>
                    <h3>SUPPORT</h3>
                </div>
            </div>
        </div>
    );
};

export default CourseBulletPoints;