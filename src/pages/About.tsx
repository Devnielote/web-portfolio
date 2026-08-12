import WorkExperienceComponent from "../components/WorkExperienceComponent";
import AboutMeComponent from "../components/AboutMeComponent";
import SkillsetAndInterestComponent from "../components/SkillsetAndInterestComponent";
import HeroComponent from "../components/HeroComponent";

export default function About() {
  return (
    <section className="mt-20 px-5">
      <div className="mt-30 text-lg md:px-10">
        <HeroComponent />
        <AboutMeComponent />
        <SkillsetAndInterestComponent />
        <WorkExperienceComponent />{" "}
      </div>
    </section>
  );
}
