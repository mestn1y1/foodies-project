import css from "./loading.module.css";
export default function MealsLoadingPage(second) {
  return <p className={css.loading}>Fetching meals...</p>;
}
