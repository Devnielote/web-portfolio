interface Job {
  title: string;
  company: string;
  stack?: technology[];
  startDate: Date;
  endDate: Date | null;
}

interface technology {
  name: string;
  icon: string;
  //Api de github para obtener repos con dicha tecnología y obtener un stat de exp dinámico
  exp: number;
}

const jobList: Job[] = [
  {
    title: "Full-stack developer",
    company: "Citro Telecom",
    startDate: new Date("2025-09-01"),
    endDate: null,
  },
  {
    title: "Front-end developer",
    company: "Freelance",
    startDate: new Date("2022-01-01"),
    endDate: null,
  },
  {
    title: "Front-end developer",
    company: "Outline Creative Community",
    startDate: new Date("2021-01-01"),
    endDate: null,
  },
];

export default function JobsComponent() {
  return (
    <div className="mt-10 flex flex-col lg:w-[calc(50vw)]">
      {jobList.map((job) => (
        <div className="flex  flex-col items-start text-sm not-first:mt-4 md:text-lg md:flex-row md:justify-between">
          <h1>
            {job.title}{" "}
            <span className="text-[var(--green-phosphor)] text-ellipsis">
              {job.company}
            </span>
          </h1>
          <span className="text-[var(--dark-green)] text-sm">
            {job.startDate.getFullYear()} -{" "}
            {job.endDate ? job.endDate.getFullYear() : "PRESENT"}{" "}
          </span>
        </div>
      ))}
    </div>
  );
}
