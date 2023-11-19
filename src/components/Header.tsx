import { Link } from "@nextui-org/react";
import "../App.css";

function Navbar() {
  return (
    <div className="Navbar">
      <Link href="/">Home</Link>
      <Link href="/new">New</Link>
      <Link href="/feeds">Feeds</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
export default Navbar;
