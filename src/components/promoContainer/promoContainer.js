import { PromoBlock } from "../promoBlock/promoBlock";
import "../promoBlock/promoBlock.scss";

const promoData = [
  { title: "> 30 лет", description: "на IT-рынке" },
  { title: "4600", description: "сотрудников в России" },
  { title: "25", description: "городов России" },
  { title: "2000 +", description: "разработчиков" },
  {
    title: "3000 +",
    description: "сотрудников ежегодно проходят оценку и обучение",
  },
];

const promoElements = promoData.map((element) => PromoBlock(element));

export function PromoContainer({ className }) {
  const promoContainer = document.createElement("ul");
  promoContainer.className = `promoContainer ${className}`;

  promoElements.forEach((element) => promoContainer.appendChild(element));

  return promoContainer;
}
