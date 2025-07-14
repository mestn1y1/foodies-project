import Link from "next/link";
import css from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
export default function MealsPage() {
  return (
    <>
      <header className={css.header}>
        <h1>
          Delicious meals, created <span className={css.highligh}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook iit yourself. It is easy and fun!
        </p>
        <p className={css.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={css.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
