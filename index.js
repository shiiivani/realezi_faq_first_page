document.addEventListener("DOMContentLoaded", function () {
  const partyPopper = new rive.Rive({
    src: "./assets/animation/Party-popper.riv",
    canvas: document.getElementById("partyPopper"),
    autoplay: true,
    onLoad: () => {
      partyPopper.resizeDrawingSurfaceToCanvas();
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const partyPopper = new rive.Rive({
      src: "./assets/animation/Party-popper.riv",
      canvas: document.getElementById("partyPopper"),
      autoplay: true,
      onLoad: () => {
        partyPopper.resizeDrawingSurfaceToCanvas();
      },
    });
  
    const scrollLeftButton = document.querySelector(".scroll-left");
    const scrollRightButton = document.querySelector(".scroll-right");
    const navbar = document.querySelector(".second-navbar ul");
  
    function updateScrollButtons() {
      const isScrollable = navbar.scrollWidth > navbar.clientWidth;
      scrollLeftButton.style.display = isScrollable ? 'block' : 'none';
      scrollRightButton.style.display = isScrollable ? 'block' : 'none';
    }
  
    function scrollNavbar(direction) {
      const scrollAmount = 100;
      navbar.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  
    scrollLeftButton.addEventListener("click", () => scrollNavbar('left'));
    scrollRightButton.addEventListener("click", () => scrollNavbar('right'));
  
    window.addEventListener("resize", updateScrollButtons);
    updateScrollButtons();
  });
  