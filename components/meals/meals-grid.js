import MealItem from "./meal-item";
import css from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  console.log(meals);
  return (
    <ul className={css.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
