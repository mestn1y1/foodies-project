import Image from "next/image";
import css from "./meal-item.module.css";
import Link from "next/link";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={css.meal}>
      <header>
        <Image src={image} alt={title} fill />
        <div className={css.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={css.content}>
        <p className={css.summary}>{summary}</p>
        <div className={css.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
