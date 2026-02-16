export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }
  toggleAcordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    // adiciona os eventos ao accordion
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAcordion(item));
    });
  }

  // Iniciar função
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAcordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
