  async function ElectPdt() {
    try{
    const res= await fetch('https://dummyjson.com/products/search?q=phone');
    const data =await res.json();
    // console.log(data.products);
    const heroContainer=document.querySelector('.hero');
      data.products.forEach(element => {
      heroContainer.innerHTML+=
  `<div class="cards">
    <img class="card-img" src="${element.thumbnail
    }" alt="">
    <h1>${element.title}
    </h1>
    <p class="price">₹${element.price}</p>
    <button class="cart-btn">Add to cart</button>
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
    <img class="card-img" src="${element.thumbnail
    }" alt="">
    <h1>${element.title}
    </h1>
    <p id="price">₹${element.price}</p>
    <button class="cart-btn">Add to cart</button>
  </div>`
    });
  }
  catch(error){
    console.log("Error");
  }
  }
  MakeupPdt();


  const show=document.querySelectorAll(".sub-container,.aside-container,.cat-btn,.choice");
  const buton=document.querySelector("#mode");
  const bdy=document.querySelector("body");
  const top1=document.querySelectorAll("header,.nav");

  const change=()=>{
  show.forEach(element=>{
    element.classList.toggle("theme");
  })
    buton.style.border="1px solid blue";
    if(show[0].classList.contains("theme")){
      buton.innerHTML=`<i class="fa-solid fa-sun"></i>`;
        bdy.style.background = "linear-gradient(to right, orange, white, green)";
        top1.forEach(ele=>{
          ele.style.color="#ffffff";
        })
    }
    else{
       buton.innerHTML=`<i class="fa-regular fa-moon"></i>`
        bdy.style.backgroundColor="#ffffff"
         top1.forEach(ele=>{
          ele.style.color="#000000";
        })
    }
     
    
  }

  buton.addEventListener("click",change);






  