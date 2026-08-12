import { Link } from "react-router-dom";

export default function RetroButton() {
  return (
    <Link
      className="ml-5"
      to="https://www.linkedin.com/in/danielflorescardona/"
    >
      <button className="button">VIEW LINKEDIN ↱</button>
    </Link>
  );
}
