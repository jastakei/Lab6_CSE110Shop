// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if (localStorage.getItem("array") === null) {
    var response = fetch('https://fakestoreapi.com/products');
    let text = response.text();
    localStorage.setItem('array', text);
  }


});
window.addEventListener("load", function(){
var node = document.createElement("product-item");
//node.setAttribute()
document.getElementById("product-list").appendChild(node);
});