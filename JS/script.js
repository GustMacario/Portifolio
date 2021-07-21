const main = document.getElementById("main");

const burgMenu = document.querySelector(".hamburguer-menu");

const burgmenucontent = document.querySelector(".burg-menu");

burgMenu.addEventListener("click", () => {
    burgmenucontent.classList.toggle("change");
    main.classList.toggle("blur");
});

