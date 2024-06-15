"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=1234ff5tgadwe214facwert4444fada",
      {
        method: "POST",
      }
    );

    if (!res.ok) {
      setStatus("Failed to revalidate");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidated successfully");
      }
    }
  };
  return (
    <div>
      <h1>{status}</h1>
      <button
        onClick={() => revalidate()}
        className="bg-black text-white p-3 m-5"
      >
        Revalidate
      </button>
    </div>
  );
}
