// Liste 5 objetos nativos
// String, Boolean, Number, Function, Array

// Liste 5 objetos do browser
// HTMLCollection, HTMLElement, Document, window,

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof Document.webkitHidden !== "undefined") {
  console.log("Não existe");
} else {
  console.log("Existe");
}
