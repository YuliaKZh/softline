export function Mission({ className }) {
  const mission = document.createElement("div");
  mission.className = `mission ${className}`;
  mission.innerHTML = `
    <h2 class="mission__title">Миссия <span class="mission__title_lite">Softline</span></h2>
    <p class="mission__description">Мы помогаем организациям трансформироваться, работать эффективно и безопасно в условиях цифровой экономики.</p>
        `;
  return mission;
}
