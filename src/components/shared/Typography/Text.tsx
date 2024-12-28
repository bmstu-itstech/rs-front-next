"use client";

import { memo } from "react";

function Text({
  children,
  size = 16,
  className = ""
}: {
  children?: any;
  size?: number;
  className?: string;
}) {
  
  return (
    <span 
      className={`text text-white block ${className} max-w-[90vw] h-fit`}
      style={{ fontSize: `${size}px` }}
    >
      {children}
    </span>
  );

};

export default memo(Text);
