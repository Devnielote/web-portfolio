import RetroButton from "./RetroButton";
import JobsComponent from "./shared/JobsComponent";

export default function WorkExperienceComponent() {
  return (
    <div className="relative mt-50 pb-30 text-left lg:flex lg:justify-between lg:pb-60">
      <span className="absolute -top-10 text-base text-[var(--dark-green)]">
        / PROFESSIONAL EXPERIENCE
      </span>
      <div className="mr-3">
        <h1 className="w-[calc(35vw)] mt-5 mb-6 text-2xl tracking-tighter  sm:text-4xl lg:text-6xl">
          My work experience
        </h1>
        <RetroButton />
      </div>
      <JobsComponent />
    </div>
  );
}
