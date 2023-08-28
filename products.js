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
  const currency_price = document.createElement("div");
  const price = createCustomElement("p", `${productPrice}`, "price");
  const span = document.createElement("span");

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
  currency_price.classList.add("currencyAndPrice");
  info.appendChild(currency_price);
  currency_price.appendChild(span);
  currency_price.appendChild(price);
  span.innerHTML = `${currency}`;

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

const selectBtn = document.querySelectorAll(".dropDown-btn");
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
    let matches = Number(item.id.replace(/[^0-9]/g, ""));

    const productPrices = document.querySelectorAll(".price");
    // const card = document.querySelectorAll(".card");

    if (item.checked === true) {
      productPrices.forEach((item) => {
        let price = +item.innerHTML;
        console.log(matches);

        if (matches < price && price <= matches + 999) {
          const productCard = item.closest(".card");
          productCard.style.display = "block";
        } else {
          const productCard = item.closest(".card");
          productCard.style.display = "none";
        }
      });
    }
    if (item.checked === false) {
      productPrices.forEach((item) => {
        let price = +item.innerHTML;

        if (matches < price && price <= matches + 999) {
          const productCard = item.closest(".card");
          productCard.style.display = "none";
        }
        // else {
        //   const productCard = item.closest(".card");
        //   productCard.style.display = "block";
        // }
      });
    }
  });
});

// for (let i = 0; i < productList.length; i++) {
//   const product = productList[i];

//   // console.log(matches);
//   // console.log(product.price);
//   // console.log(product.category);
//   // console.log(product.number);

//   const card = document.querySelectorAll(".card");
//   const productSelected = document.querySelectorAll(`.${product.category}`);
//   // console.log(productSelected);

//   // console.log(card);

//   for (let i = 0; i < productSelected.length; i++) {
//     if (
//       3000 < matches &&
//       matches <= 3999 &&
//       3000 < product.price &&
//       product.price <= 3999 &&
//       product.number == [i]
//     ) {
//       // console.log(matches);
//       // console.log(product.price);
//       console.log(product.category);
//       console.log(productSelected.length);
//       // console.log(productSelected);
//       product.category.style.display = "block";
//     }
//     // else {
//     //
//     //   productSelected.style.display = "none";
//     // }
//   }
// }

const checkOutProducts = document.querySelector(".checkout");
checkOutProducts.addEventListener("click", () => {
  window.location.href = "/checkout.html";
});

generateList();

function myFunction(x) {
  if (x.matches) {
    const selectBtn = document.querySelectorAll(".dropDown-btn");
    // const verticalLine = document.querySelector(".verticalLine");
    // const list = document.querySelector(".list");

    selectBtn.forEach((item) => {
      item.addEventListener("click", () => {
        window.onload;
        // console.log(item.parentNode);
        const btnSelected = item.parentNode;
        // console.log(btnSelected);
        const vertical = item.children[0];
        // console.log(vertical);
        const list = btnSelected.children[1];
        // console.log(list);

        for (let i = 0; i < selectBtn.length; i++) {
          console.log(selectBtn[i].parentNode);
          console.log(btnSelected);

          if (selectBtn[i].parentNode === btnSelected) {
            vertical.style.visibility = "hidden";
            list.style.display = "none";
            item.style.background = "white";
          } else {
            vertical.style.visibility = "visible";
            list.style.display = "block";
            item.style.background = "$lightGrey";
          }
        }
      });
    });
  } else {
    const selectBtn = document.querySelectorAll(".dropDown-btn");
    const selectAll = document.querySelector(".item.select-all input");
    const allCheckbox = document.querySelectorAll(
      ".item:not(.select-all) input"
    );
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
        let matches = Number(item.id.replace(/[^0-9]/g, ""));

        const productPrices = document.querySelectorAll(".price");
        // const card = document.querySelectorAll(".card");

        if (item.checked === true) {
          productPrices.forEach((item) => {
            let price = +item.innerHTML;
            console.log(matches);

            if (matches < price && price <= matches + 999) {
              const productCard = item.closest(".card");
              productCard.style.display = "block";
            } else {
              const productCard = item.closest(".card");
              productCard.style.display = "none";
            }
          });
        }
        if (item.checked === false) {
          productPrices.forEach((item) => {
            let price = +item.innerHTML;

            if (matches < price && price <= matches + 999) {
              const productCard = item.closest(".card");
              productCard.style.display = "none";
            }
            // else {
            //   const productCard = item.closest(".card");
            //   productCard.style.display = "block";
            // }
          });
        }
      });
    });
  }
}

const x = window.matchMedia("(max-width: 1365px)");
myFunction(x);
// Call listener function at run time
// x.addEventListener(myFunction);
