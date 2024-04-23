import React, { useEffect } from 'react';
import css from "./plans.module.css"
import { LuArrowDown, LuArrowRight } from "react-icons/lu";
import { FaCheck, FaCheckCircle } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Plans = () => {
    return (
        <div>
            <div className={css.container}>
                <div className={css.header}>
                    <div>
                        <h3><span>Compare Programs</span> <LuArrowRight /></h3>
                    </div>
                    <div>
                        <small>basic</small>
                        <p>Know yourself</p>
                        <h2>₹ 4,999</h2>
                        <button>Enroll Now</button>
                    </div>
                    <div>
                        <small style={{ border: '1px solid green' }}>for Stream Selection</small>
                        <p>Career Path Pro</p>
                        <h2>₹ 6,999</h2>
                        <button>Enroll Now</button>
                    </div>
                    <div>
                        <small>for Long-Term Guidance</small>
                        <p>Admission Path Pro</p>
                        <h2>₹22,000</h2>
                        <button>Enroll Now</button>
                    </div>
                </div>
                <div className={css.content}>
                    <div>
                        <span>Career Exploration</span>
                        <p>Access well-researched content on 550+ careers</p>
                    </div>
                    <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                    <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                    <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                    <div>
                        <span>16 page career report</span>
                        <p>3-dimensional assessment covering 16 factors in Aptitude, Personality & Interest</p>
                    </div>
                    <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                    <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                    <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                    <div>
                        <span>Career Counseling</span>
                        <p>One-on-One Counseling session to help in understand yourself and achieve the outcome as per the opted program.</p>
                    </div>
                    <div className={css.check}>1 session</div>
                    <div className={css.check}>2 session</div>
                    <div className={css.check}>5 session</div>
                    <div>
                        <span>Live Career Class</span>
                        <p>Weekly live group class by top Industry professionals & college alumni</p>
                    </div>
                    <div className={css.check}><GoDash style={{ color: 'gray', fontWeight: 'bold' }} /></div>
                    <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                    <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                    <div>
                        <span>Chat with an expert</span>
                        <p>Support via chat for 1 year</p>
                    </div>
                    <div className={css.check}><GoDash style={{ color: 'gray', fontWeight: 'bold' }} /></div>
                    <div className={css.check}>1 year</div>
                    <div className={css.check}>1 year</div>
                    <div>
                        <span>Application form filling assistance</span>
                        <p>A maximum of 7 applicationform filling with full assistancefrom a dedicated counselor</p>
                    </div>
                    <div className={css.check}><GoDash style={{ color: 'gray', fontWeight: 'bold' }} /></div>
                    <div className={css.check}><GoDash style={{ color: 'gray', fontWeight: 'bold' }} /></div>
                    <div className={css.check}><FaCheck style={{ color: 'green' }} /></div>
                    <div className={css.outcome_title}>
                        <span className={css.title_check}><FaCheckCircle /></span>
                        <span>Outcome</span>
                    </div>
                    <div className={css.outcome}>
                        <div>
                            <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                            <p>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength</p>
                        </div>
                        <div>
                            <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                            <p>Recommendation of suitable Career Paths.</p>
                        </div>
                    </div>
                    <div className={css.outcome}>
                        <div>
                            <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                            <p>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength</p>
                        </div>
                        <div>
                            <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                            <p>Recommendation of suitable Career Paths.</p>
                        </div>
                        <div>
                            <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                            <p>Absolute clarity on your course, colleges, and backup colleges.</p>
                        </div>
                    </div>
                    <div className={css.outcome}>
                        <div>
                            <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                            <p>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength</p>
                        </div>
                        <div>
                            <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                            <p>Entire college application process including help in application form filling.</p>
                        </div>
                        <div>
                            <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                            <p>Our commitment to be there with you until you get an admission offer letter from an Indian college</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.container2}>
                <div>
                    <h3><span>Compare Programs</span> <LuArrowDown /></h3>
                    <Tabs>
                        <TabList className={css.sticky}>
                            <div className={css.tabHead}>
                                <Tab>Know Yourself</Tab>
                                <Tab className={css.tabName}>Career Path Pro</Tab>
                                <Tab>Admision Path Pro</Tab>
                            </div>
                        </TabList>

                        <div>
                            <TabPanel>
                                <div>
                                    <div>
                                        <div className={css.features}>
                                            <h3>Career Exploration</h3>
                                            <p>Access well-researched content on 550+ careers</p>
                                        </div>
                                        <div className={css.features}>
                                            <h3>Career Assessment</h3>
                                            <p>3-dimensional assessment covering 16 factors in Aptitude, Personality & Interest</p>
                                        </div>
                                        <div className={css.features}>
                                            <h3>16 page career report</h3>
                                            <p>3-dimensional assessment covering 16 factors in Aptitude, Personality & Interest</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={css.beside}>
                                            <div>
                                                <h3>Career Counseling</h3>
                                                <p style={{ border: '1px solid green,' }}>1 Session</p>
                                            </div>
                                            <p className={css.features}>one-on-one counseling session to help to understand yourself and achieve the outcome as perthe opted program.</p>
                                        </div>
                                        <div className={css.unavilable}>
                                            <div className={css.features}>
                                                <h3>Live Career Class</h3>
                                                <p>Weekly live group class by top industry professionals & college alumni.</p>
                                            </div>
                                            <div className={css.features}>
                                                <h3>Chat with an expert</h3>
                                                <p>Support via chat for 1 year.</p>
                                            </div>
                                            <div className={css.features}>
                                                <h3>Application from filing assistance</h3>
                                                <p>A maximum of 7 application form filling with full assistances from a dedicated counselor.</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className={css.phoneOutcome}>
                                            <div className={css.outcome_title}>
                                                <span className={css.title_check}><FaCheckCircle /></span>
                                                <span>Outcome</span>
                                            </div>
                                            <div className={css.phoneOutcomePoints}>
                                                <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                                                <p>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength</p>
                                            </div>
                                            <div className={css.phoneOutcomePoints}>
                                                <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                                                <p>Recommendation of suitable Career Paths.</p>
                                            </div>
                                        </div>
                                        <div className={css.plans}>
                                            <div>
                                                <h2>₹6,000</h2>
                                                <small style={{ border: '1px solid green' }}>Basic</small>
                                            </div>
                                            <div>
                                                <button>Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <div>
                                        <div className={css.features}>
                                            <h3>Career Exploration</h3>
                                            <p>Access well-researched content on 550+ careers, 25000+ Colleges, 1000+ Entrance Exams and Scholarships</p>
                                        </div>
                                        <div className={css.features}>
                                            <h3>Career Assessment</h3>
                                            <p>3-dimensional assessment covering 16 factors in Aptitude, Personality & Interest</p>
                                        </div>
                                        <div className={css.features}>
                                            <h3>16 page career report</h3>
                                            <p>Detailed report with top career recommendation</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={css.beside}>
                                            <div>
                                                <h3>Career Counseling</h3>
                                                <p style={{ border: '1px solid green,' }}>1 Session</p>
                                            </div>
                                            <p className={css.features}>one-on-one counseling session to help to understand yourself and achieve the outcome as perthe opted program.</p>
                                        </div>
                                        <div className={css.features}>
                                            <h3>Live Career Class</h3>
                                            <p>Weekly live group class by top industry professionals & college alumni.</p>
                                        </div>
                                        <div className={css.unavilable}>
                                            <div className={css.features}>
                                                <h3>Chat with an expert</h3>
                                                <p>Support via chat for 1 year.</p>
                                            </div>
                                            <div className={css.features}>
                                                <h3>Application from filing assistance</h3>
                                                <p>A maximum of 7 application form filling with full assistances from a dedicated counselor.</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className={css.phoneOutcome}>
                                            <div className={css.outcome_title}>
                                                <span className={css.title_check}><FaCheckCircle /></span>
                                                <span>Outcome</span>
                                            </div>
                                            <div className={css.phoneOutcomePoints}>
                                                <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                                                <p>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength</p>
                                            </div>
                                            <div className={css.phoneOutcomePoints}>
                                                <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                                                <p>Recommendation of suitable Career Paths.</p>
                                            </div>
                                            <div className={css.phoneOutcomePoints}>
                                                <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                                                <p>Absolute clarity on your course, colleges and backup colleges</p>
                                            </div>
                                        </div>
                                        <div className={css.plans}>
                                            <div>
                                                <h2>₹6,999</h2>
                                                <small style={{ border: '1px solid green' }}>for Stream Selection</small>
                                            </div>
                                            <div>
                                                <p>Ideal for you</p>
                                                <button>Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <div>
                                        <div className={css.features}>
                                            <h3>Career Exploration</h3>
                                            <p>Access well-researched content on 550+ careers, 25000+ Colleges, 1000+ Entrance Exams and Scholarships</p>
                                        </div>
                                        <div className={css.features}>
                                            <h3>Career Assessment</h3>
                                            <p>3-dimensional assessment covering 16 factors in Aptitude, Personality & Interest</p>
                                        </div>
                                        <div className={css.features}>
                                            <h3>16 page career report</h3>
                                            <p>Detailed report with top career recommendation</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={css.beside}>
                                            <div>
                                                <h3>Career Counseling</h3>
                                                <p style={{ border: '1px solid green,' }}>1 Session</p>
                                            </div>
                                            <p className={css.features}>one-on-one counseling session to help to understand yourself and achieve the outcome as perthe opted program.</p>
                                        </div>
                                        <div className={css.features}>
                                            <h3>Live Career Class</h3>
                                            <p>Weekly live group class by top industry professionals & college alumni.</p>
                                        </div>
                                        <div className={css.unavilable}>
                                            <div className={css.features}>
                                                <h3>Chat with an expert</h3>
                                                <p>Support via chat for 1 year.</p>
                                            </div>
                                            <div className={css.features}>
                                                <h3>Application from filing assistance</h3>
                                                <p>A maximum of 7 application form filling with full assistances from a dedicated counselor.</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className={css.phoneOutcome}>
                                            <div className={css.outcome_title}>
                                                <span className={css.title_check}><FaCheckCircle /></span>
                                                <span>Outcome</span>
                                            </div>
                                            <div className={css.phoneOutcomePoints}>
                                                <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                                                <p>Absolute clarity on your Areas of interest, Aptitude Level, Personality Type, and your Strength</p>
                                            </div>
                                            <div className={css.phoneOutcomePoints}>
                                                <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                                                <p>Entire college application process including hellp in application form filling.</p>
                                            </div>
                                            <div className={css.phoneOutcomePoints}>
                                                <span className={css.check}><FaCheck style={{ color: '#0095ff' }} /></span>
                                                <p>Absolute clarity on your course, colleges and backup colleges</p>
                                            </div>
                                        </div>
                                        <div className={css.plans}>
                                            <div>
                                                <h2>₹22,000</h2>
                                                <small style={{ border: '1px solid green' }}>for Stream Selection</small>
                                            </div>
                                            <div>
                                                <p>@No-cost EMI</p>
                                                <button>Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default Plans;