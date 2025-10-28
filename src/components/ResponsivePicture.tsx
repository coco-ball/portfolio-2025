// src/components/ResponsivePicture.tsx
import React from "react";

type Props = {
  /** 원본 PNG 경로 (예: /images/projects/mindly/1.png) */
  basePng: string;
  alt: string;
  /** 레이아웃 안정화를 위해 가능하면 지정 (대부분 1600x900) */
  width?: number;
  height?: number;
  /** md 하나만 쓰므로 기본 sizes는 md 기준 */
  sizes?: string; // "(min-width:768px) 960px, 92vw"
  /** LCP 등 상단 1~2장에만 true */
  priority?: boolean;
  className?: string;
};

const DEFAULT_SIZES = "(min-width:768px) 960px, 92vw";

/**
 * 800/1600 webp만 사용하는 경량 picture
 * - basePng: "/.../1.png" 형태면 내부에서 "/.../1-800.webp, 1-1600.webp"를 추론
 * - PNG는 최종 폴백으로만 사용
 */
export default function ResponsivePicture({
  basePng,
  alt,
  width,
  height,
  sizes = DEFAULT_SIZES,
  priority = false,
  className,
}: Props) {
  // "/a/b/c/1.png" -> "/a/b/c/1"
  const dot = basePng.lastIndexOf(".");
  const stem = dot >= 0 ? basePng.slice(0, dot) : basePng;

  const webpSrcSet = `${stem}-800.webp 800w, ${stem}-1600.webp 1600w`;

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={basePng} // 최종 폴백
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
