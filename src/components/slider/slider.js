import Swiper from "swiper";
import "swiper/css";
import "./slider.scss";
import ImageOne from "../../image/slideOne.jpg";
import ImageTwo from "../../image/slideTwo.jpg";
import ImageThree from "../../image/slideThree.jpg";
import ImageFour from "../../image/slideFour.jpg";
import ImageFive from "../../image/slideFive.jpg";

export function Slider() {
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("swiper", "personalSlider");
  sliderContainer.innerHTML = `
      <div class="swiper-wrapper">
        <div class="swiper-slide">
         <img
          src=${ImageOne}
          alt="Фото">
        </div>
        <div class="swiper-slide">
          <img
          src=${ImageTwo}
          alt="Фото">
        </div>
        <div class="swiper-slide">
          <img
          src=${ImageThree}
          alt="Фото">
        </div>
        <div class="swiper-slide">
         <img
          src=${ImageFour}
          alt="Фото">
        </div>
         <div class="swiper-slide">
         <img
          src=${ImageFive}
          alt="Фото">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
  `;
  document.addEventListener("DOMContentLoaded", function () {
    var slider = new Swiper(sliderContainer, {
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  return sliderContainer;
}
