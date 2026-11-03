import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const linkButton = (url, hoverClass, children) => {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        className={`px-4 py-2 border-2 border-[#4A5565] rounded-md font-sans transition-colors ${hoverClass}`}
      >
        {children}
      </a>
    );
  }
  return (
    <span className="px-4 py-2 border-2 border-[#4A5565]/40 rounded-md font-sans opacity-40 cursor-not-allowed">
      {children}
    </span>
  );
};

const ProjectItem = ({
  images,
  title,
  description,
  tags,
  liveUrl,
  sourceUrl,
  index = 0, // eslint-disable-line react/prop-types -- repo convention: no prop-types anywhere
}) => {
  // TODO: add an icon near to each title - the icon/logo of the project
  // The Portfolio API need to be changed for that
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const rootRef = useRef(null);

  /* reveals itself on arrival: same grammar as every section, rail-aligned */
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(rootRef.current, {
        opacity: 0,
        y: 42,
        filter: "blur(7px)",
        duration: 1,
        delay: (index % 3) * 0.08,
        ease: "expo.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 92%", once: true },
      });
    },
    { dependencies: [] },
  );

  useEffect(() => {
    let intervalId;

    if (isAutoPlaying && images.length > 1) {
      intervalId = setInterval(() => {
        nextImage();
      }, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      ref={rootRef}
      className="group border-2 border-[#4A5565] rounded-md overflow-hidden bg-[#050403] transition-colors duration-300 hover:border-[#4A5565]/60"
    >
      <div
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} image ${index + 1}`}
                className="w-full h-36 md:h-48 object-cover flex-shrink-0 transition-transform duration-700 group-hover:scale-[1.04]"
              />
            ))}
          </div>
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
              aria-label="Previous image"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors backdrop-blur-sm"
              aria-label="Next image"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImageIndex === index ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="w-full p-4 text-gray-50">
        <h3 className="text-lg text-[#ffba00]/90 md:text-xl mb-2 md:mb-3 font-sans font-medium tracking-normal">
          {title}
        </h3>
        <p className="text-justify mb-3 font-normal font-sans text-[0.9375rem] leading-relaxed">
          {description}
        </p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start my-4 text-xs md:text-sm">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-mono border border-[#4A5565]/60 text-[#9ca3af] rounded-md"
            >
              {tag}
            </span>
          ))}
        </p>
        <div className="flex gap-2 text-gray-400">
          {linkButton(
            liveUrl,
            "hover:bg-black/10",
            <>
              Live <i className="fa-solid fa-square-up-right"></i>
            </>,
          )}
          {linkButton(
            sourceUrl,
            "hover:bg-black",
            <>
              Source <i className="fa-brands fa-github"></i>
            </>,
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
