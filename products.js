const productListString = localStorage.getItem("productList");

if (!productListString) {
  alert("Something went wrong, please check LocalStorage !");
}

const productList = JSON.parse(productListString);
// stocam in variabila "productList" obiectul convertit anterior in localStorage intr-un obiect javascript

function createImg(imgUrl, alt) {
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", imgUrl);
  imgElement.setAttribute("alt", alt);
  return imgElement;
}

function createCustomElement(element, text, elementClass) {
  const newElement = document.createElement(element);
  newElement.textContent = text;
  if (elementClass) {
    newElement.classList.add(elementClass);
  }
  return newElement;
}

function createCardElement(
  id,
  category,
  imgUrl,
  imgAlt,
  productTitle,
  productPrice,
  currency
) {
  const card = document.createElement("div");
  const productImg = document.createElement("div");
  const img = createImg(imgUrl, imgAlt);
  const info = document.createElement("div");
  const title = createCustomElement("h2", productTitle);
  const price = createCustomElement(
    "p",
    `${currency} ${productPrice} `,
    "price"
  );

  const addToCart = createCustomElement("button", "Add to cart", "addToCart");
  addToCart.setAttribute("id", `${id}`);
  card.classList.add("card");
  card.classList.add(`${category}`);
  card.classList.add("product-under");
  card.appendChild(productImg);
  card.appendChild(info);
  card.appendChild(addToCart);
  productImg.classList.add("productImg");
  productImg.appendChild(img);
  info.classList.add("info");
  info.appendChild(title);
  info.appendChild(price);

  return card;
}

function generateList() {
  const productListElement = document.querySelector(".product-list");

  if (!productListElement) {
    alert("Something went wrong !");
    return;
  }

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    const cardElement = createCardElement(
      product.id,
      product.category,
      product.img,
      product.alt,
      product.title,
      product.price,
      product.currency
    );
    productListElement.appendChild(cardElement);
  }
}

// Filter Section //

const selectBtn = document.querySelectorAll(".category-btn");
const selectAll = document.querySelector(".item.select-all input");
const allCheckbox = document.querySelectorAll(".item:not(.select-all) input");
const btnText = document.querySelector(".btn-text");
const selectPrice = document.querySelectorAll(".priceFilter .item input ");
let listBoolean = [];

// Filter Section - DropDown Btn
selectBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Filter Section - Check Box - Checked

window.addEventListener("DOMContentLoaded", () => {
  selectAll.checked = true;
  allCheckbox.forEach((i) => {
    i.checked = true;
  });
  selectPrice.forEach((i) => {
    i.checked = false;
  });
});

allCheckbox.forEach((item) => {
  item.addEventListener("change", () => {
    allCheckbox.forEach((i) => {
      listBoolean.push(i.checked);
    });
    if (listBoolean.includes(false)) {
      selectAll.checked = false;
    } else {
      selectAll.checked = true;
    }

    let counter = listBoolean.filter(Boolean).length;
    btnText.innerHTML = `Category (${counter})`;

    listBoolean = [];
  });
});

allCheckbox.forEach((item) => {
  item.addEventListener("change", () => {
    const itemId = item.id;
    const card = document.querySelectorAll(`.${itemId}`);

    for (let i = 0; i < allCheckbox.length; i++) {
      if (item.checked === true) {
        card.forEach((item) => {
          item.style.display = "block";
        });
      } else {
        card.forEach((item) => {
          item.style.display = "none";
        });
      }
    }

    selectAll.addEventListener("change", () => {
      if (selectAll.checked) {
        allCheckbox.forEach((i) => {
          i.checked = true;
        });
        card.forEach((item) => {
          item.style.display = "block";
        });
      } else {
        allCheckbox.forEach((i) => {
          i.checked = false;
        });
        card.forEach((item) => {
          item.style.display = "none";
        });
      }
    });
  });
});

selectPrice.forEach((item) => {
  item.addEventListener("change", () => {
    // const itemId = item.id;

    let matches = Number(item.id.replace(/[^0-9]/g, ""));

    for (let i = 0; i < productList.length; i++) {
      const product = productList[i];

      // console.log(matches);
      // console.log(product.price);
      // console.log(product.category);
      const card = document.querySelectorAll(".card .info .price");

      console.log(card);

      for (let i = 0; i < card.length; i++) {
        // card.forEach((item) => {
        // console.log(productSelected);

        const productSelected = product.category;

        // if (
        //   0 < matches &&
        //   matches <= 499 &&
        //   0 < product.price &&
        //   product.price <= 499
        // ) {
        //   console.log(product.price);
        //   console.log(product.category);
        //   console.log(productSelected);

        //   // alert("a intrat in if");
        //   productSelected.style.display = "block";
        // }
        // else {
        //   // alert("NU a intrat in if");
        //   productSelected.style.display = "none";
        // }
        // });
      }
    }
  });
});

const checkOutProducts = document.querySelector(".checkout");
checkOutProducts.addEventListener("click", () => {
  window.location.href = "/checkout.html";
});

generateList();
