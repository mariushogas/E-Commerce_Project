const productListString = localStorage.getItem("productList");

if (!productListString) {
  alert("Ceva s-a intamplat, trebuie vazut in localStorage");
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
  imgUrl,
  imgAlt,
  productTag,
  productTitle,
  productDescription
) {
  const card = document.createElement("div");
  const anchor = document.createElement("a");
  const productImg = document.createElement("div");
  const img = createImg(imgUrl, imgAlt);
  const info = document.createElement("div");
  const subTitle = createCustomElement("h3", productTag);
  const title = createCustomElement("h2", productTitle);
  const description = createCustomElement("p", productDescription);

  const seeProduct = createCustomElement("button", "SEE PRODUCT", "seeProduct");

  card.classList.add("card");
  card.appendChild(productImg);
  card.appendChild(info);
  card.appendChild(anchor);

  anchor.setAttribute("href", `/productPrototype.html?productId=${id}`);
  anchor.appendChild(seeProduct);

  productImg.classList.add("productImg");
  productImg.appendChild(img);

  info.classList.add("info");
  info.appendChild(subTitle);
  info.appendChild(title);
  info.appendChild(description);

  return card;
}

function generateList() {
  // const productListElement = document.getElementsByClassName("product-list");
  const productListElement = document.querySelector(".flash .container");

  if (!productListElement) {
    alert("S-a facut o greseala");
    return;
  }

  for (let i = 0; i < productList.length; i++) {
    const product = productList[i];

    if (product.category === "flash") {
      const cardElement = createCardElement(
        product.id,
        product.img,
        product.alt,
        product.tag,
        product.title,
        product.shortDescription
      );
      productListElement.appendChild(cardElement);
    }
  }
}

generateList();
