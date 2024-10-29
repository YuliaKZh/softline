export function InfoBlock() {
  const infoBlock = document.createElement("div");
  infoBlock.innerHTML = `
    <div class="infoBlock">
       <h3 class="infoBlock__title">Softline</h3>
        <p class="infoBlock__description">Ведущий поставщик IT-решений и сервисов.* Мы предлагаем комплексные IT-решения, облака, программное и аппаратное обеспечение, решения по цифровой трансформации и кибербезопасности, а также широкий спектр IT-услуг.</p>
    </div>
        `;
  return infoBlock;
}
