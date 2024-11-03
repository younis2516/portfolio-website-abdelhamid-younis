import React from "react";
type HeadingProps= {
    children:React.ReactNode
}
export default function SectionHeading({children}:HeadingProps) {
  return (
      <h2 className="text-3xl font-bold capitalize mb-8 text-center">
          {children}
    </h2>
  );
}