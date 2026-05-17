"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Chip,
} from "@heroui/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { CallFindMediaFiles } from "@/services/apiAction";

type MediaItem = {
  src: string;
  type: "image" | "video";
};

type Section = {
  title: string;
  cover: string;
  key: string;
};

type ApiMediaType = {
  [key: string]: {
    photos: MediaItem[];
    videos: MediaItem[];
  };
};

export default function Gallery() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [apiMedia, setApiMedia] = useState<ApiMediaType>({});
  const [gallerySections, setGallerySections] = useState<Section[]>([]);

  const fetchMedia = async () => {
    try {
      const res = (await CallFindMediaFiles()) as any;
      const files = res?.data?.data || [];

      const excluded = ["test", "Slider"];

      const filteredFiles = files.filter(
        (item: any) => !excluded.includes(item.eventType)
      );

      const momentData = filteredFiles.find(
        (item: any) => item.eventType === "Moments"
      );

      if (!momentData) {
        setApiMedia({});
        setGallerySections([]);
        return;
      }

      const formatted: ApiMediaType = {};
      const sections: Section[] = [];

      filteredFiles.forEach((item: any) => {
        const key = item.eventType?.toLowerCase();

        if (!item.images || item.images.length === 0) return;

        formatted[key] = {
          photos: (item.images || []).map((url: string) => ({
            src: url.startsWith("http") ? url : `https://${url}`,
            type: "image",
          })),
          videos: (item.videos || []).map((url: string) => ({
            src: url.startsWith("http") ? url : `https://${url}`,
            type: "video",
          })),
        };

        const firstImage = item.images[0];

        sections.push({
          title: item.eventType,
          cover: firstImage.startsWith("http")
            ? firstImage
            : `https://${firstImage}`,
          key: key,
        });
      });

      setApiMedia(formatted);
      setGallerySections(sections);
    } catch (err) {
      console.error("Error fetching media:", err);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const sectionData = activeSection ? apiMedia[activeSection] : null;

  const photos: MediaItem[] = sectionData?.photos || [];
  const videos: MediaItem[] = sectionData?.videos || [];

  const filteredItems = activeTab === "photos" ? photos : videos;

  const hasPhotos = photos.length > 0;
  const hasVideos = videos.length > 0;

  const openItem = (key: string) => {
    setActiveSection(key);
    setSelectedIndex(0);
    setActiveTab("photos");
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

  useEffect(() => {
    if (!activeSection) return;

    if (activeTab === "photos" && !hasPhotos) {
      setActiveTab("videos");
    }

    if (activeTab === "videos" && !hasVideos) {
      setActiveTab("photos");
    }
  }, [activeSection]);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">

      <div className="text-center mb-10">
        <Chip className="bg-teal-100 text-teal-700 mb-4">Gallery</Chip>
        <h2 className="text-3xl font-bold">
          Our <span className="text-yellow-500">Moments</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallerySections.map((item, i) => (
          <div
            key={i}
            onClick={() => openItem(item.key)}
            className="relative group cursor-pointer overflow-hidden rounded-xl h-[180px]"
          >
            <Image
              src={item.cover}
              alt={item.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-3 left-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
              {item.title}
            </div>
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
            <ModalBody className="relative flex flex-col items-center p-4">

              <Button
                isIconOnly
                onPress={onClose}
                className="absolute top-3 right-3 text-white"
              >
                <X />
              </Button>

              <div className="flex gap-3 mb-4">
                <Button
                  isDisabled={!hasPhotos}
                  onPress={() => setActiveTab("photos")}
                  className={
                    activeTab === "photos"
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-700 text-white"
                  }
                >
                  Photos ({photos.length})
                </Button>

                <Button
                  isDisabled={!hasVideos}
                  onPress={() => setActiveTab("videos")}
                  className={
                    activeTab === "videos"
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-700 text-white"
                  }
                >
                  Videos ({videos.length})
                </Button>
              </div>

              <div className="relative w-full flex justify-center">
                {filteredItems.length > 1 && (
                  <>
                    <Button
                      isIconOnly
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10"
                      onPress={prevItem}
                    >
                      <ChevronLeft />
                    </Button>

                    <Button
                      isIconOnly
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10"
                      onPress={nextItem}
                    >
                      <ChevronRight />
                    </Button>
                  </>
                )}

                {filteredItems[selectedIndex]?.type === "image" ? (
                  <Image
                    src={filteredItems[selectedIndex]?.src}
                    alt=""
                    width={1000}
                    height={600}
                    className="max-h-[60vh] object-contain rounded-xl"
                    unoptimized
                  />
                ) : (
                  <video
                    src={filteredItems[selectedIndex]?.src}
                    controls
                    autoPlay
                    className="max-h-[60vh] rounded-xl"
                  />
                )}
              </div>

              {filteredItems.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {filteredItems.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedIndex(i)}
                      className={`cursor-pointer border-2 rounded ${
                        selectedIndex === i
                          ? "border-yellow-400"
                          : "border-transparent"
                      }`}
                    >
                      {item.type === "image" ? (
                        <Image
                          src={item.src}
                          alt=""
                          width={80}
                          height={60}
                          className="object-cover w-[80px] h-[60px]"
                          unoptimized
                        />
                      ) : (
                        <video
                          src={item.src}
                          className="w-[80px] h-[60px] object-cover"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}