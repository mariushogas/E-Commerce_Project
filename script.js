const productListStringScript = localStorage.getItem("productList");
if (!productListStringScript) {
  alert("Something went wrong in localStorage");
}
const productListScript = JSON.parse(productListStringScript);

document.addEventListener("DOMContentLoaded", () => {
  const plus = document.querySelector(".plus");
  const minus = document.querySelector(".minus");
  const num = document.querySelector(".num");

  let a = 1;
  plus.addEventListener("click", () => {
    a++;
    num.innerText = a;
  });
  minus.addEventListener("click", () => {
    if (a > 1) {
      a--;
      num.innerText = a;
    }
  });
});

document.addEventListener("DOMContentLoaded", (ev) => {
  const bodies = document.getElementById("bodies");
  bodies.addEventListener("click", function (e) {
    window.location.href = "/bodyCategory.html";
  });

  const lenses = document.getElementById("lenses");
  lenses.addEventListener("click", function (e) {
    window.location.href = "/lensCategory.html";
  });

  const access = document.getElementById("flash");
  access.addEventListener("click", function (e) {
    window.location.href = "/flashCategory.html";
  });

  const alpha9 = document.getElementById("alpha9");
  alpha9.addEventListener("click", function (e) {
    window.location.href = "/productPrototype.html?productId=item-0";
  });

  const gMaster = document.getElementById("g-master");
  gMaster.addEventListener("click", function (e) {
    window.location.href = "/productPrototype.html?productId=item-3";
  });

  const gSsm = document.getElementById("g-ssm");
  gSsm.addEventListener("click", function (e) {
    window.location.href = "/productPrototype.html?productId=item-4";
  });

  const cameraFlash = document.getElementById("hvlFlash");
  cameraFlash.addEventListener("click", function (e) {
    window.location.href = "/productPrototype.html?productId=item-5";
  });
});

const shopBtn = document.querySelector(".shop");
shopBtn.addEventListener("click", (e) => {
  if (product.category === "body") {
    window.location.href = "/bodyCategory.html";
  } else if (product.category === "lens") {
    window.location.href = "/lensCategory.html";
  } else {
    window.location.href = "/flashCategory.html";
  }
});

// Login & Register Form

// const loginRegisterForm = document.querySelector(".loginRegisterForm");
// const loginLink = document.querySelector(".login-link");
// const registerLink = document.querySelector(".register-link");
// const btnPopup = document.querySelector(".btnLogin-popup");
// const iconClose = document.querySelector(".icon-close");

// registerLink.addEventListener("click", () => {
//   loginRegisterForm.classList.add("active");
// });
// loginLink.addEventListener("click", () => {
//   loginRegisterForm.classList.remove("active");
// });

// btnPopup.addEventListener("click", () => {
//   loginRegisterForm.classList.add("active-popup");
// });

// iconClose.addEventListener("click", () => {
//   loginRegisterForm.classList.remove("active-popup");
// });

// Hero "See Product" Buttons & "Shop" Buttons

// document.addEventListener("DOMContentLoaded", (ev) => {
//   const alpha9 = document.getElementById("alpha9");
//   alpha9.addEventListener("click", function (e) {
//     window.location.href = "/page5.html";
//   });
// });
// document.addEventListener("DOMContentLoaded", (ev) => {
//   const alpha7 = document.getElementById("alpha7r");
//   alpha7.addEventListener("click", function (e) {
//     window.location.href = "/page6.html";
//   });
// });
// document.addEventListener("DOMContentLoaded", (ev) => {
//   const alphafx = document.getElementById("alphaFX3");
//   alphafx.addEventListener("click", function (e) {
//     window.location.href = "/page7.html";
//   });
// });
// document.addEventListener("DOMContentLoaded", (ev) => {
//   const gMaster = document.getElementById("g-master");
//   gMaster.addEventListener("click", function (e) {
//     window.location.href = "/page8.html";
//   });
// });
// document.addEventListener("DOMContentLoaded", (ev) => {
//   const gSsm = document.getElementById("g-ssm");
//   gSsm.addEventListener("click", function (e) {
//     window.location.href = "/page9.html";
//   });
// });
// document.addEventListener("DOMContentLoaded", (ev) => {
//   const flash = document.getElementById("flash");
//   flash.addEventListener("click", function (e) {
//     window.location.href = "/page10.html";
//   });
// });

// Generate List

// const listLength = 6;
// const productList = [
//   {
//     id: "item-0",
//     category: "body",
//     title: "Sony a9 II",
//     shortDescription: `The α9 II offers advances that answer the demands of professional workflows, including sophisticated
//     operability and network connectivity for enhanced support in the field, rugged go-anywhere reliability and
//     unrivalled speed.`,
//     img: "/images/alpha9.png",
//     alt: "Alpha9 Image",
//     price: "4999",
//     currency: "$",
//     tag: "New Product",
//     features: `Sony Alpha 9 II groundbreaking full-frame Exmor RSTM CMOS sensor and BIONZ XTM processor team up for 20fps continuous
//     shooting with AF/AE tracking. Stunning high-speed performance and ample buffer let you capture the decisive
//     moment.Electronic shutter speeds up to 1/32000 sec 14 far surpass mechanical shutters for a new imaging
//     expression.
//     The 24.2-megapixel 1 full-frame high-speed stacked image
//     sensor stores data in integral memory for lightning-fast readout. The CMOS sensor and enhanced BIONZ X
//     image-processing engine together bring you true digital freedom.
//     [Stacked back-illuminated structure with integral memory]
//     (1) Pixel area (2) Integral memory (3) Hi-speed signal processing circuit (4) Image processing engine`,

//     l1: `1x - Body camera unit`,
//     l2: `2x - Rechargeable battery`,
//     l3: `1x - Battery charger`,
//     l4: `1x - Shoulder strap`,
//     l5: `2x - Body cap`,

//     img_1: "/images/alpha9-images/a9II-img1.png",
//     img_2: "/images/alpha9-images/a9II-img3.jpg",
//     img_3: "/images/alpha9-images/a9II-img4.png",
//     prodAlt: "Alpha 9 II Image",
//   },
//   {
//     id: "item-1",
//     category: "body",
//     title: "Sony a7R V",
//     shortDescription: `The α7R V is equipped with an AI processing unit specifically dedicated to interpreting significant amounts
//     of data to enable more accurate recognition of subjects and recognition of a wider range of subject types.`,
//     img: "/images/alpha7R.png",
//     alt: "Alpha7R Image",
//     price: "3999",
//     currency: "$",
//     features: `The α7R V is equipped with an AI processing unit specifically dedicated to interpreting significant amounts
//     of data to enable more accurate recognition of subjects and recognition of a wider range of subject types.The
//     α7R V uses subject form data to recognize movement, providing a roughly 60% improvement in human eye
//     recognition3.
//     The output from the 35mm full-frame back-illuminated Exmor R™ CMOS image sensor, with approximately 61.0
//     million effective pixels6, is processed in real time to the fullest extent by the advanced BIONZ XR™
//     processing engine to deliver breathtaking detail in both stills and movies.The sensor is packed with Sony's
//     image sensor technologies, with effective noise reduction realized by its back-illuminated structure.`,

//     l1: `1x - Body camera unit`,
//     l2: `1x - Rechargeable battery`,
//     l3: `1x - Battery charger`,
//     l4: `1x - Shoulder strap`,
//     l5: `1x - Body cap`,

//     img_1: "/images/alpha7-images/a7rv-img1.png",
//     img_2: "/images/alpha7-images/a7rv-img2.jpg",
//     img_3: "/images/alpha7-images/a7rv-img4.jpeg",
//     prodAlt: "Alpha 7R V Image",
//   },
//   {
//     id: "item-2",
//     category: "body",
//     title: "Sony aFX III",
//     shortDescription: `Sony's FX3 Cinema Line camera brings the visions of passionate content creators to life. Cinematic
//     expression is matched with reliable performance and streamlined operation to serve the needs of today's
//     creative community. Compact and lightweight, it's easy to carry and handle.`,
//     img: "/images/alpha-FX3.png",
//     alt: "AlphaFX3 Image",
//     price: "3499",
//     currency: "$",
//     features: `The FX3's full-frame image sensor is coupled with innovative light-gathering techniques to let you capture
//     clear and usable images even in dim light. The standard ISO sensitivity of 80–102400 for movies is expandable
//     all the way up to 409600.The FX3 offers an exceptional 15+ stops2 of dynamic range to handle settings ranging
//     from well-lit interiors and outdoors in mid-day to morning and evening shots.
//     Even at high frame rates, detailed 4K imagery is captured thanks to the FX3's high-precision AF and high-speed
//     readout capabilities. Slow and Quick (S&Q) mode gives you full control over the shooting frame rate, for
//     beautiful motion sequences at up to 5x slow motion (with 24p output).Sophisticated tracking features keep your
//     subject in steady focus, so you can concentrate on composition.`,

//     l1: `1x - Body camera unit`,
//     l2: `2x - Rechargeable battery`,
//     l3: `1x - Battery charger`,
//     l4: `1x - Shoulder strap`,
//     l5: `2x - Body cap`,

//     img_1: "/images/alphafx3-images/afxIII-img2.jpeg",
//     img_2: "/images/alphafx3-images/afxIII-img6.jpg",
//     img_3: "/images/alphafx3-images/afxIII-img3.jpg",
//     prodAlt: "Alpha FX3 Image",
//   },
//   {
//     id: "item-3",
//     category: "lens",
//     title: "G-Master",
//     shortDescription: `At the 12-mm end of its range, this 12–24-mm constant F2.8 zoom lens offers an ultra-wide angle of
//     view.Sony G Master image deliver quality in a lightweight lens that also features fast, precise autofocus,
//     smooth control.`,
//     img: "/images/g-master.png",
//     alt: "G-Master Image",
//     price: "2999",
//     currency: "$",
//     tag: "New Product",
//     features: `The ultra-wide 12-mm angle of view available with this versatile, makes it possible to emphasize distance and
//     create dynamic perspectives that are beyond the scope of the human eye. 12–24-mm zoom with a constant F2.8
//     maximum aperture is ideal for shooting night scenes, starry skies, and other low-light subjects at low
//     sensitivities without having to use extremely slow shutter speeds.
//     Three XA elements, including the largest ever made for any α lens, combine with one
//     aspherical element in an innovative optical design that achieves stunning G Master resolution throughout the
//     image area.Two Super ED (Extra-low Dispersion) and three ED glass elements suppress chromatic aberration that
//     can degrade resolution in this type of large-aperture lens, ensuring that color smearing does not occur
//     anywhere in the image area so that maximum sharpness is maintained throughout.`,

//     l1: `1x - Lens unit`,
//     l2: `2x - Lens hood`,
//     l3: `1x - Lens cap`,
//     l4: `1x - Rear Filter Holder`,
//     l5: `1x - Case`,

//     img_1: "/images/g-lens/g-lens-img4.jpg",
//     img_2: "/images/g-lens/g-lens-img2.jpg",
//     img_3: "/images/g-lens/g-lens-img3.jpeg",
//     prodAlt: "G-Master Lens Image",
//   },
//   {
//     id: "item-4",
//     category: "lens",
//     title: "G-SSM II",
//     shortDescription: `Zoom from 70mm medium telephoto to 200mm telephoto with a constant F2.8 maximum aperture. Original Sony
//     Nano AR Coating technology suppresses internal reflections, minimizing flare and ghosting for outstanding
//     clarity from highlights to well-defined blacks.`,
//     img: "/images/g-ssm2.jpg",
//     alt: "G-SMM Image",
//     price: "2499",
//     currency: "$",
//     features: `Zoom from 70mm medium telephoto to 200mm telephoto with a constant F2.8 maximum aperture. Original Sony Nano
//     AR Coating technology suppresses internal reflections, minimizing flare and ghosting for outstanding clarity
//     from highlights to well-defined blacks. Four ED glass elements contribute to prime-lens class sharpness
//     throughout the zoom range, but this lens can also produce gorgeous background bokeh when needed.
//     Effectively suppress reflections that can cause flare and ghosting with Sony's original Nano AR Coating
//     technology. This precisely defined regular nano-structure allows accurate light transmission, contributing to
//     high-quality images, even more so than lenses with coatings that use an irregular nano-structure. The
//     reflection suppression characteristic of the Nano AR Coating is superior to conventional anti-reflective
//     coatings, providing a notable improvement in clarity, contrast, and overall image quality.`,

//     l1: `1x - Lens unit`,
//     l2: `2x - Lens hood`,
//     l3: `2x - Lens cap`,
//     l4: `2x - Rear Filter Holder`,
//     l5: `1x - Case`,

//     img_1: "/images/g-ssm/g-ssm-img1.jpg",
//     img_2: "/images/g-ssm/g-ssm-img3.jpg",
//     img_3: "/images/g-ssm/g-ssm-img2.jpg",
//     prodAlt: "G-SSM II Lens Image",
//   },
//   {
//     id: "item-5",
//     category: "flash",
//     title: "GN60RM flash",
//     shortDescription: `The HVL-GN60RM quick-mount flash unit features high power GN602, fast continuous shooting and fast
//     operation, ideal for advanced users and professionals. Wireless radio transmitter/receiver functionality is
//     included.`,
//     img: "/images/flash.png",
//     alt: "Flash Image",
//     price: "599",
//     currency: "$",
//     tag: "New Product",
//     features: `The high GN60RM output and 220 times2 continuous emission of this flash unit provides plenty of power for
//     various shooting.Charge cycle time is 1.7 seconds2, or just 0.6 seconds2 with the External Battery Adaptor
//     (FA-EBA1) (optional) for continuous shooting. Proper flash synchronisation is maintained during continuous
//     shooting, minimising flash misfires and ruined shots.Quick Shift Bounce is Sony’s original flash head rotating
//     mechanism with the main unit tiltable from horizontal to vertical and it allows fast flash position changes.
//     (90° left and right, 150° up/8° down)
//     An independent light output level button (LEVEL -/+ button) allows direct control of output or compensation
//     for efficient workflow. Paired wireless flashes can also be easily adjusted via a LCD panel.Conventional
//     optical triggering and wireless radio triggering cover a wide range of situations. A HVL-F60RM mounted on a
//     compatible camera can be paired with off-camera units to provide reliable communication over long distances in
//     conditions that would make optical communication difficult. Slow sync, rear-curtain sync, and multi flash are
//     supported.5`,

//     l1: `1x - Flash unit`,
//     l2: `1x - Flash cap`,
//     l3: `1x - Case`,

//     img_1: "/images/sony-flash/flash-img6.jpg",
//     img_2: "/images/sony-flash/flash-img5.jpg",
//     img_3: "/images/sony-flash/flash-img7.jpg",
//     prodAlt: "G-SSM II Lens Image",
//   },
// ];

// localStorage.setItem("productList", JSON.stringify(productList));
// console.log(productList);

// function generateList() {
//   for (let i = 0; i < listLength; i++) {
//     const item = {
//       id: `item-${i}`,
//       title: `Title of product ${i}`,
//       shortDescription: "Some text about the product we want to sell",
//       img: `https://picsum.photos/200/300?random=${i}`,
//       alt: `Item ${i}`,
//       price: 100 + i * 10,
//       currency: `lei`,
//     };
//     productList.push(item);
//   }
//   localStorage.setItem("productList", JSON.stringify(productList));
//   // setam pe cheia "productList" toate produsele realizare in for-ul de mai sus.
//   // pentru ca localStorage-ul lucreaza doar cu stringuri trebuie sa luam obiectul "item" si sa-l transformam intr-un string
// }

// generateList();
