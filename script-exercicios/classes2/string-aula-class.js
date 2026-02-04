// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement("button");
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
  static blueButton(text) {
    return new Button(text, "blue", "white");
  }
}

const botaoAzul = Button.blueButton("Comprar");

// class Button {
//   constructor(options) {
//     this.options = options;
//   }

//   static createButton(text, background) {
//     const buttonElment = document.createElement("button");
//     buttonElment.innerText = text;
//     buttonElment.style.background = background;
//     return buttonElment;
//   }
// }
// const blueButton = new Button({
//   backgroundColor: "blue",
//   text: "Comprar",
//   color: "white",
// });

// const blueButtonStatic = Button.createButton("Clique", "blue");
