let dayNight = document.querySelector(".dayNight");
let main = document.querySelector("#main");

dayNight.addEventListener("click", () => {
    main.classList.toggle("night");
})

let typing = new Typed("#text",{
    strings: ["Deepak", "Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    backDelay:1000,


})