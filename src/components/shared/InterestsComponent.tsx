const interestsList = [
  "Responsive UI development",
  "Frontend architecture",
  "Component-based design",
  "Modern CSS tooling",
  "Interactive animations",
  "UX-focused layout and interaction",
  "API integrations / UI data rendering",
  "Design-to-code translation",
];

export default function IntererstsComponent() {
  return (
    <ul className="mt-10 px-3 md:text-lg list-square list-inside sm:pl-10">
      {interestsList.map((interest) => (
        <li className="custom-marker">{interest}</li>
      ))}
    </ul>
  );
}
