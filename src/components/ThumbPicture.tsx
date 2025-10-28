import React from "react";

type Props = {
  /** 예: "/images/projects/mindly/thumbnail.png" */
  png: string;
  alt: string;
  width?: number;
  height?: number;
  /** 리스트라면 대략 카드 폭만큼 지정해도 OK */
  sizes?: string; // e.g. "(min-width:768px) 320px, 45vw"
  className?: string;
  priority?: boolean; // 첫 화면 위쪽 썸네일에만 true
};

/** 썸네일: 동일 경로의 .webp 폴백 구성 (suffix 없이) */
export default function ThumbPicture({
  png,
  alt,
  width,
  height,
  sizes = "(min-width:768px) 320px, 45vw",
  className,
  priority = false,
}: Props) {
  const webp = png.replace(/\.png$/i, ".webp");
  return (
    <picture>
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={png}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? {} : { decoding: "async" })}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
