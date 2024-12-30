import React from "react";

function ProjectItem({ image, title, description, tags, liveUrl, sourceUrl }) {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
      <img
        src={image}
        alt={title + "image"}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="w-full p-4 dark:text-gray-50 text-black">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-righteous tracking-wide">
          {title}
        </h3>
        <p className="text-justify mb-2 font-light">{description}</p>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start mb-4 text-xs md:text-sm">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-gray-50 rounded-md"
            >
              {tag}
            </span>
          ))}
        </p>
        <div className="flex gap-3">
          <a href={liveUrl} target="_blank">
            Live <i class="fa-solid fa-square-up-right"></i>
          </a>
          <a href={sourceUrl} target="_blank">
            Source <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;

// TODO: add a slider or carousel for each project card

// import React, { useState, useEffect } from "react";
//
// function ProjectItem({ images, title, description, tags, liveUrl, sourceUrl }) {
//   const [slideIndex, setSlideIndex] = useState(1);
//
//   useEffect(() => {
//     showSlides(slideIndex);
//   }, [slideIndex]);
//
//   const moveSlide = (n) => {
//     setSlideIndex((prevIndex) => prevIndex + n);
//   };
//
//   const showSlides = (n) => {
//     let slides = document.getElementsByClassName("carousel-item");
//     if (n > slides.length) {
//       setSlideIndex(1);
//     }
//     if (n < 1) {
//       setSlideIndex(slides.length);
//     }
//
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     if (slides[slideIndex - 1]) {
//       slides[slideIndex - 1].style.display = "flex";
//     }
//   };
//
//   return (
//     <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
//       <div className="carousel">
//         <div className="carousel-images">
//           {images.map((image, index) => (
//             <div key={index} className="carousel-item">
//               <img
//                 src={image}
//                 className="w-full h-36 md:48 object-cover"
//                 alt="Project image"
//               />
//             </div>
//           ))}
//         </div>
//         <a className="carousel-control prev" onClick={() => moveSlide(-1)}>
//           &#10094;
//         </a>
//         <a className="carousel-control next" onClick={() => moveSlide(1)}>
//           &#10095;
//         </a>
//       </div>
//
//       <div className="w-full p-4 dark:text-gray-50">
//         <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-righteous">
//           {title}
//         </h3>
//         <p className="text-justify mb-2 font-light">{description}</p>
//         <p className="flex flex-wrap gap-2 flex-row items-center justify-start mb-4 text-xs md:text-sm">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-gray-50 rounded-md"
//             >
//               {tag}
//             </span>
//           ))}
//         </p>
//         <div className="flex gap-3">
//           <a href={liveUrl} target="_blank" rel="noopener noreferrer">
//             <i className="fa-solid fa-globe"></i> Live
//           </a>
//           <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-github"></i> Source
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
//
// export default ProjectItem;
