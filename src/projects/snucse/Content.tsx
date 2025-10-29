"use client";
import React from "react";
import { Text } from "../../components/blocks/Text";
import { Picture } from "../../components/blocks/Picture";

export function Content() {
  return (
    <>
      {Array.from({ length: 14 }, (_, i) => (
        <Picture
          key={i + 1}
          alt={`${i + 1}`}
          basePng={`/images/projects/snucse/${i + 1}.png`}
          width={1600}
          height={900}
          wrapperClassName="md:mb-10"
        />
      ))}
    </>
  );
}
