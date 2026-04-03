"use client";

import React, { useEffect, useRef, ReactNode, ElementType } from "react";

type Variant = "up" | "left" | "right" | "scale" | "fade";

const variantClass: Record<Variant, string> = {
  up:    "reveal",
  left:  "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade:  "reveal",
};

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;        // ms
  variant?: Variant;
  as?: ElementType;
  threshold?: number;    // 0–1
}

export default function AnimateIn({
  children,
  className = "",
  style,
  delay = 0,
  variant = "up",
  as: Tag = "div",
  threshold = 0.12,
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variantClass[variant]} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
