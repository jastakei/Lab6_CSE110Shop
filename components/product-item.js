// product-item.js
const template = document.createElement('template');
template.innerHTML = `
    <style>
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }
    
    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas: 
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }
    
    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }
    
    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }
    
    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }
    
    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }
    </style>
    <li class="product">
                    <img />
                    <p class="title"></p>
                    <p class="price"></p>
                    <button onclick="alert('Added to Cart!')">Add to Cart</button>
                </li>
      `;

class ProductItem extends HTMLElement {
  // TODO
  constructor() {
    
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    
    this.shadowRoot.querySelector('.title').innerText = 'hi';//this.getAttribute('.title');           //get title;
    this.shadowRoot.querySelector('.price').innerText = 'bye';//this.getAttribute('.price');//get price
    this.shadowRoot.querySelector('img').src = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';//this.getAttribute('img') //get img src
    this.shadowRoot.querySelector('img').width = 200;
  }
  /*connectedCallBack() {
    this.shadowRoot.querySelector(#)
  }

  attributeChangedCallback (attributeName, oldValue, newValue); {

  }*/
}
  customElements.define('product-item', ProductItem);


   
  






