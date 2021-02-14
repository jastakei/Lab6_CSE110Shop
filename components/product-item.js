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
                    <img width = 200>
                    <p class="title"></p>
                    <p class="price"></p>
                    <button id = "button"> Add to Cart</button>
                </li>
      
`;

class ProductItem extends HTMLElement {
  // TODO
  constructor(obj) {

    super();
    
    this.addItem = true;
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector('.title').innerText = obj["title"];           
    this.shadowRoot.querySelector('.price').innerText = '$' + obj["price"];
    this.shadowRoot.querySelector('img').src = obj["image"];
    this.shadowRoot.querySelector('img').alt = obj["title"];
    this.shadowRoot.querySelector('img').height = 250;
    //this.shadowRoot.querySelector('button'),name = this.getAttribute("id");
  }

  //Function when addTo/RemoveFrom Cart 
  AddtoCart() {
    const counter = document.getElementById('cart-count');
    const idnum = this.getAttribute('id'); 
    //const id = JSON.stringify(idnum); 
    const btn = this.shadowRoot.querySelector('#button');
    var strlist = JSON.parse(localStorage.getItem('ids')) || [];

    if(btn.innerText == 'Add to Cart') {    
      alert("Added to Cart!");
      counter.setAttribute('textContent', parseInt(++counter.textContent));
      btn.innerText = 'Remove from Cart';
      if (strlist.indexOf(idnum) != idnum) {
        strlist.push(idnum);
        localStorage.setItem('ids', JSON.stringify(strlist));
      }
      //this.addItem = !this.addItem;
    } else {
      //alert("remove");
      counter.setAttribute('textContent', parseInt(--counter.textContent));
      btn.innerText = 'Add to Cart';
      strlist.splice(strlist.indexOf(idnum),1);
      localStorage.setItem('ids', JSON.stringify(strlist));
    }
  }

  
  connectedCallback(){
    this.shadowRoot.querySelector('#button').addEventListener("click", () => this.AddtoCart());
  }

  disconnectedCallback(){
    this.shadowRoot.querySelector('#button').removeEventListener();
  }
}
   customElements.define('product-item', ProductItem);