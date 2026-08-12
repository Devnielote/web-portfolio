import IntererstsComponent from "./shared/InterestsComponent";

export default function SkillsetAndInterestComponent() {
  return (
    <div className="relative flex flex-col mt-50 text-left lg:flex-row">
      <span className="absolute -top-8 text-base text-[var(--dark-green)]">
        / SKILLSET
      </span>
      <h2 className="w-[calc(45vw)] mt-5 text-2xl tracking-tighter  sm:text-4xl lg:text-6xl">
        My skills and interests
      </h2>
      <div className="lg:w-[calc(50vw)] lg:leading-10">
        <p className="mt-8">
          My motivation comes from the constant challenge of adapting my skills,
          workflows, and problem-solving mindset to meet each client's evolving
          needs
        </p>
        <p>
          I considere myself an adaptable developer with a strong desire for
          continuous growth. I strive to bring real value to the teams I
          colaborate with
          <span className="text-[var(--green-phosphor)]">
            {" "}
            -- not just through code, but also through attitude, clear
            communication, and a strong sense of responsability.
          </span>
        </p>
        <IntererstsComponent />
      </div>
    </div>
  );
}
