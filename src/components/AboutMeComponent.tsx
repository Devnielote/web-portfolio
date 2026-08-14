import photo from "../assets/dan-web.jpeg";

//TODO: Cambiar foto personal por imagenes de proyectos
export default function AboutMeComponent() {
  return (
    <div className="lg:flex lg:justify-between lg:items-center">
      <img
        className="w-3/4 m-auto md:w-3/5 lg:w-[25rem]"
        src={photo}
        alt="Photo of myself sitting looking away"
      />
      <div className="flex flex-col mt-20 text-left tracking-tighter leading-7 lg:m-0 lg:w-[calc(50vw)] lg:leading-10">
        <span className="text-left">/ ABOUT ME</span>
        <p className="mt-10">
          I'm a frontend developer currently pursuing a degree in Software
          Engineerging, with over 3 years of hands-on experience building
          websites{" "}
          <span className="text-[var(--green-phosphor)]">
            -- from personal projects to freelance collaborations.
          </span>
        </p>
        <p>
          As a kid born in the mid-90's, I spent countless hours tinkering with
          early websites, customizing desktop environments, and exploring what
          computers coulb become{" "}
          <span className="text-[var(--green-phosphor)]">
            -- often guided by pure curiosity --
          </span>{" "}
          and love for creating.
        </p>
        <p>
          Although my path temporarily led me to study Veterinary Medicine due
          to my deep care for animals, I eventually found my way back to what
          had always resonated with me:{" "}
          <span className="border-b border-dashed border-[var(--green-phosphor)]">
            programming
          </span>
          . I'm especially drawn to the final and visible layer of software{" "}
          <span className="text-[var(--green-phosphor)]">
            -- where logic meets desing --
          </span>{" "}
          and where I get to express ideas through meaningful, responsive, and
          visually engaging user interfaces.
        </p>
        <p>
          Outside work, I enjoy spending time with my family, who are the
          foundations of nearly everything I strive for. Their presence gives me
          motivation, responsibility, and the drive to grow professionally. I
          also enjoy reading, playing games, and experimenting with web
          interfaces{" "}
          <span className="text-[var(--green-phosphor)]">
            -- even if just for fun.
          </span>
        </p>

        <p>
          I find inspiration in small, meaningful experiencies{" "}
          <span className="text-[var(--green-phosphor)]">
            -- and I aim to translate that into the websites I build.
          </span>
        </p>
      </div>
    </div>
  );
}
