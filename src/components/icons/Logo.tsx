"use client";
import { memo } from "react";
import { isMobile } from "../hooks";

type ILogoType = "bmstu"|"crown"|"cmr";

function Logo({
  type
}: {
  type: ILogoType
}) {

  const mobile = isMobile();

  return <img src={`/svg/${type}_logo.svg`} className={`${mobile ? 'scale-[0.5]' : 'scale-[0.8]'}`} alt="site logo" />;

};

export default memo(Logo);
