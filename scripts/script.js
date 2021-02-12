// Script.js

window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if (localStorage.getItem("array") === null) {
    let response = await fetch('https://fakestoreapi.com/products');
    let text = await response.text();
    localStorage.setItem('array', text);
  }
  
  
});