const images = document.querySelectorAll(".image");

// window.addEventListener("scroll", (e) => {
//   e.preventDefault();

//   images.forEach((image) => {
//     console.log("Scrolling~");

//     const rect = image.getBoundingClientRect().top;

//     if (rect <= window.innerHeight) {
//       const src = image.getAttribute("lazy-data-attr");
//       image.setAttribute("src", src);
//       image.classList.add("fade");
//     }
//   });
// });

const lazyload = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log("reached!");

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("lazy-data-attr");

        img.setAttribute("src", src);
        img.classList.add("fade");

        observer.disconnect();
      }
    });
  });
  io.observe(target);
};

images.forEach(lazyload);
