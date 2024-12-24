"use client";

import { memo } from "react";

function Bold({
  children,
  size = 18
}: {
  children?: any;
  size?: number
}) {

  return (
    <div
      className="bold text-white max-w-[90vw] h-fit" 
      style={{ fontSize: `${size}px`, fontWeight: 700 }}
    >
      {children}
    </div>
  );

};

export default memo(Bold);
