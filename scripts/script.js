// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  //if (localStorage.getItem("array") === null) {
    
 fetch('https://fakestoreapi.com/products') 
  .then(response => response.json())
  .then(result => localStorage.setItem('array', JSON.stringify(result)))
  //}


});
window.addEventListener("load", function(){
var node = document.createElement("product-item");
    node.setAttribute('item', "idkkkk");
    
//node.setAttribute()
document.getElementById("product-list").appendChild(node);
});