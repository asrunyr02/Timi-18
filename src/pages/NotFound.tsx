import { Link } from "react-router";

export function NotFound() {
  return (
    <>
      <h1>Síða fannst ekki!</h1>
      <Link to="/">Fara heim</Link>
    </>
  );
}
