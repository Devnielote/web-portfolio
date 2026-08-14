const interestsList = [
  "Web Development",
  "Frontend & Backend Architecture",
  "Component & UI Library Development",
  "API Design & Development",
  "Automation & Process Optimization",
  "Scripting & Developer Tooling",
  "Linux & Systems",
  "Web & Interface Desing",
  "Software Architecture"
];
//TODO: Agregar tecnologías que utilizo
export default function IntererstsComponent() {
  return (
    <ul className="mt-10 px-3 md:text-lg list-square list-inside sm:pl-10">
      {interestsList.map((interest) => (
        <li className="custom-marker">{interest}</li>
      ))}
    </ul>
  );
}
