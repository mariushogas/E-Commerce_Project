// Popup Cart   //////////////////////////

// document.addEventListener("DOMContentLoaded", () => {
const productsCart = document.querySelector(".productsInCart");
const btnCartPopup = document.querySelector(".btnCart-popup");
const iconCloseCart = document.querySelector(".icon-close-cart");
// const thankYouPopUp = document.querySelector(".thankYouPopUp");
// const continueAndPay = document.querySelector(".btnContinuePay");
// const backHome = document.querySelector(".backToHome");

btnCartPopup.addEventListener("click", () => {
  productsCart.classList.add("active-popup");
});

iconCloseCart.addEventListener("click", () => {
  productsCart.classList.remove("active-popup");
});

// });

// Get item from local storage - "productList" - ///////

const searchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(searchParams.entries());

const productListStringGet = localStorage.getItem("productList");
if (!productListStringGet) {
  alert("Something went wrong to localStorage");
}
const productListShop = JSON.parse(productListStringGet);
///////////////////////////////////////////////////////////

let productsInCart = JSON.parse(localStorage.getItem("ShoppingCart"));
if (!productsInCart) {
  productsInCart = [];
}

///////////////////////////////////////////////////////////
const addToCartBtn = document.querySelector(".addToCart");
// const productInCart = productList.find(function (element) {
//   return element.id === params.productId;
// });
///////////////////////////////////////////////////////////

const parentElement = document.querySelector("#buyItems");
const parentElement2 = document.querySelector("#summary");
const cartSumPrice = document.querySelector(".total #sum-prices");
const products = document.querySelectorAll(".product-under");
const countProdCart = document.querySelector(".cart .quantity");
const checkoutSumPrice = document.querySelector(".grandTotal .sum-prices");
const shipping = document.querySelector(".shipping-prices");
const vatCheckout = document.querySelector(".vat-inlcuded");
const grandTotal = document.querySelector(".grand-total-number");
let quantity = document.querySelector(".quantity");

// 1
document.querySelectorAll(".addToCart").forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("You clicked me");

    const btnIdProduct = e.target.id;
    // console.log(btnIdProduct);

    for (let i = 0; i < productListShop.length; i++) {
      const productCart = productListShop[i];

      if (
        productCart.id === params.productId ||
        productCart.id === btnIdProduct
        // e.target.classList.contains("addCart")
      ) {
        const productId = productCart.id;
        const productName = productCart.title;
        const productPrice = productCart.price;
        const productImage = productCart.img;

        let productToCart = {
          name: productName,
          image: productImage,
          id: productId,
          count: 1,
          price: +productPrice, // "+" convert the "productPrice" to the integer
          basePrice: +productPrice,
        };

        updateProductsInCart(productToCart);
        updateShoppingCartHTML();
      }
    }
  });
});

// 2
function updateProductsInCart(product) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].count += 1;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].count;

      return;
    }
  }
  productsInCart.push(product);
}

// 3
const updateShoppingCartHTML = function () {
  localStorage.setItem("ShoppingCart", JSON.stringify(productsInCart));

  if (productsInCart.length > 0) {
    let result = productsInCart.map((product) => {
      return `
      <li class="buyItem">
        <img src="${product.image}">
        <div class="namePrice">
          <h4> ${product.name}</h4>
          <h4>$ ${product.price}</h4>
        </div>
        <div class = 'counter'>
          <button class='minus' data-id="${product.id}">-</button>
          <span class="countOfProduct">${product.count}</span>
          <button class='plus' data-id="${product.id}">+</button>
        </div>
      </li>
      `;
    });

    parentElement.innerHTML = result.join("");
    document.querySelector(".checkout").classList.remove("hidden");
    document.querySelector(".total").classList.remove("hidden");
    cartSumPrice.innerHTML = "$" + countTheSumPrice();
    countProdCart.innerHTML = countProdInCart();
  } else {
    document.querySelector(".checkout").classList.add("hidden");
    document.querySelector(".total").classList.add("hidden");
    parentElement.innerHTML =
      ' <h3 class="empty">Your shopping cart is <br> empty</h3>';
    // cartSumPrice.innerHTML = "";
  }
};

// 4
const countTheSumPrice = function () {
  let sumPrice = 0;
  productsInCart.forEach((product) => {
    sumPrice += product.price;
  });
  return sumPrice;
};

// 5
const countProdInCart = function () {
  let countCart = 0;
  productsInCart.forEach((product) => {
    countCart += product.count;
  });
  return countCart;
};

// 6
parentElement.addEventListener("click", (e) => {
  const isPlusButton = e.target.classList.contains("plus");
  const isMinusButton = e.target.classList.contains("minus");
  if (isPlusButton || isMinusButton) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        if (isPlusButton) {
          productsInCart[i].count += 1;
        } else if (isMinusButton) {
          productsInCart[i].count -= 1;
        }
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].count;
      }
      if (productsInCart[i].count < 0) {
        productsInCart.splice(i, 1);
      }
    }
    updateShoppingCartHTML();
  }
});

// 7
const summaryShoppingCartHTML = function () {
  // localStorage.setItem("ShoppingCart", JSON.stringify(productsInCart));

  if (productsInCart.length > 0) {
    let result = productsInCart.map((product) => {
      return `
      <li class="buyItem">
        <img src="${product.image}">
        <div class="namePrice">
          <h4 class="name"> ${product.name}</h4>
          <h4 class="price">$ ${product.price}</h4>
        </div>
        <div class = "counter">
          <span class="countOfProduct">x${product.count}</span>
        </div>
      </li>
      `;
    });

    if (countTheSumPrice() >= 999) {
      shipping.innerHTML = "$ 0";
    } else {
      shipping.innerHTML = "$ 50";
    }

    const shippingCost = shipping.innerHTML.match(/\d+/);

    parentElement2.innerHTML = result.join("");
    countProdCart.innerHTML = countProdInCart();
    checkoutSumPrice.innerHTML = "$ " + countTheSumPrice();
    vatCheckout.innerHTML = "$ " + (countTheSumPrice() * 19) / 100;

    const grandTotalSum =
      countTheSumPrice() + +shippingCost + (countTheSumPrice() * 19) / 100;

    grandTotal.innerHTML = "$ " + grandTotalSum;
  }
};

const checkOutCart = document.querySelector(".checkout");
checkOutCart.addEventListener("click", () => {
  window.location.href = "/checkout.html";
});

updateShoppingCartHTML();
summaryShoppingCartHTML();
