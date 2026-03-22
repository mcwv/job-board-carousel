"use client";
import React from "react";

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      style={{
        padding: "10px 14px",
        borderRadius: 6,
        border: "1px solid #ccc",
        background: "#111",
        color: "#fff",
        cursor: "pointer",
      }}
    />
  );
}
