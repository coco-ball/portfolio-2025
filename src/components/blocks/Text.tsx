import React from "react";

export function Text({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`max-w-4xl mx-auto md:px-8 my-12 text-center ${className}`}
    >
      {title && (
        <h2 className="text-lg md:text-xl font-semibold mb-4">{title}</h2>
      )}
      <div className="text-md leading-relaxed whitespace-pre-line">
        {children}
      </div>
    </section>
  );
}
