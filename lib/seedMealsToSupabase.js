import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    fetch,
  },
});

const dummyMeals = [];

async function seedData() {
  for (const meal of dummyMeals) {
    const { error } = await supabase.from("meals").insert(meal);

    if (error) {
      console.error(`❌ Error inserting ${meal.slug}:`, error);
    }
  }
}

seedData();
