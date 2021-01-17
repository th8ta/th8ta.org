import Link from "next/link";
import logo from "../assets/logo.svg";
import styles from "../styles/Nav.module.sass";

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <Link href="/">
        <a className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
      </Link>
      <a
        href="https://blog.th8ta.org"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        style={{ color: "black" }}
      >
        Blog
      </a>
    </div>
  );
}
