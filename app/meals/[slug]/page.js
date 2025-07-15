import Image from "next/image";
import css from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.slug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={css.header}>
        <div className={css.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={css.headerText}>
          <h1>{meal.title}</h1>
          <p className={css.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={css.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={css.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
