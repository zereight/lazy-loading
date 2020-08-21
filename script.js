const images = document.querySelectorAll(".image");

window.addEventListener("scroll", (e) => {
  e.preventDefault();

  images.forEach((image) => {
    console.log("Scrolling~");

    const rect = image.getBoundingClientRect().top;

    if (rect <= window.innerHeight) {
      const src = image.getAttribute("lazy-data-attr");
      image.setAttribute("src", src);
      image.classList.add("fade");
    }
  });
});
