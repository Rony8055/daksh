// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Button } from "@heroui/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { CallFindMediaFiles } from "@/services/apiAction";

// type ApiItem = {
//   _id: string;
//   fileName: string;
//   mediaType: string;
//   eventType: string;
//   url: string;
//   isVisible: boolean;
// };

// type MediaItem = {
//   id: string;
//   name: string;
//   url: string;
// };

// export default function AutoCarousel() {
//   const [items, setItems] = useState<MediaItem[]>([]);
//   const [current, setCurrent] = useState(0);
//   const fetchData = async () => {
//     try {
//       const res = await CallFindMediaFiles() as any;
//       console.log("res", res)
//       const mediaFiles: ApiItem[] = res?.data?.data?.MediaFile || [];
//       console.log("check media", mediaFiles)

//       const filtered = mediaFiles
//         .filter(
//           (item) =>
//             item.mediaType === "image" &&
//             item.eventType === "Slider" &&
//             item.isVisible === true
//         )
//         .map((item) => ({
//           id: item._id,
//           name: item.fileName,
//           url: item.url?.startsWith("http")
//             ? item.url
//             : `https://${item.url}`,
//         }));

//       setItems(filtered);
//     } catch (err) {
//       console.error("Error fetching media:", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (items.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % items.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [items]);

//   const next = () => {
//     if (items.length === 0) return;
//     setCurrent((prev) => (prev + 1) % items.length);
//   };

//   const prev = () => {
//     if (items.length === 0) return;
//     setCurrent((prev) =>
//       prev === 0 ? items.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="relative w-full py-10 bg-[#0f1c1c] overflow-hidden">
//       <Button
//         isIconOnly
//         radius="full"
//         variant="light"
//         className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 bg-white/10 backdrop-blur-md"
//         onPress={prev}
//       >
//         <ChevronLeft size={24} />
//       </Button>
//       <div className="flex items-center justify-center gap-4 px-10">
//         {items.map((item, index) => {
//           const isActive = index === current;

//           return (
//             <div
//               key={item.id}
//               className={`transition-all duration-500 rounded-xl overflow-hidden
//               ${isActive ? "scale-110 z-10" : "scale-90 opacity-40"}
//             `}
//               style={{ width: isActive ? 260 : 200 }}
//             >
//               <Image
//                 src={item.url}
//                 alt={item.name}
//                 width={300}
//                 height={200}
//                 className="object-cover w-full h-[160px] rounded-lg"
//               />
//             </div>
//           );
//         })}
//       </div>
//       <Button
//         isIconOnly
//         radius="full"
//         variant="light"
//         className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 bg-white/10 backdrop-blur-md"
//         onPress={next}
//       >
//         <ChevronRight size={24} />
//       </Button>
//       <div className="flex justify-center mt-6 gap-2">
//         {items.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`w-2 h-2 rounded-full cursor-pointer transition ${
//               i === current ? "bg-lime-400 scale-110" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

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
      const res = await CallFindMediaFiles() as any;
      const data = res?.data?.data || [];
      console.log("object", data)

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
          url: img.startsWith("http") ? img : `https://${img}`,
        })

      );

      setItems(formatted);
    } catch (err) {
      console.error("Error fetching media:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full py-10 bg-[#0f1c1c] overflow-hidden">
      <Button
        isIconOnly
        radius="full"
        variant="light"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 bg-white/10 backdrop-blur-md"
        onPress={prev}
      >
        <ChevronLeft size={24} />
      </Button>

      <div className="flex items-center justify-center gap-4 px-10">
        {items.map((item, index) => {
          const isActive = index === current;

          return (
            <div
              key={item.id}
              className={`transition-all duration-500 rounded-xl overflow-hidden
              ${isActive ? "scale-110 z-10" : "scale-90 opacity-40"}
            `}
              style={{ width: isActive ? 260 : 200 }}
            >
              <Image
                src={item.url}
                alt={`slide-${index}`}
                width={300}
                height={200}
                unoptimized
                className="object-cover w-full h-[160px] rounded-lg"
              />
            </div>
          );
        })}
      </div>

      <Button
        isIconOnly
        radius="full"
        variant="light"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 bg-white/10 backdrop-blur-md"
        onPress={next}
      >
        <ChevronRight size={24} />
      </Button>

      <div className="flex justify-center mt-6 gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition ${i === current ? "bg-lime-400 scale-110" : "bg-gray-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
}