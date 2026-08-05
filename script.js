  async function ElectPdt() {
    try{
    const res= await fetch('https://dummyjson.com/products/search?q=phone');
    const data =await res.json();
    console.log(data.products);
    const heroContainer=document.querySelector('.hero');
      data.products.forEach(element => {
      heroContainer.innerHTML+=
  `<div class="cards">
    <img id="card-img" src="${element.thumbnail
    }" alt="">
    <h1>${element.title}
    </h1>
    <p id="price">₹${element.price}</p>
    <button id="cart-btn">Add to cart</button>
  </div>`
    });
  }
   catch(error){
    console.log("Error");
  }
  }
  ElectPdt();


  async function MakeupPdt() {
    try{
    const res= await fetch('https://dummyjson.com/products');
    const data =await res.json();
    console.log(data.products);
    const heroContainer=document.querySelector('.hero');
      data.products.forEach(element => {
      heroContainer.innerHTML+=
  `<div class="cards">
    <img id="card-img" src="${element.thumbnail
    }" alt="">
    <h1>${element.title}
    </h1>
    <p id="price">₹${element.price}</p>
    <button id="cart-btn">Add to cart</button>
  </div>`
    });
  }
  catch(error){
    console.log("Error");
  }
  }
  MakeupPdt();