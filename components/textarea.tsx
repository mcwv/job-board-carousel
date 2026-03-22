"use client";
import React from "react";

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      style={{
        padding: 10,
        borderRadius: 6,
        border: "1px solid #ccc",
        width: "100%",
        minHeight: 140,
        fontFamily: "monospace",
      }}
    />
  );
}
