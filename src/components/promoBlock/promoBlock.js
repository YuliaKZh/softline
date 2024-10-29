export function PromoBlock({ title, description }) {
  const promoBlock = document.createElement("li");
  promoBlock.innerHTML = `
       <h2 class="promoBlock__title">${title}</h2>
        <p class="promoBlock__description">${description}</p>
        `;
  return promoBlock;
}
