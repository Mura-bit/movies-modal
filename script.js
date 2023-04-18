"use strict";

const watchBtn = document.querySelectorAll(".watch-movie");
const modalList = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");

//add event listener to the button
const showModalHandler = (index) => {
    modalList[index].classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModalHandler = (index) => {
    modalList[index].classList.add("hidden");
    overlay.classList.add("hidden");
};


watchBtn.forEach((el, index) => {
    el.addEventListener("click", ()=> showModalHandler(index));
});

modalList.forEach((el, index) => {
    el.addEventListener("click", ()=> closeModalHandler(index));
});

document.querySelector("body").addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modalList.forEach((el, index) => {
            el.addEventListener("click", closeModalHandler(index));
        });
    }
});