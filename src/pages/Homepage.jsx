import FAQ from "../components/FAQ/FAQ";
import Hero from "../components/Hero/Hero";
import Introduction from "../components/Introduction/Introduction";
import Plans from "../components/Plans/Plans";
import TopCollegesForm from "../components/TopCollegesForm/TopCollegesForm";

const Homepage = () => {
  return (
    <>
      <Hero />
      <TopCollegesForm />
      <Introduction />
      <Plans />
      <FAQ />
    </>
  );
};

export default Homepage;
