import { GrDocumentPerformance } from 'react-icons/gr';
import css from './Services.module.css'

const Services = () => {
    return (
        <div className={css.service_container}>
            <h1>Shape Your Career The <span className={css.heighlight}>Smart Way</span></h1>
            <p>An innovative, online and affordable program where learners develop coding skills with an engaging and interactive learning experience.</p>
            <div className={css.main_services}>
                <div>
                    <div>
                        <div>
                            <GrDocumentPerformance className={css.icon} />
                            <h3>Coding</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur est facere quisquam labore aperiam? Cum libero delectus ducimus velit.</p>
                    </div>
                    <div>
                        <div>
                            <GrDocumentPerformance className={css.icon} />
                            <h3>Coding</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur est facere quisquam labore aperiam? Cum libero delectus ducimus velit.</p>
                    </div>
                    <div>
                        <div>
                            <GrDocumentPerformance className={css.icon} />
                            <h3>Coding</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur est facere quisquam labore aperiam? Cum libero delectus ducimus velit.</p>
                    </div>
                    <div>
                        <div>
                            <GrDocumentPerformance className={css.icon} />
                            <h3>Coding</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur est facere quisquam labore aperiam? Cum libero delectus ducimus velit.</p>
                    </div>
                    <div>
                        <div>
                            <GrDocumentPerformance className={css.icon} />
                            <h3>Coding</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur est facere quisquam labore aperiam? Cum libero delectus ducimus velit.</p>
                    </div>
                    <div>
                        <div>
                            <GrDocumentPerformance className={css.icon} />
                            <h3>Coding</h3>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime tenetur est facere quisquam labore aperiam? Cum libero delectus ducimus velit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;