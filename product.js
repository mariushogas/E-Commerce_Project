// pseudocodurl

// 1. Luam id-ul din url
// 2. Parcurgem lista si cautam id-ul din url
// 3. Luam din produsul identificat prin id, toate proprietatile de care avem nevoie

const searchParamsProduct = new URLSearchParams(window.location.search);
const paramsProduct = Object.fromEntries(searchParamsProduct.entries());

// console.log(params.productIda);
// console.log(window.location.search);

const productListString = localStorage.getItem("productList");

if (!productListString) {
  alert("Something went wrong, please check Local Storage !");
}

const productList = JSON.parse(productListString);

// console.log(productList);

// "filter" returneaza o lista de elemente
// daca nu exista id-ul cautat "filter" returneaza "[]" (array gol)

// "find" returneaza un singur element
// daca nu exista id-ul cautat, "find" returneaza "undefined"

const product = productList.find(function (element) {
  return element.id === paramsProduct.productId;
});

if (!product) {
  alert("Product is missing");
} else {
  const img = document.querySelector(".product-img img");
  const newProduct = document.querySelector(".newProduct");
  const title = document.querySelector(".productName");
  const description = document.querySelector(".descriptionProduct");
  const price = document.querySelector(".price");
  const features = document.querySelector(".features");

  const thumbnails = document.getElementsByClassName("thumbnail");
  const thumbnailImg1 = document.querySelector(".thumbnailImg1");
  const thumbnailImg2 = document.querySelector(".thumbnailImg2");
  const thumbnailImg3 = document.querySelector(".thumbnailImg3");
  const thumbnailImg4 = document.querySelector(".thumbnailImg4");
  const activeImages = document.getElementsByClassName("active");

  thumbnailImg1.setAttribute("src", product.thumbnail1);
  thumbnailImg1.setAttribute("alt", product.thumbnailAlt1);
  thumbnailImg2.setAttribute("src", product.thumbnail2);
  thumbnailImg2.setAttribute("alt", product.thumbnailAlt2);
  thumbnailImg3.setAttribute("src", product.thumbnail3);
  thumbnailImg3.setAttribute("alt", product.thumbnailAlt3);
  thumbnailImg4.setAttribute("src", product.thumbnail4);
  thumbnailImg4.setAttribute("alt", product.thumbnailAlt4);

  img.setAttribute("src", product.img);
  img.setAttribute("alt", product.alt);
  newProduct.textContent = product.tag;
  title.textContent = product.title;
  description.textContent = product.shortDescription;
  price.textContent = `${product.currency} ${product.price}`;
  features.textContent = product.features;

  // Create thumbnail images

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", (e) => {
      if (activeImages.length > 0) {
        activeImages[0].classList.remove("active");
      }

      thumbnails[i].classList.add("active");
      document.querySelector(".bigImg").src = thumbnails[i].src;
    });
  }

  function createAccessoriesBox() {
    for (let i = 0; i < productList.length; i++) {
      if (productList[i].id === paramsProduct.productId) {
        const boxLength = product.inTheBox.length;
        const productBox = product.inTheBox;

        for (let i = 0; i < boxLength; i++) {
          const box = document.querySelector(".inTheBox");
          const acc = document.createElement("li");
          const accQty = document.createElement("span");
          const accItem = document.createElement("span");

          acc.classList.add("accessories");
          accQty.classList.add("qty");
          accItem.classList.add("item");

          box.appendChild(acc);
          acc.appendChild(accQty);
          acc.appendChild(accItem);

          accQty.textContent = productBox[i].qty;
          accItem.textContent = productBox[i].item;
        }
      }
    }
  }
  createAccessoriesBox();

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

  function createImages() {
    const imgBox = document.querySelector(".product-images");

    if (!imgBox) {
      alert("Something went wrong !");
      return;
    }

    const imgFirst = createImg(product.img_1, product.prodAlt);
    imgFirst.classList.add("img1");

    const imgSecond = createImg(product.img_2, product.prodAlt);
    imgSecond.classList.add("img2");

    const imgThird = createImg(product.img_3, product.prodAlt);
    imgThird.classList.add("img3");

    imgBox.appendChild(imgFirst);
    imgBox.appendChild(imgSecond);
    imgBox.appendChild(imgThird);
  }
  createImages();

  function generateAlsoList() {
    const alsoProd1 = document.querySelector(".also .prod1 .prod1-img");
    const alsoProd2 = document.querySelector(".also .prod2 .prod2-img");
    const alsoProd3 = document.querySelector(".also .prod3 .prod3-img");

    for (let i = 0; i < productList.length; i++) {
      let product1,
        product2,
        product3 = 0;

      if (productList[i].id === paramsProduct.productId) {
        if (i < productList.length / 2) {
          product1 = productList[i + 1];
          product2 = productList[i + 2];
          product3 = productList[i + 3];
        } else {
          product1 = productList[i - 3];
          product2 = productList[i - 2];
          product3 = productList[i - 1];
        }

        const alsoImgProd1 = createImg(product1.img, product1.prodAlt);
        alsoImgProd1.classList.add("product1-img");
        const alsoImgProd2 = createImg(product2.img, product2.prodAlt);
        alsoImgProd2.classList.add("product2-img");
        const alsoImgProd3 = createImg(product3.img, product3.prodAlt);
        alsoImgProd3.classList.add("product3-img");

        alsoProd1.appendChild(alsoImgProd1);
        alsoProd2.appendChild(alsoImgProd2);
        alsoProd3.appendChild(alsoImgProd3);

        const productName1 = document.querySelector(".prod1 h2");
        productName1.textContent = product1.title;
        const productName2 = document.querySelector(".prod2 h2");
        productName2.textContent = product2.title;
        const productName3 = document.querySelector(".prod3 h2");
        productName3.textContent = product3.title;
      }
    }
  }
  generateAlsoList();

  const btnBack = document.querySelector(".btnGoBack");
  btnBack.addEventListener("click", (e) => {
    if (product.category === "body") {
      window.location.href = "/bodyCategory.html";
    } else if (product.category === "lens") {
      window.location.href = "/lensCategory.html";
    } else {
      window.location.href = "/flashCategory.html";
    }
  });
}
