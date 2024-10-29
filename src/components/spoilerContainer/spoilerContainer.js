import { Spoiler } from "../spoiler/spoiler";
import "../spoiler/spoiler.scss";

const spoilerData = [
  {
    title: "Решения Softline",
    description:
      "ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.",
    bgImage: "solution",
  },
  {
    title: "Кибербезопасность",
    description:
      "Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. ",
    bgImage: "kiber",
  },
  {
    title: "Импортозамещение",
    description:
      "ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.",
    bgImage: "import",
  },
  {
    title: "Облачные решения",
    description:
      "Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.",
    bgImage: "cloud",
  },
  {
    title: "Цифровая трансформация и разработка ПО",
    description:
      "Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.",
    bgImage: "po",
  },
  {
    title: "Техническая поддержка Softline",
    description:
      "200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.",
    bgImage: "support",
  },
];

const spoilerElements = spoilerData.map((element) => Spoiler(element));

export function SpoilerContainer() {
  const spoilerContainer = document.createElement("ul");
  spoilerContainer.className = "spoilerContainer";

  spoilerElements.forEach((element) => spoilerContainer.appendChild(element));

  return spoilerContainer;
}
