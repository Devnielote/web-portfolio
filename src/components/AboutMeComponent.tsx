import photo from "../assets/dan-web.jpeg";

//TODO: Cambiar foto personal por imagenes de proyectos
export default function AboutMeComponent() {
  return (
    <div className="mt-20 lg:flex lg:justify-between lg:items-center">
      <img
        className="w-3/4 m-auto md:w-3/5 lg:w-[25rem]"
        src={photo}
        alt="Photo of myself sitting looking away"
      />
      <div className="flex flex-col mt-20 text-left tracking-tighter leading-7 lg:m-0 lg:w-[calc(50vw)] lg:leading-10">
        <span className="text-left">/ ABOUT ME</span>
        <p className="mt-10">
          I'm a full-stack developer currently nearing the completion of my degree in Software Engineering, with over four years of experience building for the web {" "}
          <span className="text-[var(--green-phosphor)]">
            -- from freelance projects and personal experiments to internal business systems used in real-world operations.
          </span>
        </p>
        <p>
          Growing up in the mid-'90s, I spent countless hours tinkering with early websites, customizing desktop environments, and exploring everything the World Wide Web seemed to offer. Most of it was driven by simple curiosity and a fascination with the idea that, with enough patience, I could understand how things worked{" "}
          <span className="text-[var(--green-phosphor)]">
            -- and eventually create things of my own.
          </span>
        </p>
        <p>
          What fascinates me most about software today is the way its different layers come together. Data moves through systems, APIs connect different parts of an application, and eventually all of it reaches an interface where someone can actually use it. I enjoy working across that entire process{" "}
          <span className="text-[var(--green-phosphor)]">
            -- understanding how information is structured, transformed, and presented in a way that is useful and meaningful to the person on the other side of the screen.
          </span>
        </p>
        <p>
          There is something deeply satisfying about turning an idea into something tangible. Sometimes it begins with a practical problem that needs solving; other times with a small observation, an experiment, or a fleeting moment of inspiration. Watching that idea gradually become a working piece of software is one of the things that continues to keep me interested in this field.
        </p>
        <p>
          <span className="text-[var(--green-phosphor)]">
            For me, software development sits somewhere between engineering and creation: understanding a problem, reasoning about its parts, building a solution, and shaping the final experience into something that feels intentional. That is the perspective I try to bring to the software I build.
          </span>
        </p>
      </div>
    </div>
  );
}
