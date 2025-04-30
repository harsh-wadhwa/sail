import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Clothing Rental</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/clothing">Articles</Link>
        </li>
        <li>
          <Link href="/bookings">Bookings</Link>
        </li>
        <li>
          <Link href="/returns">Returns</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
