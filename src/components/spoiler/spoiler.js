export function Spoiler({ title, description, bgImage }) {
  let isVisible = false;
  const spoiler = document.createElement("li");
  spoiler.className = `spoiler ${bgImage}`;
  const renderIcon = () => {
    return isVisible
      ? `
          <svg
            width="24"
            height="17"
            viewBox="0 0 24 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_8370_2598)">
              <path
                d="M18.4285 8.21423L11.9999 1.78566L5.57132 8.21423"
                stroke="white"
                stroke-width="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_8370_2598"
                x="0.864258"
                y="0.37146"
                width="22.2712"
                height="16.5499"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_8370_2598"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_8370_2598"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        `
      : `
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.57153 0.785767L8.0001 7.21434L14.4287 0.785767"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        `;
  };
  spoiler.innerHTML = `
         <div class="spoiler__title">
          ${title}
          <div class="spoiler-icon">
            ${renderIcon()}
          </div>
        </div> 
      <div class="spoiler__description">${description}</div>
    `;

  const spoilerTitle = spoiler.querySelector(".spoiler__title");
  const spoilerIcon = spoiler.querySelector(".spoiler-icon");

  spoilerTitle.addEventListener("click", function (event) {
    event.target.closest(".spoiler").classList.toggle("visible");
    isVisible = !isVisible;
    spoilerIcon.innerHTML = renderIcon();
  });

  return spoiler;
}
