import React from "react";

export function LoopVideo({
  src,
  webm,
  poster,
  caption,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
}: {
  src?: string; // mp4
  webm?: string; // webm 선택
  poster?: string;
  caption?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}) {
  return (
    <figure className={`space-y-3 ${className}`}>
      <video
        className="w-full rounded-2xl shadow"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={poster}
      >
        {webm && <source src={webm} type="video/webm" />}
        {src && <source src={src} type="video/mp4" />}
      </video>
      {caption && (
        <figcaption className="text-sm text-neutral-500">{caption}</figcaption>
      )}
    </figure>
  );
}
