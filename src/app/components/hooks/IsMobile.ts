"use client";
import { useEffect, useState } from "react";

export default function isMobile() {

  const [state, setState] = useState<boolean>(() => document.body.clientWidth <= 700);

  useEffect(() => {
    const onResize = () => setState(document.body.clientWidth <= 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return state;

};
