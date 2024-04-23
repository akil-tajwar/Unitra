import CourseBulletPoints from "../components/CourseBulletPoints/CourseBulletPoints";
import OurMentors from "../components/OurMentors/OurMentors";
import RequestCallBack from "../components/RequestCallBack/RequestCallBack";
import Services from "../components/Services/Services";

const Courses = () => {
    return (
        <div>
            <RequestCallBack/>
            <CourseBulletPoints/>
            <Services/>
            <OurMentors/>
        </div>
    );
};

export default Courses;