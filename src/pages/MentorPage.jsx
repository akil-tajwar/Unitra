import { useEffect, useState } from "react";
import MentorCard from "../components/Mentor/MentorCard";
import css from './MentorPage.module.css'
import { Link } from "react-router-dom";

function MentorPage() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/mentors");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.page_title}>Meet Our <span>Mentors</span></h1>
      <div className={css.filter_box}>
        <span>All Mentors</span>
      </div>
      <div className={css.cards_container}>
        {mentors?.map((mentor) => (
          <Link to={mentor.username}><MentorCard key={mentor.id} mentor={mentor} /></Link>
        ))}
      </div>
    </div>
  );
}

export default MentorPage;
