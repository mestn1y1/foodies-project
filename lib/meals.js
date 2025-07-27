import fs from "node:fs";
import { supabase } from "./seedMealsToSupabase.js";

import slugify from "slugify";
import xss from "xss";
import { error } from "node:console";
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

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const filePath = `images/${fileName}`;
  const { error: uploadError } = await supabase.storage
    .from("meals")
    .upload(filePath, meal.image, {
      cacheControl: "3600",
      upsert: false,
    });

  const { data: publicUrlData } = supabase.storage
    .from("meals")
    .getPublicUrl(filePath);

  const publicUrl = publicUrlData.publicUrl;

  meal.image = publicUrl;

  const { data, error } = await supabase.from("meals").insert([meal]);
  if (error) {
    throw new Error("Write meals is failed.");
  }
  return data;
}
