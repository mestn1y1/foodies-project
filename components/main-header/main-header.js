import Link from "next/link";
import logoImg from "@/assets/logo.png";
import css from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={css.header}>
        <Link className={css.logo} href="/">
          <Image src={logoImg} alt=" A plate with food on it" priority />
          NextLevelFood
        </Link>
        <nav className={css.nav}>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
