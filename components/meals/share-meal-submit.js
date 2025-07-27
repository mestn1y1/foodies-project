"use client";

import { useFormStatus } from "react-dom";

export default function ShareSubmitForm() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submiting..." : "Share Meal"}
    </button>
  );
}
