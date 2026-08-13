interface Job {
  title: string;
  company: string;
  startDate: Date | string;
  endDate: Date | string;
}

const jobList: Job[] = [
  {
    title: "Full-stack developer",
    company: "Citro Telecom",
    startDate: new Date("2025-09-01"),
    endDate: "Present",
  },
  {
    title: "Front-end developer",
    company: "Freelance",
    startDate: new Date("2022-01-01"),
    endDate: "Present",
  },
  {
    title: "Front-end developer",
    company: "Outline Creative Community",
    startDate: new Date("2021-01-01"),
    endDate: "Present",
  },

]


export default function JobsComponent() {
  return (
    <div className="mt-10 lg:w-[calc(50vw)]">
      {

      }
      <div className="flex justify-between items-center">
        <h1>
          Frontend developer -{" "}
          <span className="text-[var(--green-phosphor)]">
            Freelance Projects
          </span>
        </h1>
        <span className="text-[var(--dark-green)]">2022 - NOW</span>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <h1>
          Frontend Developer -{" "}
          <span className="text-[var(--green-phosphor)]">
            Livewick / Outline CC
          </span>
        </h1>
        <span className="text-[var(--dark-green)]">2021 - Now (Collab)</span>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <h1>
          Administrative Support -{" "}
          <span className="text-[var(--green-phosphor)]">DFC Aceros</span>
        </h1>
        <span className="text-[var(--dark-green)]">2018 - Now</span>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <h1>
          Veterinarian -{" "}
          <span className="text-[var(--green-phosphor)]">
            Genesis Hospital Veterinario
          </span>
        </h1>
        <span className="text-[var(--dark-green)]">2016 - 2018</span>
      </div>
    </div>
  );
}
