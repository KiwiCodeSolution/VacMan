import { Link } from "react-router-dom";
import "./styles.css";

export default function Welcome() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl mb-4">Welcom (App Main Page)</h1>
      <Link className="py-2 px-4 border rounded-lg mr-4 bg-bg-light" to="/signup">
        Sign Up
      </Link>
      <Link className="py-2 px-4 border rounded-lg bg-bg-light" to="/login">
        Log In
      </Link>
    </div>
  );
}
