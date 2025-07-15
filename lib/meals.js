import { supabase } from "./seedMealsToSupabase.js";

export async function getMeals() {
  const { data: meals } = await supabase.from("meals").select("*");
  return meals;
}

export async function getMeal(slug) {
  const { data: meal } = await supabase
    .from("meals")
    .select("*")
    .eq("slug", slug)
    .single();

  return meal;
}
