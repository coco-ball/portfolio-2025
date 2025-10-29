import React from "react";
import ResponsivePicture from "../ResponsivePicture";

export function Picture({
  wrapperClassName = "",
  className = "",
  ...props
}: React.ComponentProps<typeof ResponsivePicture> & {
  wrapperClassName?: string;
  className?: string;
}) {
  return (
    <div
      className={`max-w-5xl mx-auto content-visibility-auto contain-paint mb-4 rounded-2xl overflow-hidden ${wrapperClassName}`}
    >
      <figure className={`space-y-3 ${className}`}>
        <ResponsivePicture
          className="block w-full h-auto object-cover"
          sizes="(min-width:768px) 960px, 92vw"
          {...props}
        />
      </figure>
    </div>
  );
}
