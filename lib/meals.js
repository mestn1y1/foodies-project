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

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  meal.image = `/images/${fileName}`;

  const { data, error } = await supabase.from("meals").insert([meal]);
  if (error) {
    throw new Error("Write meals is failed.");
  }
  return data;
}
