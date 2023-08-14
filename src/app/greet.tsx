"use client";

import { invoke } from "@tauri-apps/api/tauri";

export default function Greet() {
  const greet = () =>
    invoke<string>("greet", { name: "Next.js" })
      .then(console.log)
      .catch(console.error);

  return <button onClick={greet}>Click</button>;
}
