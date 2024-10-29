import MapPng from "../../image/map.png";
import { Offices } from "../offices/offices";
const points = [
  {
    title: "Москва",
    region: "msk",
    size: "medium",
    top: 223,
    left: 124,
  },
  {
    title: "Санк-Петербург",
    region: "sz",
    size: "large",
    top: 130,
    left: 98,
  },
  {
    title: "Калининград",
    region: "sz",
    size: "small",
    top: 124,
    left: 9,
  },
  {
    title: "Ярославль",
    region: "center",
    size: "small",
    top: 198,
    left: 157,
  },
  {
    title: "Воронеж",
    region: "center",
    size: "small",
    top: 250,
    left: 73,
  },
  {
    title: "Белгород",
    region: "center",
    size: "small",
    top: 278,
    left: 71,
  },
  {
    title: "Ростов-на-Дону",
    region: "south",
    size: "medium",
    top: 319,
    left: 37,
  },
  {
    title: "Краснодар",
    region: "south",
    size: "medium",
    top: 381,
    left: 23,
  },
  {
    title: "Волгоград",
    region: "south",
    size: "small",
    top: 360,
    left: 71,
  },
];

export function Map({ className }) {
  const map = document.createElement("div");
  map.className = `map ${className}`;
  const mapRegions = document.createElement("div");
  mapRegions.classList.add("map__header");

  document.addEventListener("DOMContentLoaded", function () {
    const officesElement = Offices();
    mapRegions.prepend(officesElement);
  });
  const regionsHTML = `
  <ul class="map__regions">
      <li class="map__regions-button" data-region="all">Все</li>
      <li class="map__regions-button" data-region="msk">Москва</li>
      <li class="map__regions-button" data-region="center">Центр</li>
      <li class="map__regions-button" data-region="sz">Север-Запад</li>
      <li class="map__regions-button" data-region="south">Юг</li>
    </ul>`;

  mapRegions.innerHTML += regionsHTML;

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map__container");
  mapContainer.innerHTML = `<img loading="lazy" width="1190" height="601" src=${MapPng}>`;

  const regionsButtons = document.getElementsByClassName("map__regions-button");
  document.addEventListener("DOMContentLoaded", function () {
    points.forEach((item) => {
      const point = document.createElement("div");
      point.classList.add("map__point");
      point.classList.add(item.size);
      point.textContent = item.title;
      point.style.top = item.top + "px";
      point.style.left = item.left + "px";
      point.setAttribute("data-region", item.region);
      mapContainer.appendChild(point);
    });

    const mapPoints = document.getElementsByClassName("map__point");
    Array.from(regionsButtons).forEach((button) => {
      button.addEventListener("click", (event) => {
        const currentRegion = event.target.dataset.region;
        Array.from(regionsButtons).forEach((btn) => {
          btn.classList.remove("active");
        });

        button.classList.add("active");

        Array.from(mapPoints).forEach((point) => {
          point.style.display = "block";
          if (currentRegion != "all" && point.dataset.region != currentRegion) {
            point.style.display = "none";
          }
        });
      });
    });
  });

  map.appendChild(mapRegions);
  map.appendChild(mapContainer);
  return map;
}
