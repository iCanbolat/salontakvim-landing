"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface FeatureData {
  key: string;
  title: string;
  description: string;
  highlight: string;
  accent: "primary" | "indigo" | "amber";
  images?: string[];
}

const defaultSlides = ["/a1.png", "/a2.png", "/a3.png"];

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
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const topOffset = 88 + index * 18;
  const accentColor =
    feature.accent === "primary"
      ? "bg-(--primary)"
      : feature.accent === "indigo"
        ? "bg-[oklch(0.6231_0.188_259.8145)]"
        : "bg-[oklch(0.7686_0.1647_70.0804)]";

  const slides = feature.images || defaultSlides;

  return (
    <div
      ref={cardRef}
      style={{
        zIndex: index + 1,
        top: topOffset,
      }}
      className={`sticky lg:h-[60vh] mb-[15vh] min-h-130 rounded-4xl border border-(--border) bg-(--card) p-8 shadow-2xl backdrop-blur will-change-transform transition-[opacity,transform] duration-500 ease-out md:p-12 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-7 scale-[0.99]"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-4xl">
        <div
          className={`absolute -right-16 -top-20 h-48 w-48 rounded-full ${accentColor} opacity-20 blur-3xl`}
        />
        <div className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-(--accent) opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center gap-12 lg:flex-row md:gap-16">
          <div className="flex-1 space-y-6">
            <h3 className="text-4xl font-bold tracking-tight text-(--foreground) md:text-5xl lg:text-6xl">
              {feature.title}
            </h3>
            <p className="text-lg leading-relaxed text-(--muted-foreground) md:text-xl">
              {feature.description}
            </p>
          </div>

          <div className="w-full flex-1 md:max-w-lg xl:max-w-xl">
            <div className="relative aspect-[6.5/4] w-full overflow-hidden rounded-3xl border border-(--border) bg-white shadow-sm flex items-center justify-center">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop
                speed={900}
                autoplay={{
                  delay: 2600,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false}
                className="feature-swiper h-full w-full"
              >
                {slides.map((src, slideIndex) => (
                  <SwiperSlide key={src} className="h-full!">
                    <div className="relative h-full w-full p-4">
                      <Image
                        src={src}
                        alt={`Feature showcase ${slideIndex + 1}`}
                        fill
                        priority={slideIndex === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StackingFeatures({ features }: { features: FeatureData[] }) {
  return (
    <section className="bg-(--background)">
      <div className="mx-auto max-w-6xl px-6">
        <div
          style={{ height: `${features.length * 100}vh` }}
          className="relative"
        >
          {features.map((feature, index) => (
            <FeatureStackCard
              key={feature.key}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
