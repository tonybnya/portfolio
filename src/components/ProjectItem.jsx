import { useEffect, useState } from "react";

const ProjectItem = ({
  images,
  title,
  description,
  tags,
  liveUrl,
  sourceUrl,
}) => {
  // TODO: add an icon near to each title - the icon/logo of the project
  // The Portfolio API should probably be changed for that
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    // <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
    // <div className="border-2 border-white rounded-md overflow-hidden">
    // <div className="border-2 border-black rounded-md overflow-hidden">
    <div className="border-2 border-[#4A5565] rounded-md overflow-hidden bg-[#030713]">
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
                className="w-full h-36 md:h-48 object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              aria-label="Previous image"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
              aria-label="Next image"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentImageIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {/* <div className="w-full p-4 dark:text-gray-50 text-black"> */}
      <div className="w-full p-4 text-gray-50">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-righteous tracking-wide">
          {title}
        </h3>
        <p className="text-justify mb-2 font-light tracking-wide">
          {description}
        </p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start my-4 text-xs md:text-sm">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-black text-gray-400 rounded-md"
              // className="inline-block px-2 py-1 font-semibold border-2 border-gray-50 rounded-md"
              // className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-gray-50 rounded-md"
            >
              {tag}
            </span>
          ))}
        </p>
        <div className="flex gap-2 text-gray-400">
          <a
            href={liveUrl}
            target="_blank"
            className="bg-black px-4 py-2 rounded-md hover:bg-black/50"
          >
            Live <i class="fa-solid fa-square-up-right"></i>
          </a>
          <a
            href={sourceUrl}
            target="_blank"
            className="bg-black px-4 py-2 rounded-md hover:bg-black/50"
          >
            Source <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
