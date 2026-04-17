const main = document.getElementById("main");

const burgMenu = document.querySelector(".hamburguer-menu");

const burgmenucontent = document.querySelector(".burg-menu");

burgMenu.addEventListener("click", () => {
    burgmenucontent.classList.toggle("change");
    main.classList.toggle("blur");
});


document.addEventListener("DOMContentLoaded", () => {
   // gsap splitText
  const splitTitle = new SplitText(".nome__title", { type: "chars" });
  const splitSubtitle = new SplitText(".nome__subtitle", { type: "chars" });

  const timeline = gsap.timeline();

  timeline.from(splitTitle.chars, { opacity: 0, y: 50, stagger: 0.05, duration: 1 });
  timeline.from(splitSubtitle.chars, { opacity: 0, x: 50, stagger: 0.02, duration: 1 }, "-=1");
});
