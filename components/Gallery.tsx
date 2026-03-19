"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Modal, ModalContent, ModalBody, useDisclosure, Button, Chip, } from "@heroui/react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Video, } from "lucide-react";

type MediaItem = {
  src: string;
  type: "image" | "video";
  alt?: string;
};

export default function Gallery() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const items: MediaItem[] = [
    { src: "/images/imag1.png", type: "image" },
    { src: "/images/imag2.png", type: "image" },
    { src: "/images/imag3.png", type: "image" },
    { src: "/images/imag4.png", type: "image" },
    { src: "/images/imag5.png", type: "image" },
    { src: "/images/imag6.png", type: "image" },
    { src: "/images/imag7.png", type: "image" },
    { src: "/images/imag8.png", type: "image" },
    { src: "/images/imag9.png", type: "image" },
    { src: "/images/imag10.png", type: "image" },
    { src: "/images/imag11.png", type: "image" },
    { src: "/images/imag12.png", type: "image" },
    { src: "/images/imag13.png", type: "image" },
    { src: "/images/imag14.png", type: "image" },
    { src: "/images/imag15.png", type: "image" },
    { src: "/videos/video1.mp4", type: "video" },
    { src: "/videos/video2.mp4", type: "video" },
    { src: "/videos/video3.mp4", type: "video" },
    { src: "/videos/video4.mp4", type: "video" },
    { src: "/videos/video5.mp4", type: "video" },
    { src: "/videos/video6.mp4", type: "video" },
    { src: "/videos/video7.mp4", type: "video" },
    { src: "/videos/video8.mp4", type: "video" },
    { src: "/videos/video9.mp4", type: "video" },
    { src: "/videos/video10.mp4", type: "video" },
    { src: "/videos/video11.mp4", type: "video" },
    { src: "/videos/video12.mp4", type: "video" },
  ];

  const filteredItems = items.filter((item) =>
    activeTab === "photos"
      ? item.type === "image"
      : item.type === "video"
  );
  const openItem = (index: number) => {
    setSelectedIndex(index);
    onOpen();
  };
  const nextItem = () => {
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  };
  const prevItem = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, filteredItems.length]);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <Chip className="px-4 py-2 text-sm bg-teal-100 text-teal-700 font-semibold rounded-full mb-4">
          Gallery
        </Chip>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our <span className="text-yellow-500">Moments</span> & Memories
        </h2>

        <p className="text-gray-500 mt-3 text-sm sm:text-base px-2">
          Explore photos and videos from our events.
        </p>
      </div>
      <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 flex-wrap">
        <Button
          startContent={<ImageIcon size={18} />}
          onPress={() => setActiveTab("photos")}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
            activeTab === "photos"
              ? "bg-yellow-400 text-black shadow-md"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
          }`}
        >
          Photos
        </Button>
        <Button
          startContent={<Video size={18} />}
          onPress={() => setActiveTab("videos")}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
            activeTab === "videos"
              ? "bg-yellow-400 text-black shadow-md"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
          }`}
        >
          Videos
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            onClick={() => openItem(i)}
            className="cursor-pointer overflow-hidden rounded-xl group relative hover:shadow-xl hover:-translate-y-1 transition"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt="gallery"
                width={500}
                height={500}
                className="w-full aspect-[4/3] sm:aspect-square object-cover group-hover:scale-105 transition duration-300"
              />
            ) : (
              <video
                src={item.src}
                className="w-full aspect-[4/3] sm:aspect-square object-cover"
              />
            )}
          </div>
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="blur"
        classNames={{ base: "bg-black/90", closeButton: "hidden" }}
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody className="relative flex items-center justify-center p-2 sm:p-6">
              <Button
                isIconOnly
                onPress={onClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 
                           bg-white/10 backdrop-blur-md 
                           text-white border border-white/20 
                           hover:bg-white/20 hover:scale-110 
                           transition-all duration-300 
                           shadow-lg rounded-full"
              >
                <X size={20} />
              </Button>
              <Button
                isIconOnly
                className="absolute left-2 sm:left-4 bg-white/10 text-white"
                onPress={prevItem}
              >
                <ChevronLeft />
              </Button>
              <Button
                isIconOnly
                className="absolute right-2 sm:right-4 bg-white/10 text-white"
                onPress={nextItem}
              >
                <ChevronRight />
              </Button>
              {filteredItems[selectedIndex]?.type === "image" ? (
                <Image
                  src={filteredItems[selectedIndex]?.src}
                  alt="preview"
                  width={1200}
                  height={800}
                  className="rounded-xl object-contain max-h-[70vh] sm:max-h-[80vh]"
                />
              ) : (
                <video
                  src={filteredItems[selectedIndex]?.src}
                  controls
                  autoPlay
                  className="max-h-[70vh] sm:max-h-[80vh] rounded-xl"
                />
              )}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}