import React from "react";

type Props = {
  src: string;
  alt: string;
  // 대부분 1600x900이니 알면 넘기고, 모르면 aspectRatio만 넘기기
  width?: number;
  height?: number;
  aspectRatio?: `${number}/${number}` | number; //"16/9"
  className?: string;
  /** 첫 이미지(LCP)만 true */
  priority?: boolean;
  /** 반응형 컨테이너 폭 추정치 (md 기준) */
  sizes?: string; // 기본값 제공
};

export default function ImageLite({
  src,
  alt,
  width,
  height,
  aspectRatio = "16/9",
  className,
  priority = false,
  sizes = "(min-width: 768px) 960px, 92vw", // md 이상에서는 카드가 ~960px 폭이라고 가정
}: Props) {
  const style: React.CSSProperties = {};
  if (width && height) {
    // width/height를 지정하면 CLS 방지에 가장 좋음
  } else if (aspectRatio) {
    style.aspectRatio = String(aspectRatio);
    // h-auto를 쓰면 세로가 0이 될 수 있으니 블록 컨텍스트에서 비율 박스 확보
    // (부모에 w-full 주면 비율에 맞춰 높이가 생김)
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      // png만 있다면 srcset은 생략(중복 다운로드 방지). sizes만 넣어도 문제 없음
      sizes={sizes}
      className={className}
      style={style}
    />
  );
}
