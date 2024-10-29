import { Header } from "./components/header/header";
import { InfoBlock } from "./components/infoBlock/infoBlock";
import { PromoContainer } from "./components/promoContainer/promoContainer";
import { BenefitsContainer } from "./components/benefitsContainer/benefitsContainer";
import { SpoilerContainer } from "./components/spoilerContainer/spoilerContainer";
import { Slider } from "./components/slider/slider";

import { Map } from "./components/map/map";
import { Mission } from "./components/mission/mission";
import "./app.scss";
import "./components/header/header.scss";
import "./components/infoBlock/infoBlock.scss";
import "./components/offices/offices.scss";
import "./components/map/map.scss";
import "./components/mission/mission.scss";
import "./components/promoContainer/promoContainer.scss";
import "./components/benefitsContainer/benefitsContainer.scss";
import "./components/spoiler/spoiler.scss";
import "./components/spoilerContainer/spoilerContainer.scss";
import "swiper/css";
import "./components/slider/slider.scss";

export function App() {
  const appElement = document.createElement("div");
  appElement.className = "app";
  appElement.appendChild(Header({ className: "app__header" }));
  appElement.appendChild(InfoBlock());
  appElement.appendChild(PromoContainer({ className: "app__main-block" }));
  appElement.appendChild(Map({ className: "app__main-block" }));
  appElement.appendChild(Mission({ className: "app__main-block" }));

  const titleElement = document.createElement("h2");
  titleElement.className = "app__title";
  titleElement.textContent = "Направления бизнеса";
  appElement.appendChild(titleElement);
  appElement.appendChild(SpoilerContainer());
  appElement.appendChild(BenefitsContainer({ className: "app__bottom-block" }));
  const sliderTitleElement = document.createElement("h2");
  sliderTitleElement.className = `app__title app__title_left app__bottom-block`;
  sliderTitleElement.textContent = "Корпоративная жизнь";
  appElement.appendChild(sliderTitleElement);
  appElement.appendChild(Slider());

  return appElement;
}
