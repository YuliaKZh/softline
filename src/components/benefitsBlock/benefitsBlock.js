import "./benefitsBlock.scss";
export function BenefitsBlock({ icon, description }) {
  const benefitsBlock = document.createElement("li");
  benefitsBlock.className = "benefitsBlock";
  benefitsBlock.innerHTML = `
        <div class="benefitsBlock__icon">${icon}</div>
         <p class="benefitsBlock__description">${description}</p>
        `;
  return benefitsBlock;
}
