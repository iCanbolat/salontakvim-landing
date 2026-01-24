"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FeatureData {
  key: string;
  title: string;
  description: string;
  highlight: string;
  accent: "primary" | "indigo" | "amber";
}

function FeatureStackCard({
  feature,
  index,
}: {
  feature: FeatureData;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const topOffset = 88 + index * 18;
  const accentColor =
    feature.accent === "primary"
      ? "bg-(--primary)"
      : feature.accent === "indigo"
        ? "bg-[oklch(0.6231_0.188_259.8145)]"
        : "bg-[oklch(0.7686_0.1647_70.0804)]";

  return (
    <div
      ref={cardRef}
      style={{
        zIndex: index + 1,
        top: topOffset,
      }}
      className={`sticky h-[70vh] min-h-130 rounded-4xl border border-(--border) bg-(--card) p-8 shadow-2xl backdrop-blur transition-all duration-500 md:p-12 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-4xl">
        <div
          className={`absolute -right-16 -top-20 h-48 w-48 rounded-full ${accentColor} opacity-20 blur-3xl`}
        />
        <div className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-(--accent) opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="space-y-5">
          <span className="text-sm uppercase tracking-widest text-(--muted-foreground)">
            {feature.highlight}
          </span>
          <h3 className="text-3xl font-semibold text-(--foreground) md:text-4xl">
            {feature.title}
          </h3>
          <p className="text-base leading-7 text-(--muted-foreground) md:text-lg">
            {feature.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-(--border) bg-(--background)/80 p-4">
            <p className="text-xs uppercase text-(--muted-foreground)">
              Hatırlatma Durumu
            </p>
            <p className="mt-2 text-sm font-semibold text-(--foreground)">
              24s & 1s otomatik bildirimler aktif
            </p>
          </div>
          <div className="rounded-2xl border border-(--border) bg-(--background)/80 p-4">
            <p className="text-xs uppercase text-(--muted-foreground)">
              Doluluk
            </p>
            <p className="mt-2 text-sm font-semibold text-(--foreground)">
              Ortalama %92 kapasite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StackingFeatures({ features }: { features: FeatureData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.94]);

  return (
    <section className="bg-(--background)">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={containerRef}
          style={{ height: `${features.length * 100}vh`, scale, opacity }}
          className="relative"
        >
          {features.map((feature, index) => (
            <FeatureStackCard
              key={feature.key}
              feature={feature}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
