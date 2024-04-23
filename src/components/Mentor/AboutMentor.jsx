import css from './AboutMentor.module.css';

function AboutMentor() {
  return (
    <div className={css.about_mentor_page}>
      <div className={css.container}>
        <div className={css.left_box}>
          <img
            className={css.mentor_img}
            src='https://topmate.io/_next/image?url=https%3A%2F%2Ftopmate-staging.s3.ap-south-1.amazonaws.com%2FkuG8DNEzjHzZTAih39LDDE.png&w=256&q=75'
            alt=''
          />
          <h2 className={css.mentor_name}>Ankit Gautam</h2>
          <p className={css.mentor_bio}>I broke into data with a non-technical background. Let me help you do the same.</p>
          <div className={css.book_btn}>Book Session</div>
        </div>
        <div className={css.right_box}>
          <h2 className={css.about_me_title}>About Me</h2>
          <p className={css.about_me}>
            From education, to sales, to operations, and eventually to data. Through my career highs and lows I've learned how to frame non-conventional backgrounds and identify transferable skills necessary to make the pivot.

            I've worked as both a Business Analyst and a Data Analyst and love the work that I do. Let's work together to get you to the next stage in your career!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMentor;
