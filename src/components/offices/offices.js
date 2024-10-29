export function Offices() {
  const offices = document.createElement("div");
  offices.classList.add("offices");

  offices.innerHTML = `
    <h2 class="offices__title">
      Офисы Softline
      <div class="offices__icon">
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 0.989502L11 9.01061L1 0.989502" stroke="#444444" stroke-width="2"/>
        </svg>
      </div>
    </h2>
  `;

  const cities = document.createElement("ul");
  cities.classList.add("offices__list");
  cities.style.display = "none";

  cities.innerHTML = `
    <li class="offices__item">
      <div class="offices__region-subtitle">
        Волга
        <div class="offices__item-icon">
          <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#444444"/>
          </svg>
        </div>
      </div>
      <ul class="offices__item-content">
        <li>Казань</li>
        <li>Самара</li>
        <li>Уфа</li>
        <li>Оренбург</li>
        <li>Нижний Новгород</li>
      </ul>
    </li>
    <li class="offices__item">
      <div class="offices__region-subtitle">
       Москва
        <div class="offices__item-icon">
          <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#444444"/>
          </svg>
        </div>
      </div>
      <ul class="offices__item-content">
        <li>Город name</li>
        <li>Город name</li>
        <li>Город name</li>
      </ul>
    </li>
    <li class="offices__item">
      <div class="offices__region-subtitle">
       Центр
        <div class="offices__item-icon">
          <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#444444"/>
          </svg>
        </div>
      </div>
      <ul class="offices__item-content">
        <li>Город name</li>
        <li>Город name</li>
        <li>Город name</li>
        <li>Город name</li>
      </ul>
    </li>
     <li class="offices__item">
      <div class="offices__region-subtitle">
       Северо-запад
        <div class="offices__item-icon">
          <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#444444"/>
          </svg>
        </div>
      </div>
      <ul class="offices__item-content">
        <li>Город name</li>
        <li>Город name</li>
        <li>Город name</li>
        <li>Город name</li>
        <li>Город name</li>
      </ul>
    </li>
  
  `;

  const officesTitle = offices.querySelector(".offices__title");
  const officesIcon = offices.querySelector(".offices__icon");

  officesTitle.addEventListener("click", function () {
    const mapHeader = document.querySelector(".map__header");
    cities.style.display = cities.style.display === "none" ? "flex" : "none";
    mapHeader.classList.toggle("is_open");
    officesIcon.classList.toggle("down");
  });

  const officeItems = cities.querySelectorAll(".offices__item");
  officeItems.forEach((item) => {
    const itemIcon = item.querySelector(".offices__item-icon");
    const itemContent = item.querySelector(".offices__item-content");
    const innerWidth = window.innerWidth;
    if (innerWidth < 1280) {
      item.addEventListener("click", function () {
        officeItems.forEach((otherItem) => {
          const otherItemContent = otherItem.querySelector(
            ".offices__item-content"
          );
          if (otherItem !== item) {
            otherItemContent.classList.remove("active");
            otherItemContent.style.display = "none";
            const otherItemIcon = otherItem.querySelector(
              ".offices__item-icon"
            );
            otherItemIcon.classList.remove("down");
          }
        });

        itemContent.classList.toggle("active");
        itemContent.style.display =
          itemContent.style.display === "block" ? "none" : "block";
        itemIcon.classList.toggle("down");
      });
    }
  });

  offices.appendChild(cities);

  return offices;
}
