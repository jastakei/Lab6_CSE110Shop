window.addEventListener('DOMContentLoaded', () => {
    // TODO
    if (localStorage.getItem("items") === null) {
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => localStorage.setItem('items', JSON.stringify(data)))
      .then(() => {
        loadData();
      })
    } else {
      loadData();
    }
  });
  
  
  function loadData() {
    const item = window.localStorage.getItem('items');
    const list = document.getElementById("product-list");
    var obj = JSON.parse(item);
    obj.forEach(element => {
      const newItm = new ProductItem(element);
      list.appendChild(newItm);
      newItm.setAttribute("id", element["id"]);
    });
  }
  //to save memory in reload
  window.addEventListener('load', (event) => {
    const addeditems = window.localStorage.getItem("ids");
    const count = document.getElementById('cart-count');
    var inCart = JSON.parse(addeditems);
      if(inCart != null) {
        inCart.forEach(element => {
          var object = document.getElementById(element);
          console.log(object);
          object.shadowRoot.querySelector('#button').innerText = 'Remove from Cart';
          count.setAttribute('textContent', parseInt(++count.textContent));
          this.addItem = !this.addItem;
    
    });
      }
  });