import Link from "next/link";
import styles from "../styles/Nav.module.sass";

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/logo.svg" alt="logo" draggable={false} />
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
