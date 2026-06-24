"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CallFindMediaFiles } from "@/services/apiAction";

type MediaItem = {
  id: string;
  url: string;
};

export default function AutoCarousel() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [current, setCurrent] = useState(0);

  const fetchData = async () => {
    try {
      const res = (await CallFindMediaFiles()) as any;

      const data = res?.data?.data || [];

      const sliderData = data.find(
        (item: any) => item.eventType === "Slider"
      );

      if (!sliderData) {
        setItems([]);
        return;
      }

      const formatted = sliderData.images.map(
        (img: string, index: number) => ({
          id: `${index}`,
          url: img.startsWith("http")
            ? img
            : `https://${img}`,
        })
      );

      setItems(formatted);
    } catch (err) {
      console.error(
        "Error fetching media:",
        err
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!items.length) return;

    const interval = setInterval(() => {
      setCurrent(
        (prev) =>
          (prev + 1) % items.length
      );
    }, 3000);

    return () =>
      clearInterval(interval);
  }, [items]);

  const next = () => {
    if (!items.length) return;

    setCurrent(
      (prev) =>
        (prev + 1) % items.length
    );
  };

  const prev = () => {
    if (!items.length) return;

    setCurrent((prev) =>
      prev === 0
        ? items.length - 1
        : prev - 1
    );
  };

  const getVisibleSlides = () => {
    if (!items.length) return [];

    const prevIndex =
      current === 0
        ? items.length - 1
        : current - 1;

    const nextIndex =
      (current + 1) % items.length;

    return [
      {
        ...items[prevIndex],
        position: "prev",
      },
      {
        ...items[current],
        position: "active",
      },
      {
        ...items[nextIndex],
        position: "next",
      },
    ];
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#0f1c1c] py-8 sm:py-10">

      {/* Left Arrow */}

      <Button
        isIconOnly
        radius="full"
        variant="light"
        onPress={prev}
        className="
          absolute
          left-2
          sm:left-4
          top-1/2
          -translate-y-1/2
          z-20
          bg-white/10
          backdrop-blur-md
          text-white
        "
      >
        <ChevronLeft size={22} />
      </Button>

      {/* Slides */}

      <div
        className="
          flex
          items-center
          justify-center
          gap-3
          sm:gap-4
          px-10
          sm:px-16
        "
      >
        {getVisibleSlides().map(
          (item: any) => {
            const isActive =
              item.position === "active";

            return (
              <div
                key={`${item.id}-${item.position}`}
                className={`
                  overflow-hidden
                  rounded-xl
                  transition-all
                  duration-500
                  flex-shrink-0

                  ${
                    item.position !==
                    "active"
                      ? "hidden md:block"
                      : ""
                  }

                  ${
                    isActive
                      ? "scale-100 md:scale-110 z-10"
                      : "scale-90 opacity-40"
                  }
                `}
              >
                <Image
                  src={item.url}
                  alt="slider-image"
                  width={400}
                  height={250}
                  unoptimized
                  className="
                    object-cover
                    rounded-xl

                    w-[280px]
                    h-[180px]

                    sm:w-[340px]
                    sm:h-[220px]

                    md:w-[240px]
                    md:h-[160px]

                    lg:w-[280px]
                    lg:h-[180px]

                    xl:w-[320px]
                    xl:h-[200px]
                  "
                />
              </div>
            );
          }
        )}
      </div>

      {/* Right Arrow */}

      <Button
        isIconOnly
        radius="full"
        variant="light"
        onPress={next}
        className="
          absolute
          right-2
          sm:right-4
          top-1/2
          -translate-y-1/2
          z-20
          bg-white/10
          backdrop-blur-md
          text-white
        "
      >
        <ChevronRight size={22} />
      </Button>

      {/* Dots */}

      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() =>
              setCurrent(i)
            }
            className={`
              h-2
              rounded-full
              transition-all
              duration-300

              ${
                i === current
                  ? "w-6 bg-lime-400"
                  : "w-2 bg-gray-400"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}